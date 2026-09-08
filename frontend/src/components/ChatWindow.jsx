import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages, loading }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <section className="flex-1 overflow-y-auto px-[15px] py-9 md:px-[7%]">
      <MessageBubble role="assistant" avatar="HR">
        <strong>How can I help with HR policies or employee support?</strong>
        <p className="my-1.5">
          Try: “How many annual leave days do employees receive?” or ask something that may
          require current external employment information.
        </p>
      </MessageBubble>

      {messages.map((m) => (
        <MessageBubble key={m.id} role={m.role} source={m.source} citations={m.citations}>
          <div className="whitespace-pre-wrap">{m.text}</div>
        </MessageBubble>
      ))}

      {loading && (
        <MessageBubble role="assistant">
          <span className="text-muted">Thinking…</span>
        </MessageBubble>
      )}

      <div ref={endRef} />
    </section>
  );
}
