import { Brain, Info } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

// Sample conversation shown so the layout is visible.
// "user" messages align right, "assistant" messages align left.
const SAMPLE_MESSAGES = [
  {
    from: "user",
    text: "What should I learn first to become a backend developer?",
  },
  {
    from: "assistant",
    text: "Based on your sample profile, starting with Java foundations and SQL gives you the strongest base. After that, Spring Boot ties everything together.",
  },
  {
    from: "user",
    text: "How long until I'm job ready?",
  },
  {
    from: "assistant",
    text: "Everyone moves at a different pace — your roadmap estimates a few months at a steady learning rhythm. Focus on finishing one step at a time.",
  },
];

function AiAssistantPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar authenticated activePath="/assistant" />

      <main className="mx-auto flex max-w-3xl flex-col px-4 py-10 sm:px-6">
        {/* Page heading */}
        <header className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Brain size={22} />
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              AI Assistant
            </h1>
            <p className="mt-0.5 text-sm text-muted">
              Ask questions about your career plan.
            </p>
          </div>
        </header>

        {/* Chat window (static demo conversation) */}
        <Card padding="lg" className="mt-8 flex-1">
          <div className="space-y-4">
            {SAMPLE_MESSAGES.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[75%] ${
                    message.from === "user"
                      ? "rounded-br-md bg-primary text-white"
                      : "rounded-bl-md border border-line bg-surface text-ink"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Clear "demo" label so nobody thinks the AI answered for real */}
          <p className="mt-6 flex items-start gap-2 rounded-xl bg-surface px-4 py-3 text-xs text-muted">
            <Info size={14} className="mt-0.5 shrink-0 text-primary" />
            Demo conversation — the real AI assistant will be connected to the
            backend later.
          </p>
        </Card>

        {/* Message input (visual only — not functional yet) */}
        <Card padding="sm" className="mt-4">
          <form
            className="flex items-center gap-3"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              placeholder="Ask about skills, roles or your roadmap..."
              className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder-muted/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button type="submit" size="sm">
              Send
            </Button>
          </form>
        </Card>
      </main>
    </div>
  );
}

export default AiAssistantPage;
