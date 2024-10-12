/**
 * Fetches customer account data from the Shopify Admin API.
 *
 * You can use the generic type parameter to specify the shape of the data you expect to receive.
 *
 * @param queryString - The GraphQL query string.
 * @param version - The API version, in the format 'YYYY-MM'.
 * @returns The customer account data.
 */
export async function fetchCustomerAccountApi<T>(queryString: Record<'query', string>, version: string) {
  const URL = `shopify://customer-account/api/${version}/graphql.json`;

  try {
    const { data, errors }: GraphQLResponse<T> = await (
      await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(queryString),
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

type GraphQLResponse<T> = {
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

type RichGraphQLError = {
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
