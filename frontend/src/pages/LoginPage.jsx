import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

// Shared style for the input fields (kept simple — real validation comes later).
const inputClass =
  "w-full rounded-xl border border-line bg-white py-2.5 pl-11 pr-4 text-sm " +
  "text-ink placeholder-muted/70 transition-colors focus:border-primary " +
  "focus:outline-none focus:ring-2 focus:ring-primary/20";

function LoginPage() {
  // Just a local "error" state so we can show what an error looks like.
  // No real backend yet — submitting always shows the demo message.
  const [error, setError] = useState("");

  function handleLogin(event) {
    event.preventDefault(); // stop the browser from reloading
    setError("Login isn't connected yet — this is a visual demo.");
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      {/* Centered auth layout */}
      <div className="mx-auto flex max-w-md flex-col px-4 py-16 sm:py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-ink">
            Welcome back
          </h1>
          <p className="mt-2 text-muted">
            Log in to continue your career analysis.
          </p>
        </div>

        <Card padding="lg" className="mt-8">
          <form onSubmit={handleLogin}>
            {/* Email field with icon */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Password field with icon */}
            <div className="mt-5">
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-ink"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-primary hover:text-primary-hover"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="Your password"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Error state (shown after submitting) */}
            {error && (
              <div className="mt-5 flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-primary">
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                {error}
              </div>
            )}

            <Button type="submit" size="lg" className="mt-6 w-full">
              Log in
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-primary hover:text-primary-hover"
            >
              Register
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
