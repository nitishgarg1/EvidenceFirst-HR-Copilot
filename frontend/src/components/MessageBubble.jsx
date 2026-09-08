import Citations from "./Citations";

export default function MessageBubble({
  role,
  avatar = "AI",
  source,
  citations = [],
  children,
}) {
  const isUser = role === "user";

  return (
    <div className={`mb-6 flex gap-3 ${isUser ? "justify-end" : ""}`}>
      {!isUser && (
        <div className="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-avatar text-[11px] font-extrabold">
          {avatar}
        </div>
      )}
      <div
        className={`max-w-[760px] rounded-2xl border px-[17px] py-[15px] leading-[1.55] ${
          isUser ? "border-user-line bg-user" : "border-bubble-line bg-bubble"
        }`}
      >
        {children}
        {source && (
          <div className="mt-2.5 text-[11px] uppercase tracking-[.08em] text-[#7ee6b1]">
            Source: {source}
          </div>
        )}
        <Citations items={citations} />
      </div>
    </div>
  );
}
