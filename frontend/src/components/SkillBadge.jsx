// Reusable SkillBadge: shows one skill with a small colored dot.
//
// Usage: <SkillBadge name="React" status="matched" />
//
// status: "matched" (green) | "weak" (amber) | "missing" (red = accent color)
const STATUS_CLASSES = {
  matched: {
    chip: "border-emerald-200 bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
  },
  weak: {
    chip: "border-amber-200 bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
  },
  missing: {
    chip: "border-red-100 bg-red-50 text-primary",
    dot: "bg-primary",
  },
};

function SkillBadge({ name, status = "matched" }) {
  const classes = STATUS_CLASSES[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium ${classes.chip}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${classes.dot}`}></span>
      {name}
    </span>
  );
}

export default SkillBadge;
