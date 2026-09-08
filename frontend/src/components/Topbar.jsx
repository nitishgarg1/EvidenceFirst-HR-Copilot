export default function Topbar() {
  return (
    <header className="flex h-[70px] shrink-0 items-center justify-between border-b border-line px-[15px] text-sm md:px-7">
      <div className="flex items-center">
        <span className="mr-2 inline-block size-2 rounded-full bg-[#65d69a]" />
        <span>Employee Knowledge Copilot</span>
      </div>
      <span className="hidden rounded-full border border-[#293446] bg-[#151e29] px-[11px] py-2 text-[#aab6c5] md:block">
        Agentic RAG
      </span>
    </header>
  );
}
