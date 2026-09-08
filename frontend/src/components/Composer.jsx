import { useState } from "react";

export default function Composer({ onSend, disabled }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const question = value.trim();
    if (!question || disabled) return;
    onSend(question);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) submit(e);
  };

  return (
    <form
      onSubmit={submit}
      className="flex gap-2.5 rounded-2xl border border-composer-line bg-composer p-2.5"
    >
      <textarea
        rows={2}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask an HR policy or employee support question..."
        className="w-full resize-none bg-transparent p-2.5 text-[#eef3f8] outline-none"
      />
      <button
        type="submit"
        disabled={disabled}
        className="cursor-pointer rounded-[11px] bg-green px-[18px] font-extrabold text-[#07100c] disabled:cursor-not-allowed disabled:opacity-55"
      >
        Ask Agent
      </button>
    </form>
  );
}
