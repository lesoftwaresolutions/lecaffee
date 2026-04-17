import { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronUp, Info } from "lucide-react";
import { menuItems, categories, ALL_ALLERGENS, type MenuItem, type Allergen } from "@/data/menuData";

const ALLERGEN_DESCRIPTIONS: Record<Allergen, string> = {
  Gluten: "Cereals containing gluten (wheat, rye, barley, oats)",
  Eggs: "Eggs and egg products",
  Milk: "Milk and dairy products",
  Nuts: "Tree nuts (almonds, hazelnuts, walnuts, cashews, pecans, pistachios, macadamia)",
  Peanuts: "Peanuts and peanut products",
  Soya: "Soybeans and soya products",
  Sesame: "Sesame seeds and sesame products",
  Mustard: "Mustard and mustard products",
  Celery: "Celery and celeriac",
  Fish: "Fish and fish products",
  Crustaceans: "Crustaceans (prawns, crabs, lobster, crayfish)",
  Molluscs: "Molluscs (clams, mussels, oysters, squid)",
  Lupin: "Lupin seeds and lupin flour",
  Sulphites: "Sulphur dioxide and sulphites (over 10mg/kg)",
};

function DietaryBadge({ tag }: { tag: string }) {
  const styles: Record<string, { bg: string; text: string; label: string }> = {
    V: { bg: "rgba(34,139,34,0.12)", text: "#228B22", label: "V" },
    VG: { bg: "rgba(0,128,0,0.12)", text: "#006400", label: "VG" },
    GF: { bg: "rgba(200,135,58,0.12)", text: "#c8873a", label: "GF" },
  };
  const s = styles[tag] || styles.V;
  return (
    <span
      className="inline-block px-1.5 py-0.5 rounded text-xs font-bold"
      style={{ backgroundColor: s.bg, color: s.text }}
    >
      {s.label}
    </span>
  );
}

function MenuCard({ item, onAllergenClick }: { item: MenuItem; onAllergenClick: (item: MenuItem) => void }) {
  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
      data-testid={`card-menu-${item.id}`}
    >
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#ffffff", height: "172px", padding: "12px" }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          style={{ objectFit: "contain", objectPosition: "center", maxHeight: "148px" }}
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-bold text-sm leading-tight" style={{ color: "#1a3a2a" }}>
            {item.name}
          </h3>
          <span className="font-bold text-sm shrink-0" style={{ color: "#c8873a" }}>
            {item.price}
          </span>
        </div>
        {item.description && (
          <p className="text-xs leading-relaxed flex-1 mb-3" style={{ color: "#6b5c4c" }}>
            {item.description}
          </p>
        )}
        <div className="flex items-center justify-between mt-auto gap-2">
          <div className="flex gap-1.5">
            {item.tags?.map((tag) => (
              <DietaryBadge key={tag} tag={tag} />
            ))}
          </div>
          {item.allergens && item.allergens.length > 0 && (
            <button
              onClick={() => onAllergenClick(item)}
              className="flex items-center gap-1 text-xs transition-colors"
              style={{ color: "#8a7a64" }}
              title="View allergen information"
            >
              <Info size={12} />
              <span>Allergens</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function AllergenModal({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-bold text-lg" style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}>
              {item.name}
            </h3>
            <p className="text-xs mt-0.5" style={{ color: "#8a7a64" }}>Allergen Information</p>
          </div>
          <button
            onClick={onClose}
            className="text-sm font-medium px-3 py-1 rounded-lg"
            style={{ backgroundColor: "#f0e8d8", color: "#6b5c4c" }}
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {ALL_ALLERGENS.map((allergen) => {
            const contains = item.allergens?.includes(allergen);
            return (
              <div
                key={allergen}
                className="flex items-center gap-2.5 p-2.5 rounded-xl"
                style={{
                  backgroundColor: contains ? "rgba(200,135,58,0.1)" : "rgba(26,58,42,0.04)",
                  border: contains ? "1px solid rgba(200,135,58,0.3)" : "1px solid rgba(26,58,42,0.08)",
                }}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{
                    backgroundColor: contains ? "#c8873a" : "rgba(26,58,42,0.1)",
                    color: contains ? "#fff" : "#8a7a64",
                  }}
                >
                  {contains ? "!" : "-"}
                </span>
                <div>
                  <p className="text-xs font-semibold" style={{ color: contains ? "#1a3a2a" : "#8a7a64" }}>
                    {allergen}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs mt-4 leading-relaxed" style={{ color: "#8a7a64" }}>
          Information is correct at time of publication. Recipes may change. Please speak to a member of staff if you have a severe allergy or intolerance before ordering.
        </p>
      </div>
    </div>
  );
}

function AllergenTable() {
  const [expanded, setExpanded] = useState(false);

  const tableCategories = [
    { label: "Hot Drinks", ids: ["espresso", "americano", "latte", "cappuccino", "flat-white", "mocha", "cortado", "vanilla-latte", "matcha-latte"] },
    { label: "Tea", ids: ["english-breakfast", "green-tea", "mint-tea", "decaf-tea", "strawberry-infused-tea"] },
    { label: "Other Hot Drinks", ids: ["chai-latte", "hot-chocolate", "babyccino", "chocolate-babyccino"] },
    { label: "Frappes", ids: ["classic-frappe", "caramel-frappe", "salted-caramel-frappe", "strawberry-cream-frappe"] },
    { label: "Breakfast", ids: ["bacon-bap", "sausage-egg-muffin", "veggie-wrap", "egg-cheese-croissant", "full-english"] },
    { label: "Lunch", ids: ["chicken-cheese-toastie", "tuna-melt", "chicken-wrap", "bbq-chicken-panini", "veggie-cheese-toastie", "blt"] },
    { label: "Burgers & Chicken", ids: ["classic-chicken-burger", "spicy-chicken-burger", "classic-beef-burger", "double-smash", "crispy-strips", "spicy-wings", "bucket-5"] },
    { label: "Sides", ids: ["fries", "loaded-cheese-fries", "tater-tots", "loaded-tots", "sweetcorn-cup", "chicken-nuggets"] },
    { label: "Pastries & Sweets", ids: ["brownie", "blueberry-muffin", "croissant", "pain-au-chocolat", "cinnamon-roll", "carrot-cake", "lemon-drizzle"] },
  ];

  const menuMap = Object.fromEntries(menuItems.map((i) => [i.id, i]));

  return (
    <div
      className="mt-14 rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(26,58,42,0.15)" }}
      data-testid="section-allergen-info"
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left"
        style={{ backgroundColor: "#1a3a2a" }}
        onClick={() => setExpanded((v) => !v)}
      >
        <div>
          <h4 className="font-bold text-base" style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}>
            Allergen Information
          </h4>
          <p className="text-xs mt-0.5" style={{ color: "#6b8a6b" }}>
            14 EU allergens — click to view full breakdown
          </p>
        </div>
        {expanded ? (
          <ChevronUp size={20} style={{ color: "#c8873a" }} />
        ) : (
          <ChevronDown size={20} style={{ color: "#c8873a" }} />
        )}
      </button>

      {expanded && (
        <div style={{ backgroundColor: "#fafaf8" }}>
          {/* Dietary key + allergen key */}
          <div className="p-5 flex flex-wrap gap-6" style={{ borderBottom: "1px solid rgba(26,58,42,0.1)" }}>
            <div>
              <p className="text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "#1a3a2a" }}>Dietary</p>
              <div className="flex gap-4 text-xs" style={{ color: "#6b5c4c" }}>
                <span><strong>V</strong> = Vegetarian</span>
                <span><strong>VG</strong> = Vegan</span>
                <span><strong>GF</strong> = Gluten Free</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "#1a3a2a" }}>Legend</p>
              <div className="flex gap-4 text-xs" style={{ color: "#6b5c4c" }}>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded inline-flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#c8873a" }}>!</span>
                  Contains allergen
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded inline-flex items-center justify-center text-xs" style={{ backgroundColor: "#e8e0d0", color: "#8a7a64" }}>-</span>
                  Not present
                </span>
              </div>
            </div>
          </div>

          {/* Allergen descriptions */}
          <div className="p-5" style={{ borderBottom: "1px solid rgba(26,58,42,0.1)" }}>
            <p className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: "#1a3a2a" }}>The 14 Allergens</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {ALL_ALLERGENS.map((allergen) => (
                <div key={allergen} className="flex gap-2 text-xs" style={{ color: "#6b5c4c" }}>
                  <span className="font-semibold shrink-0" style={{ color: "#1a3a2a", minWidth: "72px" }}>{allergen}:</span>
                  <span>{ALLERGEN_DESCRIPTIONS[allergen]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Allergen table by category */}
          <div className="overflow-x-auto">
            {tableCategories.map((cat) => {
              const items = cat.ids.map((id) => menuMap[id]).filter(Boolean);
              if (items.length === 0) return null;
              return (
                <div key={cat.label}>
                  <div className="px-5 py-2" style={{ backgroundColor: "rgba(26,58,42,0.06)", borderBottom: "1px solid rgba(26,58,42,0.1)" }}>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#1a3a2a" }}>{cat.label}</span>
                  </div>
                  <table className="w-full text-xs min-w-[700px]" style={{ borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ backgroundColor: "rgba(26,58,42,0.04)" }}>
                        <th className="text-left py-2 px-5 font-semibold" style={{ color: "#6b5c4c", width: "220px", borderBottom: "1px solid rgba(26,58,42,0.08)" }}>
                          Item
                        </th>
                        {ALL_ALLERGENS.map((a) => (
                          <th
                            key={a}
                            className="py-2 px-2 font-semibold text-center"
                            style={{ color: "#6b5c4c", borderBottom: "1px solid rgba(26,58,42,0.08)", whiteSpace: "nowrap" }}
                          >
                            {a}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, idx) => (
                        <tr
                          key={item.id}
                          style={{
                            borderBottom: "1px solid rgba(26,58,42,0.06)",
                            backgroundColor: idx % 2 === 1 ? "rgba(26,58,42,0.02)" : "transparent",
                          }}
                        >
                          <td className="py-2.5 px-5 font-medium" style={{ color: "#1a3a2a" }}>
                            {item.name}
                            {item.tags && item.tags.length > 0 && (
                              <span className="ml-1.5 opacity-60" style={{ color: "#6b5c4c" }}>
                                ({item.tags.join(", ")})
                              </span>
                            )}
                          </td>
                          {ALL_ALLERGENS.map((allergen) => {
                            const contains = item.allergens?.includes(allergen);
                            return (
                              <td key={allergen} className="py-2.5 px-2 text-center">
                                {contains ? (
                                  <span
                                    className="inline-flex items-center justify-center w-5 h-5 rounded font-bold"
                                    style={{ backgroundColor: "#c8873a", color: "#fff" }}
                                  >
                                    !
                                  </span>
                                ) : (
                                  <span style={{ color: "#c8c0b0" }}>—</span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>

          <div className="p-5" style={{ backgroundColor: "rgba(200,135,58,0.06)", borderTop: "1px solid rgba(200,135,58,0.2)" }}>
            <p className="text-xs leading-relaxed" style={{ color: "#6b5c4c" }}>
              <strong style={{ color: "#1a3a2a" }}>Important:</strong> Allergen information is correct at time of publication and recipes may change. Our kitchen handles all 14 major allergens. Cross-contamination cannot be fully excluded. If you have a severe allergy or intolerance, please speak to a member of staff before ordering. We cannot guarantee any item is completely allergen-free.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    let items = menuItems;
    if (activeCategory !== "all") {
      items = items.filter((item) => item.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, searchQuery]);

  const groupedItems = useMemo(() => {
    if (activeCategory !== "all" || searchQuery.trim()) {
      return [{ categoryId: activeCategory, items: filteredItems }];
    }
    const grouped: { categoryId: string; label: string; items: MenuItem[] }[] = [];
    categories.slice(1).forEach((cat) => {
      const items = filteredItems.filter((i) => i.category === cat.id);
      if (items.length > 0) {
        grouped.push({ categoryId: cat.id, label: cat.label, items });
      }
    });
    return grouped;
  }, [activeCategory, filteredItems, searchQuery]);

  const currentCategoryLabel = categories.find((c) => c.id === activeCategory)?.label || "All";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f0e8" }}>
      {/* Header */}
      <section
        className="py-16 px-4 text-center"
        style={{ backgroundColor: "#0f2318" }}
        data-testid="section-menu-header"
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c8873a" }}>
          Our Menu
        </p>
        <h1
          className="text-5xl font-bold mb-4"
          style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}
        >
          Explore Our Menu
        </h1>
        <p className="text-base max-w-xl mx-auto mb-10" style={{ color: "#6b8a6b" }}>
          From morning coffee to evening takeaway — fresh, delicious, and crafted with care.
        </p>

        <div className="max-w-md mx-auto relative">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2"
            style={{ color: "#8a7a64" }}
          />
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value) setActiveCategory("all");
            }}
            className="w-full pl-10 pr-4 py-3 rounded-full text-sm outline-none"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#f0e8d8", border: "1px solid rgba(255,255,255,0.15)" }}
            data-testid="input-menu-search"
          />
        </div>
      </section>

      {/* Category filters */}
      <div
        className="sticky top-[64px] md:top-[80px] z-40 py-3 px-4 overflow-x-auto"
        style={{ backgroundColor: "#1a3a2a" }}
        data-testid="section-menu-categories"
      >
        <div className="flex gap-2 min-w-max max-w-7xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap"
              style={{
                backgroundColor: activeCategory === cat.id ? "#c8873a" : "rgba(255,255,255,0.08)",
                color: activeCategory === cat.id ? "#fff" : "#b8a88a",
              }}
              data-testid={`button-category-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10" data-testid="section-menu-items">
        {searchQuery && (
          <p className="text-sm mb-6" style={{ color: "#6b5c4c" }}>
            {filteredItems.length} result{filteredItems.length !== 1 ? "s" : ""} for "{searchQuery}"
          </p>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-20" data-testid="text-no-results">
            <p className="text-lg font-medium" style={{ color: "#6b5c4c" }}>No items found</p>
            <p className="text-sm mt-2" style={{ color: "#8a7a64" }}>Try a different search term or category</p>
          </div>
        )}

        {activeCategory === "all" && !searchQuery ? (
          <div className="space-y-14">
            {groupedItems.map((group) => (
              <section key={group.categoryId} data-testid={`section-menu-group-${group.categoryId}`}>
                <div className="flex items-center gap-3 mb-6">
                  <h2
                    className="text-2xl font-bold"
                    style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}
                  >
                    {group.label}
                  </h2>
                  <div className="flex-1 h-px" style={{ backgroundColor: "#d4c8b8" }} />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {group.items.map((item) => (
                    <MenuCard key={item.id} item={item} onAllergenClick={setSelectedItem} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div>
            {!searchQuery && filteredItems.length > 0 && (
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}
              >
                {currentCategoryLabel}
              </h2>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} onAllergenClick={setSelectedItem} />
              ))}
            </div>
          </div>
        )}

        <AllergenTable />
      </div>

      {selectedItem && (
        <AllergenModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
