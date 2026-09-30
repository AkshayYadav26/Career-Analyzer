// Reusable Card component: a rounded white panel with a soft border.
//
// Usage:
//   <Card>...anything...</Card>
//   <Card padding="lg" className="mt-4">...</Card>
//
// padding: "sm" | "md" (default) | "lg" | "none" — how much space inside the card.
// className: extra Tailwind classes from the page that uses the card.
function Card({ children, padding = "md", className = "" }) {
  const paddingClasses = {
    none: "",
    sm: "p-5",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`rounded-2xl border border-line bg-card shadow-sm ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
