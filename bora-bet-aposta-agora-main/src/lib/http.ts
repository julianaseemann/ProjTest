import { API_URL } from "../config/api";

type Method = "GET" | "POST" | "PUT" | "DELETE";

async function request(path: string, method: Method = "GET", body?: any, auth = true) {
  const token = localStorage.getItem("token"); // ou use context
  const headers: Record<string,string> = { "Content-Type": "application/json" };
  if (auth && token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include" // só se backend usa cookies
  });

  if (!res.ok) {
    const text = await res.text().catch(()=>"");
    let error;
    try { error = JSON.parse(text); } catch { error = text; }
    throw { status: res.status, data: error };
  }

  return res.status === 204 ? null : res.json();
}

export default { request };
