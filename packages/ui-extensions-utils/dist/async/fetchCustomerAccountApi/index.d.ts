export type FetchCustomerAccountOptions = {
    /** The API version to use. */
    version?: string;
    /** The query variables. */
    variables?: Record<string | number | symbol, unknown>;
};
/**
 * Fetches customer account data from the Shopify Admin API.
 *
 * You can use the generic type parameter to specify the shape of the data you expect to receive.
 *
 * @param query - The GraphQL query string.
 * @param options - The query options.
 * @returns The customer account data.
 */
export declare function fetchCustomerAccountApi<T>(query: string, options: FetchCustomerAccountOptions): Promise<T | null | undefined>;
export type GraphQLResponse<T> = {
    data?: T;
    errors?: RichGraphQLError[];
    extensions?: {
        cost: {
            requestedQueryCost: number;
            actualQueryCost: number;
            throttleStatus: {
                maximumAvailable: number;
                currentlyAvailable: number;
                restoreRate: number;
            };
        };
    };
};
export type RichGraphQLError = {
    message: string;
    extensions?: {
        code: string;
        fieldName?: string;
        typeName?: string;
    };
    locations: {
        column: number;
        line: number;
    }[];
    path?: string[];
};
//# sourceMappingURL=index.d.ts.map