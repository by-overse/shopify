/**
 * Fetches data from the app.
 *
 * @param requestUrl - The URL to fetch data from.
 * @param sessionToken - The session token to use for authentication.
 * @returns The response from the app.
 */
async function fetchApp(requestUrl, sessionToken) {
    try {
        const token = await sessionToken.get();
        const res = await fetch(`${requestUrl}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return res;
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
    return null;
}

export { fetchApp };
