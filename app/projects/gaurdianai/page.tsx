export default function GuardianAIPage() {
  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">GuardianAI Case Manager</h1>

      <p className="mt-4 text-gray-700">
        GuardianAI is a security-first case management system designed to
        demonstrate modern full-stack architecture and responsible AI
        integration.
      </p>

      <h2 className="text-2xl font-semibold mt-10">Architecture</h2>

      <ul className="mt-4 list-disc ml-6 space-y-2">
        <li>Next.js frontend deployed on Vercel</li>
        <li>Fastify API backend</li>
        <li>Prisma ORM for database modeling</li>
        <li>PostgreSQL database running in Docker</li>
        <li>TypeScript across the entire stack</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">Status</h2>

      <p className="mt-2 text-gray-700">
        Infrastructure is operational. CRUD endpoints for case management
        are currently being implemented.
      </p>

      <div className="mt-8 flex gap-6">
        <a
          href="https://guardianai-web.vercel.app"
          className="underline text-blue-600"
        >
          Live Demo
        </a>

        <a
          href="https://github.com/imdocsoc/guardianai"
          className="underline text-blue-600"
        >
          GitHub Repository
        </a>
      </div>
    </main>
  );
}