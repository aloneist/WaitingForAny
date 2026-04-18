const sections = [
  {
    title: "What it does",
    body:
      "Waiting For AI captures messy incoming information and turns it into a simple waiting item so you can decide when to check again."
  },
  {
    title: "Who it is for",
    body:
      "People tracking replies, deliveries, refunds, bookings, repairs, approvals, and other outcomes that depend on someone else."
  },
  {
    title: "MVP scope",
    body:
      "The first version focuses on manual entry, pasted text, screenshot placeholders, a review queue, and lightweight status views."
  },
  {
    title: "Why this is not a todo app",
    body:
      "A todo app tracks what you owe. This product tracks what the world owes back, so the default state is external dependency rather than personal action."
  }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 md:px-10">
      <div className="rounded-[2rem] border border-sand/80 bg-white/85 p-8 shadow-[0_20px_60px_rgba(31,41,55,0.08)] backdrop-blur md:p-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-leaf">
            Waiting For AI
          </p>
          <h1 className="mt-4 text-4xl leading-tight text-ink md:text-6xl">
            A calm place to track the things you are waiting on.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">
            Built for replies, deliveries, refunds, bookings, repairs, and
            decisions that are blocked on someone or something else.
          </p>
          <div className="mt-8 inline-flex rounded-full border border-leaf/20 bg-leaf/10 px-4 py-2 text-sm text-ink">
            Mobile app is in development. The current focus is a minimal MVP
            scaffold.
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-sand bg-mist/70 p-6"
            >
              <h2 className="text-2xl text-ink">{section.title}</h2>
              <p className="mt-3 text-base leading-7 text-ink/80">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-dashed border-leaf/30 bg-white/70 p-6">
          <h2 className="text-2xl text-ink">Current product posture</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-ink/80">
            No auth, no database wiring, no analytics, and no assistant-style
            AI flow yet. This repo is intentionally focused on getting the web
            and mobile foundations in place for a two-week MVP.
          </p>
        </section>
      </div>
    </main>
  );
}
