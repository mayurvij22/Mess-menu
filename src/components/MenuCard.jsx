function MenuCard({ item, onAddToCart }) {
  const isVeg = item.type === "veg";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-md shadow-black/40 transition hover:-translate-y-1 hover:border-messAccent/80 hover:shadow-emerald-500/25">
      {/* Image */}
      <div className="relative h-32 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
        <span className="absolute bottom-2 left-2 rounded-full bg-black/50 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-200">
          ₹ {item.price} • {isVeg ? "Veg" : "Non‑Veg"}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ${
              isVeg
                ? "bg-emerald-900/40 text-emerald-300 border border-emerald-500/40"
                : "bg-red-900/40 text-red-300 border border-red-500/40"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                isVeg ? "bg-emerald-400" : "bg-red-400"
              }`}
            />
            {isVeg ? "Veg" : "Non‑Veg"}
          </span>

          <span className="text-xs text-slate-300 capitalize">
            {item.category}
            {item.cuisine ? ` · ${item.cuisine.replace("-", " ")}` : ""}
          </span>
        </div>

        <h3 className="text-base font-semibold text-slate-50">
          {item.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-slate-400">
          {item.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-400"
            >
              {tag}
            </span>
          ))}
          <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-400">
            {item.calories} kcal
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-300">
              ₹{" "}
              <span className="text-lg font-semibold text-messAccent">
                {item.price}
              </span>
            </p>
            <p className="text-[11px] text-slate-500">per plate</p>
          </div>
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-messAccent to-messAccent2 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-400/40 transition group-hover:shadow-lg hover:brightness-105"
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
