/**
 * Encodes a Shopify global ID
 *
 * https://shopify.dev/docs/api/usage/gids
 *
 * @param resourceName - The name of the resource, e.g. `Product`, `Order`, `Customer`
 * @param id - The ID of the resource
 * @returns Decoded Global ID, in the format `gid://shopify/resourceName/id`
 */
export const encodeGlobalID = (resourceName: ResourceName, id: string | number) =>
  `gid://shopify/${resourceName}/${id}`;

// eslint-disable-next-line @typescript-eslint/ban-types
export type ResourceName = 'Metaobject' | 'Product' | 'Order' | 'Customer' | (string & {});
