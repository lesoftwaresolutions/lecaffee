import { ExternalLink } from "lucide-react";
import { SiJusteat, SiDeliveroo, SiUber } from "react-icons/si";

const platforms = [
  {
    name: "Just Eat",
    icon: SiJusteat,
    color: "#FF8000",
    bgColor: "rgba(255,128,0,0.1)",
    desc: "Order Lecaffee on Just Eat — fast delivery to your door",
    url: "https://www.just-eat.co.uk",
  },
  {
    name: "Deliveroo",
    icon: SiDeliveroo,
    color: "#00CCBC",
    bgColor: "rgba(0,204,188,0.1)",
    desc: "Find us on Deliveroo and get your favourite items delivered",
    url: "https://deliveroo.co.uk",
  },
  {
    name: "Uber Eats",
    icon: SiUber,
    color: "#000000",
    bgColor: "rgba(0,0,0,0.08)",
    desc: "Order via Uber Eats for quick, reliable delivery",
    url: "https://www.ubereats.com",
  },
];

export default function Order() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f0e8" }}>
      {/* Header */}
      <section
        className="py-24 px-4 text-center"
        style={{ backgroundColor: "#0f2318" }}
        data-testid="section-order-header"
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c8873a" }}>
          Delivery
        </p>
        <h1
          className="text-5xl font-bold mb-5"
          style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}
        >
          Order Lecaffee Online
        </h1>
        <p className="text-base max-w-lg mx-auto" style={{ color: "#6b8a6b" }}>
          You can order Lecaffee online through our delivery partners. Choose your preferred platform below.
        </p>
      </section>

      {/* Platforms */}
      <section className="py-20 px-4 sm:px-6" data-testid="section-order-platforms">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                  data-testid={`card-platform-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: p.bgColor }}
                  >
                    <Icon size={40} style={{ color: p.color }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: "#6b5c4c" }}>{p.desc}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90 w-full justify-center"
                    style={{ backgroundColor: "#1a3a2a", color: "#f0e8d8" }}
                    data-testid={`button-order-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    Order on {p.name}
                    <ExternalLink size={14} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info section */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ backgroundColor: "#1a3a2a" }}
        data-testid="section-order-info"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-5" style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}>
            Can't Find Us Yet?
          </h2>
          <p className="text-base mb-8" style={{ color: "#6b8a6b" }}>
            We're currently setting up our online ordering profiles. If you can't find Lecaffee on your preferred platform yet, give us a call and we'll take your order directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447393454245"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "#c8873a", color: "#fff" }}
              data-testid="button-order-call-us"
            >
              Call Us: +44 7393454245
            </a>
            <a
              href="https://wa.me/447393454245"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all hover:bg-white/10"
              style={{ border: "2px solid rgba(240,232,216,0.3)", color: "#f0e8d8" }}
              data-testid="button-order-whatsapp"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Opening hours */}
      <section className="py-12 px-4 text-center" style={{ backgroundColor: "#f5f0e8" }} data-testid="section-order-hours">
        <div className="max-w-lg mx-auto">
          <h3 className="text-xl font-bold mb-6" style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}>
            Delivery Hours
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Coffee & Food", time: "08:00 – 18:00" },
              { label: "Breakfast Orders", time: "07:00 – 12:00" },
              { label: "Evening Takeaway", time: "16:00 – Close" },
            ].map((h) => (
              <div
                key={h.label}
                className="bg-white rounded-xl p-5 shadow-sm"
                data-testid={`card-hours-${h.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8a7a64" }}>{h.label}</p>
                <p className="text-lg font-bold" style={{ color: "#1a3a2a" }}>{h.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
