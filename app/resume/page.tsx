export default function ResumePage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Resume</h1>
      <p className="mt-2 text-gray-600 max-w-2xl">
        Add a PDF soon. For now, this page will hold a clean HTML version plus a downloadable PDF.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Socrates Zayas</h2>
        <p className="mt-1 text-gray-700">Full-Stack • Cloud • AI • Security</p>

        <h3 className="mt-6 font-semibold">Highlights</h3>
        <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
          <li>Builds secure, cloud-native web apps with clean architecture.</li>
          <li>Strong focus on identity, access control, auditability, and reliability.</li>
          <li>AI integrations with cost controls, logging, and safety guardrails.</li>
        </ul>

        <h3 className="mt-6 font-semibold">Core Stack</h3>
        <p className="mt-2 text-gray-700">
          Next.js • TypeScript • Node.js • PostgreSQL • AWS • Docker • GitHub Actions • OpenAI
        </p>
      </div>
    </main>
  );
}