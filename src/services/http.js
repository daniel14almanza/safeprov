const URL_BASE = "https://localhost:7168/api/Provider";
const URL_SCREENING = "http://127.0.0.1:8000";

// Default headers for fetch
const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};


// Error class for http
class HttpError extends Error {
  constructor(response) {
    super(`Http Error: ${response.statusText}`);
    this.response = response;
  }
}


function handleResponse(response) {
  if (!response.ok) {
    throw new HttpError(response);
  }

    // If the response has no content (204), return null or an object
  if (response.status === 204) {
    return null; // or: return { success: true }
  }

  return response.json();
}



export async function getProviders() {
  const response = await fetch(URL_BASE, {
    method: "GET",
    headers: defaultHeaders,
  })

  return handleResponse(response);
}

export async function addProvider(provider) {
  const response = await fetch(URL_BASE,{
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(provider),
  })

  return handleResponse(response);
}


export async function updateProvider(provider) {
  const response = await fetch(`${URL_BASE}/${provider.id}`,{
    method: "PUT",
    headers: defaultHeaders,
    body: JSON.stringify(provider),
  })

  return handleResponse(response);
}



// export async function getProviderById(provider) {
//   const response = await fetch(`${URL_BASE}/${provider.id}`,{
//     method: "GET",
//     headers: "defaultHeaders",
//     body: JSON.stringify(provider),
//   })

//   return handleResponse(response);
// }

export async function getProviderById(id) {
  const response = await fetch(`${URL_BASE}/${id}`, {
    method: "GET",
    headers: defaultHeaders,
  });

  return handleResponse(response); // This should return JSON or throw
}



export async function deleteProvider(id) {
  const response = await fetch(`${URL_BASE}/${id}`,{
    method: "DELETE",
    headers: defaultHeaders,
  })

  return handleResponse(response);
}

export async function screening(name, source) {
  const response = await fetch(
    `${URL_SCREENING}/screening?name=${encodeURIComponent(name)}&source=${source}`,
    { headers: defaultHeaders }
  );
  return handleResponse(response);
}

