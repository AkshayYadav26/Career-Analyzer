import { useState } from "react";
import {
  FileText,
  CloudUpload,
  CheckCircle2,
  AlertCircle,
  Info,
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

// Helper: makes a file size in bytes readable, e.g. 1048576 -> "1.0 MB".
function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function ResumePage() {
  // The file the user picked (no real upload happens — backend comes later).
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0] || null);
  }

  function handleAnalyze() {
    // Real analysis will be connected to the backend later.
    alert("Resume analysis coming soon!");
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar authenticated activePath="/resume" />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {/* Page heading */}
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Your resume
          </h1>
          <p className="mt-2 text-muted">
            Upload a resume to start your career and skill gap analysis.
          </p>
        </header>

        {/* Large drop-zone style card */}
        <Card padding="lg" className="mt-8">
          <label
            htmlFor="resume-input"
            className="block cursor-pointer rounded-2xl border-2 border-dashed border-line bg-surface px-6 py-14 text-center transition-colors hover:border-primary/50 hover:bg-primary/5"
          >
            {/* Upload icon (changes when a file is selected) */}
            <div className="flex justify-center">
              {selectedFile ? (
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={32} />
                </span>
              ) : (
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <CloudUpload size={32} />
                </span>
              )}
            </div>

            {selectedFile ? (
              /* Selected-file state */
              <>
                <p className="mt-5 text-base font-semibold text-ink">
                  {selectedFile.name}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {formatFileSize(selectedFile.size)} · click to choose a
                  different file
                </p>
              </>
            ) : (
              /* Empty state before selection */
              <>
                <p className="mt-5 text-base font-semibold text-ink">
                  Choose resume
                </p>
                <p className="mt-1 text-sm text-muted">
                  Click here to browse, or drag &amp; drop your file (drag
                  support coming soon)
                </p>
              </>
            )}
          </label>

          {/* The actual hidden file input that the label above controls */}
          <input
            id="resume-input"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* File type information */}
          <p className="mt-5 flex items-start justify-center gap-2 text-center text-sm text-muted">
            <Info size={14} className="mt-0.5 shrink-0" />
            Accepted formats: PDF and DOCX · Maximum size 5&nbsp;MB
          </p>

          {/* Analyze button — disabled until a file is chosen */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <Button
              size="lg"
              disabled={!selectedFile}
              onClick={handleAnalyze}
              className="w-full sm:w-auto"
            >
              <FileText size={18} /> Analyze resume
            </Button>
            {!selectedFile && (
              <p className="text-sm text-muted">
                Select a file above to enable analysis
              </p>
            )}
          </div>
        </Card>

        {/* Helpful explanation of what happens next */}
        <Card padding="md" className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            What happens next?
          </h2>
          <ul className="mt-3 space-y-2.5 text-sm text-muted">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
              We read the skills and experience listed on your resume.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
              You pick a target role to compare against.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
              You get a skill gap report and a learning roadmap.
            </li>
          </ul>
          <p className="mt-4 flex items-center gap-2 rounded-xl bg-surface px-4 py-3 text-xs text-muted">
            <AlertCircle size={14} className="shrink-0 text-primary" />
            Demo mode — files are not uploaded anywhere yet.
          </p>
        </Card>
      </main>
    </div>
  );
}

export default ResumePage;
