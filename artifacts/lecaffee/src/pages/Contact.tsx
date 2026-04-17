import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Navigation, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Name: ${form.name}\nPhone: ${form.phone || "Not provided"}\n\n${form.message}`;
    const mailtoUrl = `mailto:info@lecaffee.co.uk?subject=${encodeURIComponent(form.subject || "Website Enquiry")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f0e8" }}>
      {/* Header */}
      <section
        className="py-20 text-center px-4"
        style={{ backgroundColor: "#0f2318" }}
        data-testid="section-contact-header"
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c8873a" }}>
          Coffee Shop
        </p>
        <h1
          className="text-5xl font-bold mb-4"
          style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}
        >
          Contact Coffee Shop
        </h1>
        <p className="text-base max-w-lg mx-auto" style={{ color: "#6b8a6b" }}>
          We'd love to hear from you. Reach out with any questions, feedback, or just to say hello.
        </p>

        {/* Quick info bar */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {[
            { icon: <Mail size={16} />, label: "Email", value: "info@lecaffee.co.uk" },
            { icon: <Phone size={16} />, label: "Phone number", value: "+44 7393454245" },
            { icon: <Clock size={16} />, label: "Opening hours", value: "Everyday 08:00–18:00" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="flex justify-center mb-2" style={{ color: "#c8873a" }}>{item.icon}</div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#6b8a6b" }}>{item.label}</p>
              <p className="text-sm font-semibold" style={{ color: "#f0e8d8" }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Quick Actions */}
      <section className="py-16 px-4 sm:px-6" data-testid="section-contact-form">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}>
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#4a3a2c" }}>
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ border: "1.5px solid #d4c8b8", backgroundColor: "#faf8f5", color: "#2a1a0e" }}
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#4a3a2c" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ border: "1.5px solid #d4c8b8", backgroundColor: "#faf8f5", color: "#2a1a0e" }}
                      data-testid="input-contact-email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "#4a3a2c" }}>
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ border: "1.5px solid #d4c8b8", backgroundColor: "#faf8f5", color: "#2a1a0e" }}
                    data-testid="input-contact-phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "#4a3a2c" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ border: "1.5px solid #d4c8b8", backgroundColor: "#faf8f5", color: "#2a1a0e" }}
                    data-testid="input-contact-subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "#4a3a2c" }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us more..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{ border: "1.5px solid #d4c8b8", backgroundColor: "#faf8f5", color: "#2a1a0e" }}
                    data-testid="input-contact-message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-[0.99]"
                  style={{ backgroundColor: "#1a3a2a", color: "#f0e8d8" }}
                  data-testid="button-contact-submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Quick Actions + Locations */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-base mb-4" style={{ color: "#1a3a2a" }}>Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="tel:+447393454245"
                  className="flex items-center gap-3 p-3 rounded-xl transition-all hover:shadow-sm cursor-pointer"
                  style={{ backgroundColor: "#f5f0e8", color: "#1a3a2a" }}
                  data-testid="button-quick-call"
                >
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "#1a3a2a" }}>
                    <Phone size={14} style={{ color: "#f0e8d8" }} />
                  </div>
                  <span className="text-sm font-medium">Click to Call</span>
                </a>
                <a
                  href="https://wa.me/447393454245"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl transition-all hover:shadow-sm cursor-pointer"
                  style={{ backgroundColor: "#f5f0e8", color: "#1a3a2a" }}
                  data-testid="button-quick-whatsapp"
                >
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "#25D366" }}>
                    <MessageCircle size={14} style={{ color: "#fff" }} />
                  </div>
                  <span className="text-sm font-medium">WhatsApp Us</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Hastings+East+Sussex+UK"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl transition-all hover:shadow-sm cursor-pointer"
                  style={{ backgroundColor: "#f5f0e8", color: "#1a3a2a" }}
                  data-testid="button-quick-directions"
                >
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "#c8873a" }}>
                    <Navigation size={14} style={{ color: "#fff" }} />
                  </div>
                  <span className="text-sm font-medium">Get Directions</span>
                </a>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-base mb-4" style={{ color: "#1a3a2a" }}>Our Locations</h3>
              {[
                { city: "Eastbourne", link: "https://maps.google.com/?q=Eastbourne+East+Sussex+UK" },
                { city: "Hastings", link: "https://maps.google.com/?q=Hastings+East+Sussex+UK" },
              ].map((loc) => (
                <div
                  key={loc.city}
                  className="flex items-center justify-between py-3 border-b last:border-b-0"
                  style={{ borderColor: "#f0ebe0" }}
                >
                  <div>
                    <p className="font-medium text-sm" style={{ color: "#1a3a2a" }}>{loc.city}</p>
                    <span
                      className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs"
                      style={{ backgroundColor: "rgba(200,135,58,0.12)", color: "#c8873a" }}
                    >
                      Coming Soon
                    </span>
                  </div>
                  <a
                    href={loc.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors hover:opacity-80"
                    style={{ backgroundColor: "#f5f0e8", color: "#1a3a2a" }}
                    data-testid={`button-directions-${loc.city.toLowerCase()}`}
                  >
                    Get directions
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
