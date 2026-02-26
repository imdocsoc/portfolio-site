//security/page.tsx
export default function SecurityPage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-bold">Security Philosophy</h1>

      <p className="mt-4 max-w-2xl text-gray-700">
        I design systems with a zero-trust mindset. Identity, access control,
        observability, and auditability are first-class concerns — not
        afterthoughts.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Identity & Access</h2>
          <p className="text-gray-700">
            JWT authentication, role-based access control, least-privilege IAM,
            and scoped API tokens.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Auditability</h2>
          <p className="text-gray-700">
            Every critical action logged. Immutable event records. Traceability
            across services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Cloud Controls</h2>
          <p className="text-gray-700">
            Secure S3 storage, environment separation, secrets management,
            and automated CI/CD validation.
          </p>
        </div>
      </div>
    </main>
  );
}