import { useState } from "react";
import { ingestDocument } from "../api/client";

export default function UploadModal({ open, onClose }) {
  const [adminKey, setAdminKey] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  if (!open) return null;

  const upload = async () => {
    if (!file) {
      setStatus("Choose a file first.");
      return;
    }
    setBusy(true);
    setStatus("Indexing document...");
    try {
      const data = await ingestDocument(file, adminKey);
      setStatus(`Indexed ${data.file}: ${data.chunks} chunks.`);
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    } finally {
      setBusy(false);
    }
  };

  const inputClass =
    "my-[7px] block w-full rounded-[10px] border border-[#2d394b] bg-transparent p-2.5 text-[#eef3f8] outline-none";

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5">
      <div className="w-full max-w-[520px] rounded-[18px] border border-[#2a3647] bg-composer p-[22px]">
        <div className="flex items-center justify-between">
          <h2 className="m-0 text-2xl font-bold">Ingest HR Document</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="cursor-pointer text-[28px] text-white"
          >
            ×
          </button>
        </div>

        <p className="my-4 leading-[1.55] text-muted">
          Upload PDF, TXT, Markdown, or DOCX. The document is chunked, embedded, and indexed
          into Pinecone.
        </p>

        <input
          type="password"
          placeholder="Admin API key"
          value={adminKey}
          onChange={(e) => setAdminKey(e.target.value)}
          className={inputClass}
        />
        <input
          type="file"
          accept=".pdf,.txt,.md,.docx"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className={inputClass}
        />

        <button
          onClick={upload}
          disabled={busy}
          className="mt-2 w-full cursor-pointer rounded-[11px] bg-green p-[13px] font-extrabold text-[#07100c] disabled:cursor-not-allowed disabled:opacity-55"
        >
          Index Document
        </button>
        <div className="mt-2.5 text-[13px] text-[#91a0b1]">{status}</div>
      </div>
    </div>
  );
}
