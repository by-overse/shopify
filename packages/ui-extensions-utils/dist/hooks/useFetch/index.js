import { useEffect } from 'react';
import { useFetchState } from '../useFetchState';
/**
 * Fetches data and returns the data, loading state, and error state.
 *
 * @param fetchFunction - The function that fetches the data.
 * @param options - The options for the fetch.
 * @returns The data, loading state, and error state.
 */
export const useFetch = (fetchFunction, { retry, suspend } = { suspend: false, retry: false }) => {
    const [fetchState, setFetchState] = useFetchState();
    useEffect(() => {
        if (suspend || (!fetchState.loading && !retry))
            return;
        async function queryApi() {
            try {
                const data = await fetchFunction();
                setFetchState({ data, error: null, loading: false });
            }
            catch (error) {
                console.error(error); // eslint-disable-line no-console
                setFetchState({ data: null, error, loading: false });
            }
        }
        queryApi().catch(console.error); // eslint-disable-line no-console
    }, [fetchFunction, fetchState.loading, retry, setFetchState, suspend]);
    return [fetchState.data, fetchState.loading, fetchState.error];
};
