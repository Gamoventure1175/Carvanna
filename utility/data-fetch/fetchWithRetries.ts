async function fetchWithRetries(
    url: string,
    options = {},
    retries = 3,
    backoff = 1000
  ): Promise<Response> {
    let lastError: any;
  
    for (let i = 0; i < retries; i++) {
      try {
        return await fetch(url, options);
      } catch (err) {
        lastError = err;
        console.error(`Attempt ${i + 1} failed:`, err);
        await new Promise((resolve) => setTimeout(resolve, backoff * 2 ** i)); // Exponential backoff
      }
    }
  
    throw lastError || new Error('All retries failed');
  }
  

export default fetchWithRetries;