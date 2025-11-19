import { useMemo, useState } from "react";
import MenuCard from "./MenuCard";
import "./MenuGrid.css";

const PAGE_SIZE = 6; // 6 cards per page

function MenuGrid({ items, onAddToCart }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));

  const currentItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return items.slice(start, start + PAGE_SIZE);
  }, [items, page]);

  if (items.length === 0) {
    return (
      <section className="menu-grid-empty">
        <p className="menu-grid-empty-title">
          No dishes match your filters.
        </p>
        <p className="menu-grid-empty-text">
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
      <div className="menu-grid-header">
        <h2 className="menu-grid-title">
          Available dishes ({items.length})
        </h2>
        <span className="menu-grid-page-chip">
          Page {page} of {totalPages}
        </span>
      </div>

      <div className="menu-grid">
        {currentItems.map((item) => (
          <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="menu-grid-pagination">
          <button
            type="button"
            onClick={handlePrev}
            disabled={page === 1}
            className={`menu-grid-page-btn ${
              page === 1 ? "menu-grid-page-btn-disabled" : ""
            }`}
          >
            ◀ Prev
          </button>

          <div className="menu-grid-page-indicator">
            <span className="menu-grid-page-current">
              {page}
            </span>
            <span className="menu-grid-page-total">/ {totalPages}</span>
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={page === totalPages}
            className={`menu-grid-page-btn ${
              page === totalPages ? "menu-grid-page-btn-disabled" : ""
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
