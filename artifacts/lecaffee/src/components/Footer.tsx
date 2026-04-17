import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, Phone, Clock, MapPin } from "lucide-react";
const logoPath = "/logo.jpeg";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f2318", color: "#c8b89a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoPath}
                alt="Lecaffee"
                className="h-12 w-12 rounded-full object-cover border-2"
                style={{ borderColor: "#6b4226" }}
              />
              <span
                className="text-2xl font-bold"
                style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}
              >
                Lecaffee
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#8a7a64" }}>
              Experience the rich aroma of premium coffee and the taste of freshly prepared food, all under one roof.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full transition-colors hover:text-white"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "#8a7a64" }}
                data-testid="link-social-facebook"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full transition-colors hover:text-white"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "#8a7a64" }}
                data-testid="link-social-instagram"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full transition-colors hover:text-white"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "#8a7a64" }}
                data-testid="link-social-twitter"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: "#f0e8d8" }}
            >
              Opening Hours
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "#8a7a64" }}>
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 shrink-0" />
                <div>
                  <p>Everyday 08:00 – 18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium" style={{ color: "#c8b89a" }}>Breakfast</p>
                  <p>7:00am – 12:00pm</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium" style={{ color: "#c8b89a" }}>Takeaway & Dinner</p>
                  <p>From 4:00pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: "#f0e8d8" }}
            >
              Contact
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "#8a7a64" }}>
              <a
                href="tel:+447393454245"
                className="flex items-center gap-2 hover:text-white transition-colors"
                data-testid="link-footer-phone"
              >
                <Phone size={14} />
                +44 7393454245
              </a>
              <a
                href="mailto:info@lecaffee.co.uk"
                className="flex items-center gap-2 hover:text-white transition-colors"
                data-testid="link-footer-email"
              >
                <Mail size={14} />
                info@lecaffee.co.uk
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                Eastbourne &amp; Hastings
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: "#f0e8d8" }}
            >
              Locations
            </h3>
            <div className="space-y-4 text-sm" style={{ color: "#8a7a64" }}>
              <div>
                <p className="font-medium" style={{ color: "#c8b89a" }}>Eastbourne</p>
                <span
                  className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs"
                  style={{ backgroundColor: "rgba(200,135,58,0.2)", color: "#c8873a" }}
                >
                  Coming Soon
                </span>
              </div>
              <div>
                <p className="font-medium" style={{ color: "#c8b89a" }}>Hastings</p>
                <span
                  className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs"
                  style={{ backgroundColor: "rgba(200,135,58,0.2)", color: "#c8873a" }}
                >
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#8a7a64" }}
        >
          <p>Copyright &copy; 2026 Le Caffee. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" data-testid="link-privacy-policy">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/allergens" data-testid="link-allergen-info">
              <span className="hover:text-white transition-colors cursor-pointer">Allergen Information</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
