export default function TracePanel({ trace, sourceUsed }) {
  return (
    <aside className="hidden min-h-0 overflow-y-auto border-l border-line bg-panel p-[26px] lg:block">
      <h2 className="mt-0 text-2xl font-bold">Agent Trace</h2>
      <p className="mt-3 leading-[1.55] text-muted">
        Watch LangGraph decisions while the request runs.
      </p>

      <div className="my-5 flex flex-col gap-[9px]">
        {trace.length === 0 ? (
          <div className="text-[13px] text-[#657184]">No request yet.</div>
        ) : (
          trace.map((item, i) => (
            <div
              key={`${i}-${item}`}
              className="rounded-[10px] border border-[#273244] bg-btn p-[11px] text-xs"
            >
              {item}
            </div>
          ))
        )}
      </div>

      <div className="mt-5 flex flex-col gap-1.5 rounded-xl border border-[#2a3648] p-3.5">
        <span className="text-[11px] uppercase tracking-[.08em] text-[#7f8a99]">
          Final Source
        </span>
        <strong className="text-sm">{sourceUsed}</strong>
      </div>
    </aside>
  );
}
