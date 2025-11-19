import { useMemo, useState } from "react";
import MenuCard from "./MenuCard";

const PAGE_SIZE = 6; // 6 cards per page

function MenuGrid({ items, onAddToCart }) {
  const [page, setPage] = useState(1);

  // whenever filters change (items array changes), reset page to 1
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));

  const currentItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return items.slice(start, start + PAGE_SIZE);
  }, [items, page]);

  if (items.length === 0) {
    return (
      <section className="mt-2 rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-8 text-center shadow-inner shadow-black/40">
        <p className="text-sm text-slate-300">
          No dishes match your filters.
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Try switching Veg / Non‑Veg, changing category, or clearing the search text.
        </p>
      </section>
    );
  }

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  // if current page is out of range because filters changed, snap back
  if (page > totalPages) {
    setPage(1);
  }

  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-lg font-medium text-slate-100">
          Available dishes ({items.length})
        </h2>
        <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-400 border border-slate-700">
          Page {page} of {totalPages}
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {currentItems.map((item) => (
          <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={page === 1}
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
              page === 1
                ? "cursor-not-allowed bg-slate-800 text-slate-500"
                : "bg-slate-900 text-slate-200 hover:bg-slate-800 border border-slate-700"
            }`}
          >
            ◀ Prev
          </button>

          <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1 text-xs text-slate-300 border border-slate-700">
            <span className="rounded-full bg-messAccent/20 px-2 py-0.5 text-messAccent">
              {page}
            </span>
            <span className="text-slate-500">/ {totalPages}</span>
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={page === totalPages}
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
              page === totalPages
                ? "cursor-not-allowed bg-slate-800 text-slate-500"
                : "bg-slate-900 text-slate-200 hover:bg-slate-800 border border-slate-700"
            }`}
          >
            Next ▶
          </button>
        </div>
      )}
    </section>
  );
}

export default MenuGrid;
