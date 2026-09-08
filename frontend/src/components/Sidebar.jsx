import { WORKFLOW_STEPS } from "../constants";

export default function Sidebar({ onOpenUpload }) {
  return (
    <aside className="hidden min-h-0 flex-col justify-between gap-[30px] overflow-y-auto border-r border-line bg-panel p-7 md:flex">
      <div>
        <div className="inline-block rounded-[7px] bg-brand px-[9px] py-[7px] text-[11px] font-extrabold tracking-[.16em] text-mint">
          FDE Project
        </div>
        <h1 className="mb-3 mt-[18px] text-[30px] font-bold leading-[1.05]">
          EvidenceFirst
          <br />
          HR Copilot
        </h1>
        <p className="mt-3 leading-[1.55] text-muted">
          Private company HR knowledge first. External web only when evidence is weak.
        </p>
      </div>

      <div className="rounded-[14px] border border-card-line bg-card p-4">
        <h3 className="mb-3 text-sm font-bold">LangGraph Workflow</h3>
        {WORKFLOW_STEPS.map((step, i) => (
          <div
            key={step}
            className="my-[5px] border-l-2 border-[#3a4658] px-2.5 py-2 text-[13px] text-[#bac4d1]"
          >
            {i + 1}. {step}
          </div>
        ))}
      </div>

      <button
        onClick={onOpenUpload}
        className="cursor-pointer rounded-[10px] border border-btn-line bg-btn px-[13px] py-[11px] text-[#dbe4ee] hover:bg-[#1b2431]"
      >
        + Add HR Document
      </button>
    </aside>
  );
}
