import "./CartSummary.css";

function CartSummary({
  cartItems,
  subtotal,
  gst,
  serviceCharge,
  total,
  onUpdateQty,
  onClear,
}) {
  const hasItems = cartItems.length > 0;
  const savings = subtotal >= 300 ? 25 : 0; // fake offer

  return (
    <aside className="cart-summary">
      {/* Header */}
      <div className="cart-summary-header">
        <div>
          <h2 className="cart-summary-title">
            Your Order
          </h2>
          <p className="cart-summary-subtitle">
            Review items before placing at counter
          </p>
        </div>
        <span className="cart-summary-chip">
          {cartItems.length} item{cartItems.length !== 1 && "s"}
        </span>
      </div>

      {!hasItems ? (
        <div className="cart-summary-empty">
          <p className="cart-summary-empty-title">
            No items added yet.
          </p>
          <p className="cart-summary-empty-text">
            Pick a dish on the left and tap “+ Add” to start your tray.
          </p>
        </div>
      ) : (
        <>
          {/* Items list */}
          <div className="cart-summary-items">
            {cartItems.map(({ item, qty }) => (
              <div
                key={item.id}
                className="cart-summary-item"
              >
                {/* tiny image */}
                <div className="cart-summary-item-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-summary-item-image"
                  />
                </div>

                {/* name + price */}
                <div className="cart-summary-item-main">
                  <p className="cart-summary-item-name">
                    {item.name}
                  </p>
                  <p className="cart-summary-item-price">
                    ₹ {item.price} × {qty} ={" "}
                    <span className="cart-summary-item-price-total">
                      ₹ {item.price * qty}
                    </span>
                  </p>
                </div>

                {/* qty controls */}
                <div className="cart-summary-qty">
                  <button
                    className="cart-summary-qty-btn cart-summary-qty-minus"
                    onClick={() => onUpdateQty(item.id, -1)}
                  >
                    −
                  </button>
                  <span className="cart-summary-qty-value">
                    {qty}
                  </span>
                  <button
                    className="cart-summary-qty-btn cart-summary-qty-plus"
                    onClick={() => onUpdateQty(item.id, +1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bill summary */}
          <div className="cart-summary-bill">
            <div className="cart-summary-row cart-summary-row-main">
              <span>Subtotal</span>
              <span>₹ {subtotal}</span>
            </div>
            <div className="cart-summary-row cart-summary-row-muted">
              <span>Mess GST (5%)</span>
              <span>₹ {gst}</span>
            </div>
            <div className="cart-summary-row cart-summary-row-muted">
              <span>Service charge</span>
              <span>₹ {serviceCharge}</span>
            </div>
            {savings > 0 && (
              <div className="cart-summary-row cart-summary-row-savings">
                <span>Mess combo savings</span>
                <span>- ₹ {savings}</span>
              </div>
            )}
            <div className="cart-summary-row cart-summary-row-total">
              <span>Total payable</span>
              <span>₹ {total - savings}</span>
            </div>
          </div>

          {/* Fake payment hint */}
          <div className="cart-summary-hint">
            <p>
              Show this order at the counter and pay via UPI / cash. You can
              also link your student ID later.
            </p>
          </div>

          {/* Actions */}
          <div className="cart-summary-actions">
            <button
              className="cart-summary-place-btn"
              onClick={() => {
                alert(
                  `Order placed for ₹${total - savings}. Show this token at mess counter.`
                );
              }}
            >
              Place Order
            </button>
            <button
              className="cart-summary-clear-btn"
              onClick={onClear}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default CartSummary;
