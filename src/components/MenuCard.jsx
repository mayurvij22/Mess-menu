import "./MenuCard.css";

function MenuCard({ item, onAddToCart }) {
  const isVeg = item.type === "veg";

  return (
    <article className={`menu-card ${isVeg ? "menu-card-veg" : "menu-card-nonveg"}`}>
      {/* Image */}
      <div className="menu-card-image-wrapper">
        <img
          src={item.image}
          alt={item.name}
          className="menu-card-image"
        />
        <div className="menu-card-image-overlay" />
        <span className="menu-card-price-chip">
          ₹ {item.price} • {isVeg ? "Veg" : "Non‑Veg"}
        </span>
      </div>

      {/* Content */}
      <div className="menu-card-content">
        <div className="menu-card-top-row">
          <span className={`menu-card-type-pill ${isVeg ? "veg" : "nonveg"}`}>
            <span className={`menu-card-type-dot ${isVeg ? "veg" : "nonveg"}`} />
            {isVeg ? "Veg" : "Non‑Veg"}
          </span>

          <span className="menu-card-category">
            {item.category}
            {item.cuisine ? ` · ${item.cuisine.replace("-", " ")}` : ""}
          </span>
        </div>

        <h3 className="menu-card-title">
          {item.name}
        </h3>
        <p className="menu-card-description">
          {item.description}
        </p>

        <div className="menu-card-tags">
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className="menu-card-tag"
            >
              {tag}
            </span>
          ))}
          <span className="menu-card-tag">
            {item.calories} kcal
          </span>
        </div>

        <div className="menu-card-bottom-row">
          <div>
            <p className="menu-card-price-text">
              ₹{" "}
              <span className="menu-card-price">
                {item.price}
              </span>
            </p>
            <p className="menu-card-per-plate">per plate</p>
          </div>
          <button
            type="button"
            className="menu-card-add-btn"
            onClick={() => onAddToCart(item)}
          >
            + Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default MenuCard;
