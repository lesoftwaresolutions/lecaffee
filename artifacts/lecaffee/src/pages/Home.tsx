import { Link } from "wouter";
import { ArrowRight, Coffee, Clock, MapPin, Star, ChevronRight } from "lucide-react";

const stats = [
  { label: "Premium Beans", value: "100%" },
  { label: "Happy Customers", value: "10K+" },
  { label: "Menu Items", value: "60+" },
  { label: "Locations", value: "2" },
];

const morningItems = [
  {
    name: "Full English Breakfast",
    desc: "The classic — bacon, eggs, sausage, beans, toast & more",
    price: "£8.50",
    img: "https://images.unsplash.com/photo-1533920379810-6bedac961555?w=500&q=80",
    badge: "Fan Favourite",
  },
  {
    name: "Flat White",
    desc: "Double ristretto with silky microfoam — Australian-style perfection",
    price: "£3.40",
    img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=500&q=80",
    badge: "Best Seller",
  },
  {
    name: "Egg & Cheese Croissant",
    desc: "Buttery, flaky croissant filled with scrambled egg and cheddar",
    price: "£4.20",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80",
    badge: null,
  },
];

const eveningItems = [
  {
    name: "Double Smash Burger",
    desc: "Two smashed beef patties, double cheese, caramelised onions",
    price: "£9.50",
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80",
    badge: "New",
  },
  {
    name: "Fried Chicken Bucket",
    desc: "5 pieces of our signature crispy fried chicken",
    price: "£8.50",
    img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&q=80",
    badge: "Popular",
  },
  {
    name: "Loaded Cheese Fries",
    desc: "Crispy fries smothered in melted cheese sauce",
    price: "£4.00",
    img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&q=80",
    badge: null,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ backgroundColor: "#0f2318" }}
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,35,24,0.95) 0%, rgba(15,35,24,0.7) 60%, rgba(15,35,24,0.4) 100%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase"
              style={{ backgroundColor: "rgba(200,135,58,0.2)", color: "#c8873a", border: "1px solid rgba(200,135,58,0.3)" }}
            >
              <Coffee size={12} />
              Hastings &amp; Eastbourne, UK
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}
            >
              Coffee That
              <br />
              <span style={{ color: "#c8873a" }}>Warms</span> Your
              <br />
              Morning
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "#8a9e8a" }}>
              Premium artisan coffee by day. Smash burgers and crispy chicken by evening.
              Lecaffee is your neighbourhood spot for every moment.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/menu" data-testid="button-hero-view-menu">
                <button
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: "#c8873a", color: "#fff" }}
                >
                  View Menu
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/order" data-testid="button-hero-order">
                <button
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:bg-white/10"
                  style={{ border: "2px solid rgba(240,232,216,0.3)", color: "#f0e8d8" }}
                >
                  Order Online
                </button>
              </Link>
              <Link href="/franchise" data-testid="button-hero-franchise">
                <button
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:bg-white/10"
                  style={{ border: "2px solid rgba(200,135,58,0.4)", color: "#c8873a" }}
                >
                  Franchise
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating card */}
        <div
          className="absolute bottom-8 right-4 sm:right-12 hidden lg:block rounded-2xl p-5 backdrop-blur-sm shadow-2xl"
          style={{ backgroundColor: "rgba(26,58,42,0.9)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8a9e8a" }}>Today's Opening</p>
          <div className="flex items-center gap-2">
            <Clock size={16} style={{ color: "#c8873a" }} />
            <span className="text-sm font-semibold" style={{ color: "#f0e8d8" }}>08:00 – 18:00</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <MapPin size={16} style={{ color: "#c8873a" }} />
            <span className="text-sm" style={{ color: "#8a9e8a" }}>Hastings &amp; Eastbourne</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10" style={{ backgroundColor: "#1a3a2a" }} data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold" style={{ color: "#c8873a", fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
                <p className="text-sm mt-1" style={{ color: "#8a9e8a" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MORNING COFFEE & BREAKFAST */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#f5f0e8" }} data-testid="section-morning">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c8873a" }}>
              Served from 7:00am
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}>
              Morning Coffee &amp; Breakfast
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#6b5c4c" }}>
              Start your day right with our artisan coffee and freshly made breakfast — crafted with care, every morning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {morningItems.map((item) => (
              <div
                key={item.name}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                data-testid={`card-morning-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: "#c8873a", color: "#fff" }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base" style={{ color: "#1a3a2a" }}>{item.name}</h3>
                    <span className="font-bold text-base" style={{ color: "#c8873a" }}>{item.price}</span>
                  </div>
                  <p className="text-sm" style={{ color: "#6b5c4c" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/menu" data-testid="button-morning-view-full-menu">
              <button
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#1a3a2a", color: "#f0e8d8" }}
              >
                View Full Breakfast Menu
                <ChevronRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* EVENING TAKEAWAY */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#0f2318" }} data-testid="section-evening">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c8873a" }}>
              Available from 4:00pm
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}>
              Evening Takeaway
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#6b8a6b" }}>
              When the sun goes down, Lecaffee transforms. Bold smash burgers, crispy fried chicken and loaded fries — all made fresh to order.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {eveningItems.map((item) => (
              <div
                key={item.name}
                className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                style={{ backgroundColor: "#1a3a2a", border: "1px solid rgba(255,255,255,0.06)" }}
                data-testid={`card-evening-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: "#c8873a", color: "#fff" }}
                    >
                      {item.badge}
                    </span>
                  )}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,35,24,0.6) 0%, transparent 60%)" }} />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base" style={{ color: "#f0e8d8" }}>{item.name}</h3>
                    <span className="font-bold text-base" style={{ color: "#c8873a" }}>{item.price}</span>
                  </div>
                  <p className="text-sm" style={{ color: "#8a9e8a" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/menu" data-testid="button-evening-view-menu">
              <button
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#c8873a", color: "#fff" }}
              >
                See Full Evening Menu
                <ChevronRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY LECAFFEE */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#f5f0e8" }} data-testid="section-why">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}>
              Why Lecaffee?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "☕",
                title: "Premium Beans",
                desc: "We source single-origin Arabica beans directly from farmers in Ethiopia, Colombia and Guatemala.",
              },
              {
                icon: "🍔",
                title: "Fresh Every Day",
                desc: "From breakfast baps to evening burgers — everything is made fresh to order, never pre-packaged.",
              },
              {
                icon: "📍",
                title: "Local to You",
                desc: "Based in Hastings and Eastbourne, we're proud to be part of East Sussex's food scene.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-8 text-center shadow-sm"
                style={{ backgroundColor: "#fff" }}
                data-testid={`card-why-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b5c4c" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#1a3a2a" }} data-testid="section-testimonials">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}>
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Sarah T.",
                location: "Hastings",
                text: "The flat white here is genuinely the best in Hastings. I'm here every morning before work — never disappoints.",
                stars: 5,
              },
              {
                name: "James M.",
                location: "Eastbourne",
                text: "The smash burgers in the evening are incredible. Didn't expect a coffee shop to do food this well!",
                stars: 5,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-2xl p-8 text-left"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                data-testid={`card-review-${review.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="#c8873a" stroke="none" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#b8c8b8" }}>"{review.text}"</p>
                <p className="text-sm font-semibold" style={{ color: "#f0e8d8" }}>{review.name}</p>
                <p className="text-xs" style={{ color: "#6b8a6b" }}>{review.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section
        className="py-16 px-4 sm:px-6 text-center"
        style={{ backgroundColor: "#c8873a" }}
        data-testid="section-cta"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Experience Lecaffee?
          </h2>
          <p className="text-white/80 mb-8">
            Order online, visit us in store, or enquire about a franchise opportunity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/order" data-testid="button-cta-order">
              <button className="px-7 py-3 rounded-full font-semibold text-sm bg-white transition-all hover:bg-white/90" style={{ color: "#c8873a" }}>
                Order Online
              </button>
            </Link>
            <Link href="/franchise" data-testid="button-cta-franchise">
              <button className="px-7 py-3 rounded-full font-semibold text-sm border-2 border-white text-white transition-all hover:bg-white/10">
                Franchise Enquiry
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
