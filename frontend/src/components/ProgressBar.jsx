// Reusable ProgressBar component.
//
// Usage: <ProgressBar progress={40} />
//        <ProgressBar progress={68} showLabel={false} />
//
// "progress" is a number from 0 to 100 (values outside are clipped).
function ProgressBar({ progress, showLabel = true, className = "" }) {
  // Keep the number between 0 and 100 so the bar never overflows.
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={className}>
      {/* Gray track with the accent-colored fill inside.
          The fill width comes from the progress prop. */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${safeProgress}%` }}
        ></div>
      </div>

      {showLabel && (
        <p className="mt-2 text-sm text-muted">{safeProgress}% complete</p>
      )}
    </div>
  );
}

export default ProgressBar;
