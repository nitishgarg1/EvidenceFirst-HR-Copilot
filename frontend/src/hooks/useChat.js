import { useCallback, useRef, useState } from "react";
import { askQuestion } from "../api/client";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [trace, setTrace] = useState([]);
  const [sourceUsed, setSourceUsed] = useState("—");
  const [loading, setLoading] = useState(false);
  const busy = useRef(false);

  const send = useCallback(async (text) => {
    const question = text.trim();
    if (!question || busy.current) return;

    busy.current = true;
    setLoading(true);
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", text: question },
    ]);
    setTrace(["Running LangGraph workflow..."]);
    setSourceUsed("Running");

    try {
      const data = await askQuestion(question);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: data.answer,
          source: data.source_used,
          citations: data.citations || [],
        },
      ]);
      setTrace(data.trace || []);
      setSourceUsed(data.source_used);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "assistant", text: `Error: ${err.message}` },
      ]);
      setTrace(["Request failed"]);
      setSourceUsed("Error");
    } finally {
      busy.current = false;
      setLoading(false);
    }
  }, []);

  return { messages, trace, sourceUsed, loading, send };
}
