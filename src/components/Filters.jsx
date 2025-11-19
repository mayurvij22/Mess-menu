const typeButtons = [
  { id: "all", label: "All" },
  { id: "veg", label: "Veg" },
  { id: "non-veg", label: "Non‑Veg" },
];

const categoryTabs = [
  { id: "all", label: "All", icon: "✨" },
  { id: "meal", label: "Meals", icon: "🍽️" },
  { id: "starter", label: "Starters", icon: "🍢" },
  { id: "burger", label: "Burgers", icon: "🍔" },
  { id: "roll", label: "Rolls", icon: "🌯" },
  { id: "fries", label: "Fries", icon: "🍟" },
  { id: "bun", label: "Buns", icon: "🥯" },
  { id: "cake", label: "Cakes", icon: "🍰" },
  { id: "drink", label: "Drinks", icon: "🥤" },
];

function Filters({
  mealType,
  setMealType,
  category,
  setCategory,
  search,
  setSearch,
}) {
  return (
    <section className="mb-6 space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
      {/* Top row: veg filter + search */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Veg / Non-veg toggle pill */}
        <div className="inline-flex rounded-full bg-slate-900/80 p-1 shadow-inner shadow-black/40">
          {typeButtons.map((btn) => {
            const active = mealType === btn.id;
            const base =
              "relative flex-1 px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm font-medium rounded-full transition";
            return (
              <button
                key={btn.id}
                onClick={() => setMealType(btn.id)}
                className={
                  active
                    ? `${base} bg-gradient-to-r from-messAccent to-messAccent2 text-slate-950 shadow-md shadow-emerald-400/40`
                    : `${base} text-slate-300 hover:bg-slate-800`
                }
              >
                {btn.id === "veg" && (
                  <span className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                )}
                {btn.id === "non-veg" && (
                  <span className="mr-1 inline-block h-2 w-2 rounded-full bg-red-400" />
                )}
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Search box */}
        <div className="relative w-full md:w-72">
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-500">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search dish, cuisine or item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-slate-700 bg-slate-950/70 py-2 pl-9 pr-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-messAccent focus:ring-1 focus:ring-messAccent"
          />
        </div>
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        {categoryTabs.map((tab) => {
          const active = category === tab.id;
          const base =
            "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm rounded-full border transition";
          return (
            <button
              key={tab.id}
              onClick={() => setCategory(tab.id)}
              className={
                active
                  ? `${base} border-messAccent bg-messAccent/15 text-messAccent shadow-sm shadow-emerald-500/40`
                  : `${base} border-slate-700 bg-slate-900/80 text-slate-300 hover:border-slate-500 hover:text-slate-100`
              }
            >
              <span className="text-base leading-none">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Filters;
