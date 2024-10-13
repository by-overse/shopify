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
export async function fetchCustomerAccountApi<T>(query: string, options: FetchCustomerAccountOptions) {
  const { version, variables } = options;
  const URL = `shopify://customer-account/api/${version || '2024-10'}/graphql.json`; // TODO - check if we can default to "latest" instead of a hardcoded version

  try {
    const { data, errors }: GraphQLResponse<T> = await (
      await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })
    ).json();

    if (errors) {
      throw new Error(errors.map((error) => error.message).join('\n'));
    }

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return null;
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
