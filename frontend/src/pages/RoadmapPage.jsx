import { Route, CircleCheck, Circle, Clock } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import Button from "../components/Button.jsx";

// Sample roadmap steps shown while the backend isn't connected (labeled in UI).
// status: "done" | "current" | "upcoming"
const SAMPLE_STEPS = [
  { title: "Java foundations", duration: "2–3 weeks", status: "done" },
  { title: "Spring Boot basics", duration: "3–4 weeks", status: "current" },
  { title: "REST APIs & databases", duration: "3 weeks", status: "upcoming" },
  { title: "Spring Security", duration: "2 weeks", status: "upcoming" },
  { title: "Docker & deployment", duration: "2 weeks", status: "upcoming" },
];

// How one timeline row looks based on its status.
const STEP_STYLES = {
  done: {
    icon: <CircleCheck size={20} className="text-emerald-500" />,
    title: "text-muted line-through",
  },
  current: {
    icon: <Circle size={20} className="text-primary" strokeWidth={2.5} />,
    title: "font-semibold text-ink",
  },
  upcoming: {
    icon: <Circle size={20} className="text-line" />,
    title: "font-medium text-ink",
  },
};

function RoadmapPage() {
  const totalSteps = SAMPLE_STEPS.length;
  const doneSteps = SAMPLE_STEPS.filter((s) => s.status === "done").length;
  const progressPercent = Math.round((doneSteps / totalSteps) * 100);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar authenticated activePath="/roadmap" />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {/* Page heading with "sample data" badge */}
        <header className="flex flex-wrap items-center gap-3">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Learning roadmap
            </h1>
            <p className="mt-2 text-muted">
              A step-by-step plan to close your skill gap.
            </p>
          </div>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            Sample data
          </span>
        </header>

        {/* Overall progress card */}
        <Card padding="lg" className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink">Overall progress</h2>
            <Route size={18} className="text-primary" />
          </div>
          <p className="mt-2 text-sm text-muted">
            {doneSteps} of {totalSteps} steps completed
          </p>
          <div className="mt-4">
            <ProgressBar progress={progressPercent} />
          </div>
        </Card>

        {/* Timeline card */}
        <Card padding="lg" className="mt-6">
          <h2 className="text-lg font-semibold text-ink">Your steps</h2>

          {/* Vertical timeline: each row has an icon, the step title and a duration */}
          <ul className="mt-6 space-y-0">
            {SAMPLE_STEPS.map((step, index) => {
              const style = STEP_STYLES[step.status];
              const isLast = index === SAMPLE_STEPS.length - 1;

              return (
                <li key={step.title} className="flex gap-4">
                  {/* Left side: icon + connecting line */}
                  <div className="flex flex-col items-center">
                    {style.icon}
                    {/* Draw the vertical line between steps */}
                    {!isLast && <div className="w-px flex-1 bg-line"></div>}
                  </div>

                  {/* Right side: text content */}
                  <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className={`text-base ${style.title}`}>
                        {step.title}
                      </p>
                      {step.status === "current" && (
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                          Up next
                        </span>
                      )}
                    </div>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                      <Clock size={13} /> {step.duration}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="mt-8 text-xs text-muted">
            Sample data — your real roadmap is generated after an analysis.
          </p>
        </Card>

        {/* Call to action */}
        <div className="mt-6 flex justify-center">
          <Button variant="secondary" size="lg">
            Regenerate roadmap
          </Button>
        </div>
      </main>
    </div>
  );
}

export default RoadmapPage;
