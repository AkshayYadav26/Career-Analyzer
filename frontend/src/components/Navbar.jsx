import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./Button.jsx";

// Shared top navigation bar.
//
// Links that appear on every page: Home, Skill Gap, Roadmap, Assistant.
// When "authenticated" is true we show Dashboard/Login instead of Login/Register.
// "activePath" (optional) highlights the link matching the current URL.
//
// Usage:
//   <Navbar />                                  — public pages
//   <Navbar authenticated activePath="/dashboard" /> — dashboard-style pages
function Navbar({ authenticated = false, activePath = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Main links shown in the middle of the navbar.
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Skill Gap", to: "/skill-gap" },
    { label: "Roadmap", to: "/roadmap" },
    { label: "AI Assistant", to: "/assistant" },
  ];

  // Common class for every link so they all look the same.
  const linkClass = (path) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      activePath === path
        ? "text-primary"
        : "text-muted hover:text-ink"
    }`;

  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
            A
          </span>
          <span className="text-base font-bold tracking-tight text-ink">
            AI Career &amp; Skill Gap Analyzer
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {authenticated ? (
            <Link to="/dashboard">
              <Button size="sm">Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Get started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger button (shown below md screens) */}
        <button
          type="button"
          className="rounded-lg p-2 text-muted hover:bg-black/5 hover:text-ink md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="border-t border-line bg-white px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                activePath === link.to ? "text-primary" : "text-muted"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 border-t border-line pt-3">
            {authenticated ? (
              <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                <Button size="sm" className="w-full">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <div className="flex gap-3">
                <Link to="/login" className="flex-1" onClick={() => setMenuOpen(false)}>
                  <Button variant="secondary" size="sm" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link to="/register" className="flex-1" onClick={() => setMenuOpen(false)}>
                  <Button size="sm" className="w-full">
                    Get started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
