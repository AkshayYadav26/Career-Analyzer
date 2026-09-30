// Reusable Button component.
//
// Usage:
//   <Button onClick={doSomething}>Save</Button>
//   <Button variant="secondary" size="sm">Cancel</Button>
//   <Button type="submit">Login</Button>
//
// variant: "primary" (accent color) | "secondary" (white + border) | "ghost" (text only)
// size:    "sm" | "md" | "lg"
// type:    "button" (default) or "submit" — useful inside <form> elements.
function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
}) {
  // Classes shared by every variant.
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium " +
    "transition-all duration-200 focus:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-60";

  const variantClasses = {
    primary:
      "bg-primary text-white shadow-sm hover:bg-primary-hover active:scale-[0.98]",
    secondary:
      "border border-line bg-white text-ink shadow-sm hover:border-ink/25 hover:bg-surface active:scale-[0.98]",
    ghost: "text-muted hover:bg-black/5 hover:text-ink",
  };

  const sizeClasses = {
    sm: "px-3.5 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
