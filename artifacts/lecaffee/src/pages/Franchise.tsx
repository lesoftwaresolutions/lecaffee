import { Link } from "wouter";
import { CheckCircle, TrendingUp, Users, MapPin, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp size={24} />,
    title: "Low Investment Opportunity",
    desc: "Start your own Lecaffee with a competitive initial investment, ideal for entrepreneurs who want to get into the growing UK coffee and casual dining market.",
  },
  {
    icon: <Users size={24} />,
    title: "Full Support & Training",
    desc: "We provide comprehensive training for you and your staff, covering everything from barista skills to food safety, operations, and customer service.",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Proven Business Model",
    desc: "Benefit from a tested concept combining premium coffee, fresh food, and evening takeaway — three revenue streams in one location.",
  },
];

const steps = [
  { num: "01", title: "Apply Online", desc: "Fill out our franchise enquiry form with your details and preferred location." },
  { num: "02", title: "Initial Meeting", desc: "We'll arrange a call or meeting to discuss the opportunity in detail." },
  { num: "03", title: "Agreement & Training", desc: "Sign the franchise agreement and complete our full training programme." },
  { num: "04", title: "Open Your Lecaffee", desc: "Launch your store with our full support and marketing materials." },
];

const locations = [
  {
    name: "Hastings",
    desc: "A growing coastal town with a vibrant food scene and strong footfall in the town centre and seafront.",
    status: "Sought",
  },
  {
    name: "St Leonards",
    desc: "Adjacent to Hastings, St Leonards has a thriving independent café culture and excellent community ties.",
    status: "Sought",
  },
  {
    name: "Bexhill-on-Sea",
    desc: "A seaside town with strong year-round and seasonal trade, ideal for a coffee and takeaway concept.",
    status: "Sought",
  },
];

export default function Franchise() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f0e8" }}>
      {/* Header */}
      <section
        className="relative py-24 px-4 text-center overflow-hidden"
        style={{ backgroundColor: "#0f2318" }}
        data-testid="section-franchise-header"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c8873a" }}>
            Business Opportunity
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-5"
            style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}
          >
            Start Your Lecaffee
            <br />
            <span style={{ color: "#c8873a" }}>Franchise</span>
          </h1>
          <p className="text-base max-w-xl mx-auto mb-10" style={{ color: "#6b8a6b" }}>
            Join the Lecaffee family and bring premium coffee and great food to your community. We're looking for passionate people in East Sussex and beyond.
          </p>
          <Link href="/contact" data-testid="button-franchise-apply-top">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#c8873a", color: "#fff" }}
            >
              Apply Now
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6" data-testid="section-franchise-benefits">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}>
              Why Franchise with Lecaffee?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                data-testid={`card-benefit-${b.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="inline-flex p-3 rounded-xl mb-5"
                  style={{ backgroundColor: "rgba(26,58,42,0.1)", color: "#1a3a2a" }}
                >
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}>
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b5c4c" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#1a3a2a" }} data-testid="section-franchise-steps">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}>
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                data-testid={`card-step-${step.num}`}
              >
                <p
                  className="text-4xl font-bold mb-4"
                  style={{ color: "#c8873a", fontFamily: "'Playfair Display', serif" }}
                >
                  {step.num}
                </p>
                <h3 className="font-bold mb-2" style={{ color: "#f0e8d8" }}>{step.title}</h3>
                <p className="text-sm" style={{ color: "#6b8a6b" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target locations */}
      <section className="py-20 px-4 sm:px-6" data-testid="section-franchise-locations">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}>
              Target Locations
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#6b5c4c" }}>
              We're actively seeking franchise partners in these East Sussex locations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
                data-testid={`card-location-${loc.name.toLowerCase()}`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg mt-0.5" style={{ backgroundColor: "rgba(200,135,58,0.12)" }}>
                    <MapPin size={18} style={{ color: "#c8873a" }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}>
                      {loc.name}
                    </h3>
                    <span
                      className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: "rgba(26,58,42,0.1)", color: "#1a3a2a" }}
                    >
                      {loc.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6b5c4c" }}>{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 text-center"
        style={{ backgroundColor: "#c8873a" }}
        data-testid="section-franchise-cta"
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8 text-base">
            Complete our enquiry form and our franchise team will be in touch within 2 working days.
          </p>
          <Link href="/contact" data-testid="button-franchise-apply-cta">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white transition-all hover:bg-white/90 active:scale-95"
              style={{ color: "#c8873a" }}
            >
              Apply Now
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
