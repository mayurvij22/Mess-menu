// Header.jsx
import "./Header.css";

function Header({ onQuickFilter }) {
  return (
    <header className="header">
      {/* Top row: title + live badge */}
      <div className="header-top">
        <div>
          <p className="header-kicker">
            PES Campus · Mess Menu
          </p>
          <h1 className="header-title">
            <span className="header-title-gradient">
              Eat smart,
            </span>{" "}
            right inside{" "}
            <span className="header-title-plain">campus.</span>
          </h1>
          <p className="header-subtitle">
            Pick your veg or non‑veg meals, burgers, rolls, fries, cakes and
            chilled drinks from a single clean mess dashboard.
          </p>
        </div>

        <div className="header-status">
          <span className="header-status-dot-wrapper">
            <span className="header-status-ping" />
            <span className="header-status-dot" />
          </span>
          <div className="header-status-text">
            <p className="header-status-main">Mess online</p>
            <p className="header-status-sub">
              Orders open · 8:00 AM – 10:30 PM
            </p>
          </div>
        </div>
      </div>

      {/* Quick chips row */}
      <div className="header-quick-row">
        <span className="header-quick-label">Quick picks:</span>
        <button
          type="button"
          onClick={() => onQuickFilter?.("north-indian")}
          className="header-chip"
        >
          North Indian
        </button>
        <button
          type="button"
          onClick={() => onQuickFilter?.("chinese")}
          className="header-chip"
        >
          Chinese
        </button>
        <button
          type="button"
          onClick={() => onQuickFilter?.("american")}
          className="header-chip"
        >
          American
        </button>
        <button
          type="button"
          onClick={() => onQuickFilter?.("burger")}
          className="header-chip"
        >
          Burgers & Fries
        </button>
        <button
          type="button"
          onClick={() => onQuickFilter?.("cake")}
          className="header-chip"
        >
          Cakes & Desserts
        </button>
      </div>
    </header>
  );
}

export default Header;
