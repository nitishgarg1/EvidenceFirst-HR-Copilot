const API_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

async function parseResponse(res, fallbackMessage) {
  let data = null;
  try {
    data = await res.json();
  } catch {
    // response had no JSON body
  }
  if (!res.ok) {
    const detail = typeof data?.detail === "string" ? data.detail : fallbackMessage;
    throw new Error(detail);
  }
  return data;
}

export async function askQuestion(question) {
  const res = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });
  return parseResponse(res, "Request failed");
}

export async function ingestDocument(file, adminKey) {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch(`${API_URL}/api/ingest`, {
    method: "POST",
    headers: { "X-Admin-Key": adminKey },
    body: formData,
  });
  return parseResponse(res, "Upload failed");
}
