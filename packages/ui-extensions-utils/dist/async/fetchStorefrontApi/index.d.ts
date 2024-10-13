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
export declare function fetchStorefrontApi<T>(storefront: StorefrontApiClient, ...queryParams: Parameters<StorefrontApiClient>): Promise<T | null | undefined>;
//# sourceMappingURL=index.d.ts.map