import type { useApi } from '@shopify/ui-extensions-react/customer-account';

export type StorefrontApiClient = ReturnType<typeof useApi>['query'];

/**
 * Fetches data from the Storefront API.
 *
 * You can use the generic type parameter to specify the shape of the data you expect to receive.
 *
 * @param query - The Storefront API client.
 * @param queryParams - The query parameters.
 * @returns The data from the Storefront API.
 */
export async function fetchStorefrontApi<T>(
  storefront: StorefrontApiClient,
  ...queryParams: Parameters<StorefrontApiClient>
) {
  try {
    const [queryString, options] = queryParams;

    // TODO - find a way to type the Variables instead of unknown, that also scales with the change of versioning in the client (so we can rely in the underlying type)
    const responseData = await storefront<T, unknown>(queryString, {
      ...options,
    });

    const { data, errors } = responseData || {};

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
