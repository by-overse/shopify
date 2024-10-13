export declare function useFetchState<T>(): [FetchState<T>, import("react").Dispatch<import("react").SetStateAction<FetchState<T>>>];
export type FetchState<T> = {
    data?: T | null;
    loading: boolean;
    error?: unknown | null;
};
//# sourceMappingURL=index.d.ts.map