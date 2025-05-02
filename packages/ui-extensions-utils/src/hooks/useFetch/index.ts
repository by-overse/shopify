import { useEffect } from 'react';
import { useFetchState } from '../useFetchState';

export type BaseFetchOptions = {
  /** If true, the fetch will be paused until it's back to false */
  suspend?: boolean;
  /** If true, the fetch will be retried, even if it already loaded once (as long as `suspense` is false). Make sure you clean-up this state to avoid loops. */
  retry?: boolean;
};

export type FetchFunction<T> = () => Promise<T>;

/**
 * Fetches data and returns the data, loading state, and error state.
 *
 * @deprecated This hook will be removed in a future version. Please use an alternative data fetching solution, like SWRL or React Query.
 *
 * @param fetchFunction - The function that fetches the data.
 * @param options - The options for the fetch.
 * @returns The data, loading state, and error state.
 */
export const useFetch = <T>(
  fetchFunction: FetchFunction<T>,
  { retry, suspend }: BaseFetchOptions = { suspend: false, retry: false }
) => {
  const [fetchState, setFetchState] = useFetchState<T>();

  useEffect(() => {
    if (suspend || (!fetchState.loading && !retry)) return;

    async function queryApi() {
      try {
        const data = await fetchFunction();
        setFetchState({ data, error: null, loading: false });
      } catch (error) {
        console.error(error); // eslint-disable-line no-console
        setFetchState({ data: null, error, loading: false });
      }
    }

    queryApi().catch(console.error); // eslint-disable-line no-console
  }, [fetchFunction, fetchState.loading, retry, setFetchState, suspend]);

  return [fetchState.data, fetchState.loading, fetchState.error] as const;
};
