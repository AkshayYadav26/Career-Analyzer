import { Link } from "react-router-dom";
import {
  User,
  FileText,
  Target,
  Brain,
  Zap,
  Route,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Circle,
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import ProgressBar from "../components/ProgressBar.jsx";

// ----- Sample data (clearly labeled in the UI as sample — no backend yet) -----

const SAMPLE_SKILL_GAP = { matched: 5, weak: 2, missing: 4 };

const SAMPLE_ROADMAP = [
  { step: "Java Foundations", done: true },
  { step: "Spring Boot", done: false },
  { step: "REST APIs", done: false },
  { step: "Spring Security", done: false },
];

// ----- Small helper components used only on this page -----

// One numbered stat (e.g. "5 Matched skills").
function StatCard({ number, label, accent = false }) {
  return (
    <Card padding="sm">
      <p
        className={`text-3xl font-bold ${
          accent ? "text-primary" : "text-ink"
        }`}
      >
        {number}
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </Card>
  );
}

// A row in the profile summary card.
function ProfileRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-muted">
        <Icon size={16} />
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          {label}
        </p>
        <p className="text-sm font-medium text-ink">{value}</p>
      </div>
    </div>
  );
}

// Quick action tile: an icon + label that links somewhere.
function QuickAction({ icon: Icon, label, to }) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-3 rounded-xl border border-line bg-white p-4 transition-all hover:border-primary/40 hover:shadow-md"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon size={18} />
      </span>
      <span className="text-sm font-medium text-ink">{label}</span>
      <ArrowRight
        size={16}
        className="ml-auto text-muted opacity-0 transition-opacity group-hover:opacity-100"
      />
    </Link>
  );
}

// ----- The dashboard page itself -----

function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar authenticated activePath="/dashboard" />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Page heading */}
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Career Dashboard
          </h1>
          <p className="mt-2 text-muted">
            Track your skills, career analysis and learning progress.
          </p>
        </header>

        {/* Stat row: skill gap numbers at a glance */}
        <section className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard number={SAMPLE_SKILL_GAP.matched} label="Matched skills" />
          <StatCard number={SAMPLE_SKILL_GAP.weak} label="Weak skills" />
          <StatCard
            number={SAMPLE_SKILL_GAP.missing}
            label="Missing skills"
            accent
          />
          <StatCard number="40%" label="Roadmap progress" />
        </section>

        {/* Two-column layout: main content + side column */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* ----- Left/main column ----- */}
          <div className="space-y-6 lg:col-span-2">
            {/* Profile summary */}
            <Card padding="lg">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-ink">Your profile</h2>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                  Setup incomplete
                </span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <ProfileRow
                  icon={User}
                  label="Name"
                  value="Not set yet"
                />
                <ProfileRow
                  icon={Target}
                  label="Target role"
                  value="Not selected"
                />
                <ProfileRow
                  icon={FileText}
                  label="Resume"
                  value="Not analyzed"
                />
              </div>
              <p className="mt-5 rounded-xl bg-surface px-4 py-3 text-sm text-muted">
                Sample data — real details will appear once accounts are
                connected.
              </p>
            </Card>

            {/* Career analysis */}
            <Card padding="lg">
              <h2 className="text-lg font-semibold text-ink">Career analysis</h2>
              <p className="mt-2 text-muted">
                Upload your resume and the AI will analyze your experience,
                skills and strengths against your target role.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link to="/resume">
                  <Button>
                    <FileText size={16} /> Upload resume
                  </Button>
                </Link>
                <Link to="/analysis">
                  <Button variant="secondary">
                    Start analysis <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Skill gap */}
            <Card padding="lg">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-ink">Skill gap</h2>
                <Link
                  to="/skill-gap"
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover"
                >
                  View all <ArrowRight size={14} />
                </Link>
              </div>

              <div className="mt-5 space-y-4">
                {[
                  { label: "Matched", value: SAMPLE_SKILL_GAP.matched, total: 11 },
                  { label: "Weak", value: SAMPLE_SKILL_GAP.weak, total: 11 },
                  { label: "Missing", value: SAMPLE_SKILL_GAP.missing, total: 11 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-ink">{row.label}</span>
                      <span className="text-muted">
                        {row.value} of {row.total}
                      </span>
                    </div>
                    <ProgressBar
                      progress={(row.value / row.total) * 100}
                      showLabel={false}
                    />
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs text-muted">
                Sample data — real numbers appear after your first analysis.
              </p>
            </Card>
          </div>

          {/* ----- Right/side column ----- */}
          <div className="space-y-6">
            {/* Roadmap */}
            <Card padding="lg">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-ink">Roadmap</h2>
                <Route size={18} className="text-primary" />
              </div>

              {/* Vertical step list with done/current dots */}
              <ul className="mt-4 space-y-3">
                {SAMPLE_ROADMAP.map((item) => (
                  <li key={item.step} className="flex items-center gap-3">
                    {item.done ? (
                      <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                    ) : (
                      <Circle size={18} className="shrink-0 text-line" />
                    )}
                    <span
                      className={`text-sm ${
                        item.done
                          ? "text-muted line-through"
                          : "font-medium text-ink"
                      }`}
                    >
                      {item.step}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <ProgressBar progress={40} />
              </div>
              <Link
                to="/roadmap"
                className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-primary hover:text-primary-hover"
              >
                Open full roadmap <ArrowRight size={14} />
              </Link>
            </Card>

            {/* Quick actions */}
            <Card padding="lg">
              <h2 className="text-lg font-semibold text-ink">Quick actions</h2>
              <div className="mt-4 space-y-3">
                <QuickAction icon={FileText} label="Upload resume" to="/resume" />
                <QuickAction icon={Zap} label="View analysis" to="/analysis" />
                <QuickAction icon={TrendingUp} label="View skill gap" to="/skill-gap" />
                <QuickAction icon={Brain} label="Ask AI assistant" to="/assistant" />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
