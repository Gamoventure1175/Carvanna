async function fetchWithRetries(url: string, options = {}, retries = 3): Promise<Response> {
    let lastError: any;
    
    for (let i = 0; i < retries; i++) {
        try {
            return await fetch(url, options);
        } catch (err) {
            lastError = err;
            console.error(`Attempt ${i + 1} failed:`, err);
        }
    }

    throw lastError || new Error("All retries failed")
}

export default fetchWithRetries;