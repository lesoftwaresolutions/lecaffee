import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { menuItems, categories, type MenuItem } from "@/data/menuData";

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

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
      data-testid={`card-menu-${item.id}`}
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
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
        {item.tags && item.tags.length > 0 && (
          <div className="flex gap-1.5 mt-auto">
            {item.tags.map((tag) => (
              <DietaryBadge key={tag} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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

        {/* Search */}
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
                    <MenuCard key={item.id} item={item} />
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
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Allergen info */}
        <div
          className="mt-14 rounded-2xl p-6 text-sm"
          style={{ backgroundColor: "rgba(26,58,42,0.06)", border: "1px solid rgba(26,58,42,0.12)" }}
          data-testid="section-allergen-info"
        >
          <h4 className="font-bold mb-2" style={{ color: "#1a3a2a" }}>Allergen Information</h4>
          <p style={{ color: "#6b5c4c" }}>
            Please inform our staff of any allergies or dietary requirements before ordering. Our food may contain or come into contact with common allergens including nuts, gluten, dairy, eggs, soy, and sesame. Full allergen information is available on request.
          </p>
          <div className="flex flex-wrap gap-4 mt-3" style={{ color: "#8a7a64" }}>
            <span><strong style={{ color: "#1a3a2a" }}>V</strong> = Vegetarian</span>
            <span><strong style={{ color: "#1a3a2a" }}>VG</strong> = Vegan</span>
            <span><strong style={{ color: "#1a3a2a" }}>GF</strong> = Gluten Free option</span>
          </div>
        </div>
      </div>
    </div>
  );
}
