import { useState } from "react";
import { Target, CircleCheck, CircleAlert, CircleX } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import SkillBadge from "../components/SkillBadge.jsx";
import Button from "../components/Button.jsx";

// Sample skills shown while the backend isn't connected (labeled in the UI).
const SAMPLE_SKILLS = {
  matched: ["Core Java", "SQL", "Git & GitHub", "HTML", "CSS"],
  weak: ["Spring Boot", "REST APIs"],
  missing: ["Docker", "Spring Security", "Microservices", "Kafka"],
};

// Which tab is active: "matched", "weak" or "missing".
const TABS = [
  { key: "matched", label: "Matched" },
  { key: "weak", label: "Weak" },
  { key: "missing", label: "Missing" },
];

// Small colored icon shown in each tab header.
function TabIcon({ status }) {
  if (status === "matched")
    return <CircleCheck size={16} className="text-emerald-500" />;
  if (status === "weak")
    return <CircleAlert size={16} className="text-amber-500" />;
  return <CircleX size={16} className="text-primary" />;
}

function SkillGapPage() {
  // Remembers which tab the user clicked. Defaults to "matched".
  const [activeTab, setActiveTab] = useState("matched");

  const skills = SAMPLE_SKILLS[activeTab];

  return (
    <div className="min-h-screen bg-surface">
      <Navbar authenticated activePath="/skill-gap" />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {/* Page heading with "sample data" badge */}
        <header className="flex flex-wrap items-center gap-3">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Skill gap
            </h1>
            <p className="mt-2 text-muted">
              How your skills compare to your target role.
            </p>
          </div>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            Sample data
          </span>
        </header>

        {/* Summary strip: three small count cards */}
        <section className="mt-8 grid grid-cols-3 gap-4">
          <Card padding="sm" className="text-center">
            <p className="text-2xl font-bold text-emerald-600">
              {SAMPLE_SKILLS.matched.length}
            </p>
            <p className="mt-1 text-sm text-muted">Matched</p>
          </Card>
          <Card padding="sm" className="text-center">
            <p className="text-2xl font-bold text-amber-600">
              {SAMPLE_SKILLS.weak.length}
            </p>
            <p className="mt-1 text-sm text-muted">Weak</p>
          </Card>
          <Card padding="sm" className="text-center">
            <p className="text-2xl font-bold text-primary">
              {SAMPLE_SKILLS.missing.length}
            </p>
            <p className="mt-1 text-sm text-muted">Missing</p>
          </Card>
        </section>

        {/* Tabs + skill list */}
        <Card padding="lg" className="mt-6">
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? "bg-primary text-white"
                    : "border border-line bg-white text-muted hover:text-ink"
                }`}
              >
                <TabIcon status={tab.key} />
                {tab.label}
                {/* Count shown next to each tab */}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    activeTab === tab.key
                      ? "bg-white/20"
                      : "bg-surface text-muted"
                  }`}
                >
                  {SAMPLE_SKILLS[tab.key].length}
                </span>
              </button>
            ))}
          </div>

          {/* Skill badges for the active tab */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <SkillBadge key={skill} name={skill} status={activeTab} />
            ))}
          </div>

          <p className="mt-6 text-xs text-muted">
            Sample data — your real skill gap appears here after an analysis.
          </p>
        </Card>

        {/* Suggestion card */}
        <Card padding="md" className="mt-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Target size={18} className="mt-0.5 shrink-0 text-primary" />
              <p className="text-sm text-muted">
                Focusing on your missing skills first usually gives the
                biggest improvement.
              </p>
            </div>
            <Button size="sm" variant="secondary">
              Generate roadmap
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}

export default SkillGapPage;
