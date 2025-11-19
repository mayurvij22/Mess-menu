function Header({ onQuickFilter }) {
  return (
    <header className="mb-8 space-y-6">
      {/* Top row: title + live badge */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-messAccent">
            PES Campus · Mess Menu
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-messAccent via-emerald-400 to-messAccent2 bg-clip-text text-transparent">
              Eat smart,
            </span>{" "}
            right inside{" "}
            <span className="text-slate-50">campus.</span>
          </h1>
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            Pick your veg or non‑veg meals, burgers, rolls, fries, cakes and
            chilled drinks from a single clean mess dashboard.
          </p>
        </div>

        <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/60 px-4 py-2 shadow-lg shadow-emerald-500/10 backdrop-blur">
          <span className="relative inline-flex h-7 w-7 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-messAccent/40" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-messAccent" />
          </span>
          <div className="text-xs">
            <p className="font-medium text-slate-100">Mess online</p>
            <p className="text-[11px] text-slate-400">
              Orders open · 8:00 AM – 10:30 PM
            </p>
          </div>
        </div>
      </div>

      {/* Quick chips row */}
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="text-slate-500 mr-1">Quick picks:</span>
        <button
          type="button"
          onClick={() => onQuickFilter?.("north-indian")}
          className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-200 hover:border-messAccent hover:text-messAccent"
        >
          North Indian
        </button>
        <button
          type="button"
          onClick={() => onQuickFilter?.("chinese")}
          className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-200 hover:border-messAccent hover:text-messAccent"
        >
          Chinese
        </button>
        <button
          type="button"
          onClick={() => onQuickFilter?.("american")}
          className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-200 hover:border-messAccent hover:text-messAccent"
        >
          American
        </button>
        <button
          type="button"
          onClick={() => onQuickFilter?.("burger")}
          className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-200 hover:border-messAccent hover:text-messAccent"
        >
          Burgers & Fries
        </button>
        <button
          type="button"
          onClick={() => onQuickFilter?.("cake")}
          className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-200 hover:border-messAccent hover:text-messAccent"
        >
          Cakes & Desserts
        </button>
      </div>
    </header>
  );
}

export default Header;
