import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-extrabold">Socrates Zayas</h1>
      <p className="mt-4 text-lg">Full-Stack Engineer • Cloud • AI • Security</p>
      <p className="mt-2 text-gray-600 max-w-xl">
        I build secure, cloud-native apps that use AI responsibly. Explore projects, architecture diagrams, and case studies that show how I design, ship, and scale production systems.
      </p>
      <div className="mt-6 space-x-4">
        <a href="/projects" className="underline">Projects</a>
        <a href="/resume" className="underline">Resume</a>
      </div>
    </main>
  );
}
