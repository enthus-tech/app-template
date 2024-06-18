const instance = "http://192.168.1.16:3001/";

export async function fetchWrapper<T = unknown>(
  endpoint: string,
  init?: RequestInit | undefined
): Promise<T | null> {
  const endpointUrl = new URL(`${instance}${endpoint}`);
  const response = await fetch(endpointUrl, { ...init, cache: "no-store" });

  if (init?.method === "DELETE") {
    if (response.status === 204) {
      return null;
    }
  }
  if (!response.ok) {
    console.error(await response.json());

    throw new Error(response.statusText);
  }
  const data = await response.json();

  return data as T;
}

export async function Get<T = unknown>(
  route: string,
  headers?: HeadersInit | undefined
): Promise<T> {
  const req: RequestInit = { method: "GET", headers };
  const response = await fetchWrapper(route, req);

  return response as T;
}

export async function Post<T = unknown>(
  route: string,
  body?: object,
  headers?: HeadersInit | undefined
): Promise<T> {
  const req: RequestInit = {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", ...headers },
  };

  const response = await fetchWrapper(route, req);
  return response as T;
}

export async function Patch<T = unknown>(
  route: string,
  body?: object,
  headers?: HeadersInit | undefined
): Promise<T> {
  const req: RequestInit = {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", ...headers },
  };
  const response = await fetchWrapper(route, req);
  return response as T;
}

export async function Delete(
  route: string,
  headers?: HeadersInit | undefined
): Promise<unknown> {
  const req: RequestInit = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", ...headers },
  };
  const response = await fetchWrapper(route, req);
  return response;
}
