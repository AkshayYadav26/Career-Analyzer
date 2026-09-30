import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Target,
  Brain,
  Route,
  FileText,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

// The three "How it works" steps shown on the landing page.
const STEPS = [
  {
    number: "1",
    title: "Upload your resume",
    description:
      "Add your resume (PDF or DOCX) so we can read your current skills and experience.",
  },
  {
    number: "2",
    title: "Pick your target role",
    description:
      "Tell us the job you're aiming for and the AI compares it with your profile.",
  },
  {
    number: "3",
    title: "Get your roadmap",
    description:
      "See matched, weak and missing skills, plus a step-by-step plan to improve.",
  },
];

// Features shown in the "What's inside" section.
const FEATURES = [
  {
    icon: Target,
    title: "Skill gap analysis",
    description:
      "See which skills match the role, which ones need work, and which are missing completely.",
  },
  {
    icon: Route,
    title: "Learning roadmap",
    description:
      "A clear, ordered plan of what to learn next instead of an endless list of courses.",
  },
  {
    icon: Brain,
    title: "AI career assistant",
    description:
      "Ask questions about your career path and get guidance based on your own profile.",
  },
  {
    icon: FileText,
    title: "Resume insights",
    description:
      "Understand how your resume reads today and what to strengthen before you apply.",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      {/* ---------- Hero ---------- */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Small badge above the heading */}
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-muted">
            <Sparkles size={14} className="text-primary" />
            Your AI career companion
          </span>

          {/* Large confident heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
            Find the gap between
            <br />
            you and your{" "}
            <span className="text-primary">dream role</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Upload your resume, pick a target role, and get a clear picture of
            your skills — with a step-by-step plan to close the gap.
          </p>

          {/* Primary + secondary CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/register">
              <Button size="lg">
                Get started free <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="secondary" size="lg">
                Log in
              </Button>
            </Link>
          </div>

          {/* Small trust line — kept honest, no exaggerated claims */}
          <p className="mt-6 text-sm text-muted">
            Free to use · No credit card required
          </p>
        </div>
      </section>

      {/* ---------- How it works: 3 steps ---------- */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              How it works
            </h2>
            <p className="mt-3 text-muted">
              Three simple steps from resume to a plan you can follow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step) => (
              <Card key={step.number} padding="lg">
                {/* Big accent number */}
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              What's inside
            </h2>
            <p className="mt-3 text-muted">
              Everything you need to understand your career readiness.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <Card key={feature.title} className="transition-shadow hover:shadow-md">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <feature.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Closing call-to-action ---------- */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Ready to see where you stand?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Create a free account, upload a resume, and get your first skill
            gap analysis in minutes.
          </p>
          <div className="mt-8">
            <Link to="/register">
              <Button size="lg">
                Create your account <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
                A
              </span>
              <span className="text-sm font-semibold text-ink">
                AI Career &amp; Skill Gap Analyzer
              </span>
            </div>
            <p className="text-sm text-muted">
              Built to help you plan your next career move.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-1 text-sm text-muted sm:justify-end">
            <CheckCircle2 size={14} className="text-emerald-500" />
            Demo project — analysis features coming soon
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
