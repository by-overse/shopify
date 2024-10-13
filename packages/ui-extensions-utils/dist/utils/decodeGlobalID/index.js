/**
 * Decode a Shopify global ID
 *
 * https://shopify.dev/docs/api/usage/gids
 *
 * @param globalID - Global ID, in the format `gid://shopify/ResourceName/ID`
 * @returns Decoded global ID
 */
export function decodeGlobalID(globalID) {
    const parts = globalID.split('/');
    return parts[parts.length - 1];
}
