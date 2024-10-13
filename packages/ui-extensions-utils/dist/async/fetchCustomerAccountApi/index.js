/**
 * Fetches customer account data from the Shopify Admin API.
 *
 * You can use the generic type parameter to specify the shape of the data you expect to receive.
 *
 * @param query - The GraphQL query string.
 * @param options - The query options.
 * @returns The customer account data.
 */
export async function fetchCustomerAccountApi(query, options) {
    const { version, variables } = options;
    const URL = `shopify://customer-account/api/${version || '2024-10'}/graphql.json`; // TODO - check if we can default to "latest" instead of a hardcoded version
    try {
        const { data, errors } = await (await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        })).json();
        if (errors) {
            throw new Error(errors.map((error) => error.message).join('\n'));
        }
        return data;
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
    return null;
}
