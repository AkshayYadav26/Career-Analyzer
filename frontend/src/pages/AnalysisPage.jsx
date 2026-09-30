import {
  Brain,
  Target,
  FileText,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import ProgressBar from "../components/ProgressBar.jsx";

// Sample data shown while the backend isn't connected (labeled in the UI).
const SAMPLE_STRENGTHS = [
  "Core Java",
  "SQL basics",
  "Git & GitHub",
  "Communication",
];

function AnalysisPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar authenticated activePath="/analysis" />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Page heading with a "sample data" badge so placeholders aren't mistaken for real results */}
        <header className="flex flex-wrap items-center gap-3">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Career analysis
            </h1>
            <p className="mt-2 text-muted">
              A summary of your current profile and career readiness.
            </p>
          </div>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            Sample data
          </span>
        </header>

        {/* Top row: readiness score + summary cards */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Readiness score card */}
          <Card padding="lg" className="lg:col-span-1">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Career readiness
            </h2>
            <p className="mt-4 text-5xl font-bold text-primary">62%</p>
            <p className="mt-2 text-sm text-muted">
              Estimated fit for your target role based on the sample analysis.
            </p>
            <div className="mt-5">
              <ProgressBar progress={62} showLabel={false} />
            </div>
          </Card>

          {/* Summary cards: target role, resume, skills found */}
          <Card padding="lg">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target size={20} />
              </span>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  Target role
                </h2>
                <p className="mt-1 text-lg font-semibold text-ink">
                  Backend Developer (Java)
                </p>
                <p className="mt-1 text-sm text-muted">
                  Set on the dashboard once connected.
                </p>
              </div>
            </div>
          </Card>

          <Card padding="lg">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FileText size={20} />
              </span>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  Resume status
                </h2>
                <p className="mt-1 text-lg font-semibold text-ink">
                  Analyzed (demo)
                </p>
                <p className="mt-1 text-sm text-muted">
                  Upload a real resume from the resume page.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Strengths section */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          <Card padding="lg" className="lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-ink">
                Detected strengths
              </h2>
              <Sparkles size={18} className="text-primary" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {SAMPLE_STRENGTHS.map((strength) => (
                <span
                  key={strength}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-sm font-medium text-emerald-700"
                >
                  {strength}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted">
              These skills were "detected" in the sample resume. Your real
              strengths will appear here after your first analysis.
            </p>
          </Card>

          {/* Next step CTA card */}
          <Card padding="lg" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-primary" />
                <h2 className="text-lg font-semibold text-ink">Next step</h2>
              </div>
              <p className="mt-2 text-sm text-muted">
                Continue your analysis by reviewing your skill gap in detail.
              </p>
            </div>
            <div className="mt-6">
              <Button className="w-full">
                View skill gap <ArrowRight size={16} />
              </Button>
            </div>
          </Card>
        </section>

        {/* Note about AI analysis */}
        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted">
          <Brain size={16} className="text-primary" />
          The AI-powered analysis will be connected to the backend soon.
        </p>
      </main>
    </div>
  );
}

export default AnalysisPage;
