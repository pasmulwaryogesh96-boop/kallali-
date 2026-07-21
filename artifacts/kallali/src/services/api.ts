const API_BASE_URL = "/api";

console.log("VITE_API_BASE_URL =", API_BASE_URL);

export async function api<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    throw new Error((data as any).message || "Something went wrong");
  }

  return data as T;
}
