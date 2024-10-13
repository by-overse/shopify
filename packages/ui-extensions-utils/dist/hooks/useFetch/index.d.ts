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
 * @param fetchFunction - The function that fetches the data.
 * @param options - The options for the fetch.
 * @returns The data, loading state, and error state.
 */
export declare const useFetch: <T>(fetchFunction: FetchFunction<T>, { retry, suspend }?: BaseFetchOptions) => readonly [T | null | undefined, boolean, unknown];
//# sourceMappingURL=index.d.ts.map