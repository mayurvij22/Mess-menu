// Filters.jsx
import "./Filters.css";

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
    <section className="filters">
      {/* Top row: veg filter + search */}
      <div className="filters-top">
        {/* Veg / Non-veg toggle pill */}
        <div className="filters-type-toggle">
          {typeButtons.map((btn) => {
            const active = mealType === btn.id;
            const base = "filters-type-btn";
            return (
              <button
                key={btn.id}
                onClick={() => setMealType(btn.id)}
                className={`${base} ${active ? "filters-type-btn-active" : ""}`}
              >
                {btn.id === "veg" && (
                  <span className="filters-type-dot filters-type-dot-veg" />
                )}
                {btn.id === "non-veg" && (
                  <span className="filters-type-dot filters-type-dot-nonveg" />
                )}
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Search box */}
        <div className="filters-search-wrapper">
          <span className="filters-search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search dish, cuisine or item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="filters-search-input"
          />
        </div>
      </div>

      {/* Category chips */}
      <div className="filters-category-row">
        {categoryTabs.map((tab) => {
          const active = category === tab.id;
          const base = "filters-category-chip";
          return (
            <button
              key={tab.id}
              onClick={() => setCategory(tab.id)}
              className={`${base} ${
                active ? "filters-category-chip-active" : ""
              }`}
            >
              <span className="filters-category-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Filters;
