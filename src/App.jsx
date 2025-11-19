import { useMemo, useState } from "react";
import { MENU_ITEMS } from "./data/menuData";
import Header from "./components/Header";
import Filters from "./components/Filters";
import MenuGrid from "./components/MenuGrid";
import CartSummary from "./components/CartSummary";

function App() {
  const [mealType, setMealType] = useState("all"); // all | veg | non-veg
  const [category, setCategory] = useState("all"); // all | meal | starter | drink | burger | roll | fries | bun | cake ...
  const [search, setSearch] = useState("");

  // cart: { [id]: { item, qty } }
  const [cart, setCart] = useState({});

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchType =
        mealType === "all" ? true : item.type === mealType;
      const matchCategory =
        category === "all" ? true : item.category === category;
      const searchText = search.trim().toLowerCase();
      const matchSearch =
        !searchText ||
        item.name.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.tags?.some((t) => t.toLowerCase().includes(searchText)) ||
        (item.cuisine || "").toLowerCase().includes(searchText);
      return matchType && matchCategory && matchSearch;
    });
  }, [mealType, category, search]);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev[item.id];
      const nextQty = existing ? existing.qty + 1 : 1;
      return {
        ...prev,
        [item.id]: { item, qty: nextQty },
      };
    });
  };

  const handleUpdateQty = (id, delta) => {
    setCart((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      const newQty = existing.qty + delta;
      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return {
        ...prev,
        [id]: { ...existing, qty: newQty },
      };
    });
  };

  const handleClearCart = () => setCart({});

  const cartItems = Object.values(cart);
  const subtotal = cartItems.reduce(
    (sum, row) => sum + row.item.price * row.qty,
    0
  );
  const messGST = Math.round(subtotal * 0.05);
  const serviceCharge = subtotal > 0 ? 5 : 0;
  const grandTotal = subtotal + messGST + serviceCharge;

  return (
    <div className="min-h-screen bg-gradient-to-b from-messBg via-slate-950 to-messBg">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
        <Header />
        <Filters
          mealType={mealType}
          setMealType={setMealType}
          category={category}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <MenuGrid items={filteredItems} onAddToCart={handleAddToCart} />
          <CartSummary
            cartItems={cartItems}
            subtotal={subtotal}
            gst={messGST}
            serviceCharge={serviceCharge}
            total={grandTotal}
            onUpdateQty={handleUpdateQty}
            onClear={handleClearCart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
