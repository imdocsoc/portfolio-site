const projects = [
  {
    name: "GuardianAI Case Manager",
    tagline: "Security-first case management with AI-assisted search (RAG).",
    stack: ["Next.js", "Node/Fastify", "Postgres", "AWS S3", "OpenAI"],
    status: "In progress",
    href: "/projects/guardianai",
  },
  {
    name: "Cloud Lab",
    tagline: "AWS patterns: IAM, S3, RDS, CI/CD, observability.",
    stack: ["AWS", "Docker", "GitHub Actions"],
    status: "Planned",
    href: "#",
  },
  {
    name: "AI Lab",
    tagline: "Prompting, evals, embeddings, and cost controls.",
    stack: ["OpenAI", "LangChain", "Vector DB"],
    status: "Planned",
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-gray-600 max-w-2xl">
        A few focused builds that demonstrate shipping, security, and production discipline.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.href}
            className="rounded-2xl border p-6 hover:shadow-sm transition"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <span className="text-sm text-gray-500">{p.status}</span>
            </div>
            <p className="mt-2 text-gray-700">{p.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs rounded-full border px-2 py-1">
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}