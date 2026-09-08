import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ChatWindow from "./components/ChatWindow";
import ExampleQuestions from "./components/ExampleQuestions";
import Composer from "./components/Composer";
import TracePanel from "./components/TracePanel";
import UploadModal from "./components/UploadModal";
import { useChat } from "./hooks/useChat";

export default function App() {
  const { messages, trace, sourceUsed, loading, send } = useChat();
  const [uploadOpen, setUploadOpen] = useState(false);

  return (
    <div className="grid h-dvh grid-cols-1 grid-rows-1 md:grid-cols-[220px_1fr] lg:grid-cols-[270px_1fr_310px]">
      <Sidebar onOpenUpload={() => setUploadOpen(true)} />

      <main className="flex min-h-0 min-w-0 flex-col overflow-hidden bg-[radial-gradient(circle_at_top,#141b26_0,#0a0d12_44%)]">
        <Topbar />
        <ChatWindow messages={messages} loading={loading} />
        <div className="px-[15px] pb-[30px] md:px-[7%]">
          <ExampleQuestions onSelect={send} disabled={loading} />
          <Composer onSend={send} disabled={loading} />
        </div>
      </main>

      <TracePanel trace={trace} sourceUsed={sourceUsed} />
      <UploadModal open={uploadOpen} onClose={() => setUploadOpen(false)} />
    </div>
  );
}
