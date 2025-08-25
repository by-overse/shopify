export type FetchCustomerAccountOptions = {
  /** The API version to use. */
  version?: string;
  /** The query variables. */
  variables?: Record<string | number | symbol, unknown>;
};

/**
 * Fetches customer account data from the Shopify Customer Account API.
 *
 * You can use the generic type parameter to specify the shape of the data you expect to receive.
 *
 * @param query - The GraphQL query string.
 * @param options - The query options.
 * @returns The customer account data.
 */
export async function fetchCustomerAccountApi<T>(query: string, options: FetchCustomerAccountOptions) {
  const { version, variables } = options;
  const ENDPOINT = `shopify://customer-account/api/${version || '2025-07'}/graphql.json`; // TODO - check if we can default to "latest" instead of a hardcoded version

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const responseData: GraphQLResponse<T> = await response.json();

  return responseData;
}

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
