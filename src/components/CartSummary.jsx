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
    <aside className="h-max rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-2xl shadow-black/50 backdrop-blur-md">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-100">
            Your Order
          </h2>
          <p className="text-[11px] text-slate-500">
            Review items before placing at counter
          </p>
        </div>
        <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-xs text-slate-300 border border-slate-700">
          {cartItems.length} item{cartItems.length !== 1 && "s"}
        </span>
      </div>

      {!hasItems ? (
        <div className="mt-5 rounded-xl border border-dashed border-slate-700 bg-slate-950/60 p-4 text-center">
          <p className="text-sm text-slate-300">
            No items added yet.
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Pick a dish on the left and tap “+ Add” to start your tray.
          </p>
        </div>
      ) : (
        <>
          {/* Items list */}
          <div className="max-h-64 space-y-3 overflow-y-auto pr-1">
            {cartItems.map(({ item, qty }) => (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-xl bg-slate-950/70 p-2.5"
              >
                {/* tiny image */}
                <div className="h-10 w-10 overflow-hidden rounded-lg border border-slate-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* name + price */}
                <div className="flex-1">
                  <p className="line-clamp-1 text-sm text-slate-100">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    ₹ {item.price} × {qty} ={" "}
                    <span className="text-slate-200">
                      ₹ {item.price * qty}
                    </span>
                  </p>
                </div>

                {/* qty controls */}
                <div className="flex items-center gap-1">
                  <button
                    className="h-6 w-6 rounded-full bg-slate-800 text-xs text-slate-100 hover:bg-slate-700"
                    onClick={() => onUpdateQty(item.id, -1)}
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-xs text-slate-100">
                    {qty}
                  </span>
                  <button
                    className="h-6 w-6 rounded-full bg-messAccent text-xs text-slate-950 hover:bg-emerald-400"
                    onClick={() => onUpdateQty(item.id, +1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bill summary */}
          <div className="mt-4 border-t border-slate-800 pt-3 text-sm space-y-1">
            <div className="flex justify-between text-slate-300">
              <span>Subtotal</span>
              <span>₹ {subtotal}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Mess GST (5%)</span>
              <span>₹ {gst}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Service charge</span>
              <span>₹ {serviceCharge}</span>
            </div>
            {savings > 0 && (
              <div className="flex justify-between text-emerald-400 text-xs">
                <span>Mess combo savings</span>
                <span>- ₹ {savings}</span>
              </div>
            )}
            <div className="mt-1 flex justify-between text-base font-semibold text-slate-100">
              <span>Total payable</span>
              <span>₹ {total - savings}</span>
            </div>
          </div>

          {/* Fake payment hint */}
          <div className="mt-3 rounded-xl border border-dashed border-slate-700 bg-slate-900/80 px-3 py-2">
            <p className="text-[11px] text-slate-400">
              Show this order at the counter and pay via UPI / cash. You can
              also link your student ID later.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-4 flex flex-col gap-2">
            <button
              className="w-full rounded-full bg-gradient-to-r from-messAccent to-messAccent2 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-400/40 hover:brightness-105"
              onClick={() => {
                alert(
                  `Order placed for ₹${total - savings}. Show this token at mess counter.`
                );
              }}
            >
              Place Order
            </button>
            <button
              className="w-full rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs text-slate-300 hover:border-slate-500"
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
