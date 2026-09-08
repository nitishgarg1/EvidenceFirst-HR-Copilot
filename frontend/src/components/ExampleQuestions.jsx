import { EXAMPLE_QUESTIONS } from "../constants";

export default function ExampleQuestions({ onSelect, disabled }) {
  return (
    <div className="mb-2.5 flex flex-wrap gap-2">
      {EXAMPLE_QUESTIONS.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          disabled={disabled}
          className="cursor-pointer rounded-[10px] border border-btn-line bg-btn px-2.5 py-2 text-xs text-[#dbe4ee] hover:bg-[#1b2431] disabled:cursor-not-allowed disabled:opacity-55"
        >
          {q}
        </button>
      ))}
    </div>
  );
}
