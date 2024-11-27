/**
 * Encodes a Shopify global ID
 *
 * https://shopify.dev/docs/api/usage/gids
 *
 * @param resourceName - The name of the resource, e.g. `Product`, `Order`, `Customer`
 * @param id - The ID of the resource
 * @returns Decoded Global ID, in the format `gid://shopify/resourceName/id`
 */
export declare const encodeGlobalID: (resourceName: ResourceName, id: string | number | bigint) => string;
export type ResourceName = 'Customer' | 'Collection' | 'DeliveryCarrierService' | 'DeliveryLocationGroup' | 'DeliveryProfile' | 'DeliveryZone' | 'DraftOrder' | 'DraftOrderLineItem' | 'Duty' | 'EmailTemplate' | 'Fulfillment' | 'FulfillmentEvent' | 'FulfillmentService' | 'InventoryItem' | 'InventoryLevel' | 'LineItem' | 'Location' | 'MarketingEvent' | 'MediaImage' | 'Metafield' | 'Metaobject' | 'OnlineStoreArticle' | 'OnlineStoreBlog' | 'OnlineStorePage' | 'Order' | 'OrderTransaction' | 'Product' | 'ProductImage' | 'ProductVariant' | 'Refund' | 'Shop' | 'StaffMember' | 'Theme' | (string & {});
//# sourceMappingURL=index.d.ts.map