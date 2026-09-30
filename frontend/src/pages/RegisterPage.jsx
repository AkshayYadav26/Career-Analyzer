import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

// Same input style as LoginPage so both auth pages match.
const inputClass =
  "w-full rounded-xl border border-line bg-white py-2.5 pl-11 pr-4 text-sm " +
  "text-ink placeholder-muted/70 transition-colors focus:border-primary " +
  "focus:outline-none focus:ring-2 focus:ring-primary/20";

function RegisterPage() {
  // Local "error" state so we can preview the error visual — no backend yet.
  const [error, setError] = useState("");

  function handleRegister(event) {
    event.preventDefault();
    setError("Registration isn't connected yet — this is a visual demo.");
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <div className="mx-auto flex max-w-md flex-col px-4 py-16 sm:py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-ink">
            Create your account
          </h1>
          <p className="mt-2 text-muted">
            Start mapping your skills in a few minutes.
          </p>
        </div>

        <Card padding="lg" className="mt-8">
          <form onSubmit={handleRegister}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Full name
              </label>
              <div className="relative">
                <User
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-5">
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

            {/* Password */}
            <div className="mt-5">
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="Choose a password"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Confirm password */}
            <div className="mt-5">
              <label
                htmlFor="confirmPassword"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Confirm password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  placeholder="Repeat your password"
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
              Create account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary hover:text-primary-hover"
            >
              Log in
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default RegisterPage;
