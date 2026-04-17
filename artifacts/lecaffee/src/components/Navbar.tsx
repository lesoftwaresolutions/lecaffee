import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
const logoPath = "/logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Blog", href: "/blog" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: "#1a3a2a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-home-logo">
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src={logoPath}
                alt="Lecaffee Coffee Shop"
                className="h-11 w-11 rounded-full object-cover border-2"
                style={{ borderColor: "#c8b89a" }}
              />
              <span
                className="text-xl font-semibold tracking-wide hidden sm:block"
                style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}
              >
                Lecaffee
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <span
                  className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer"
                  style={{
                    color: location === link.href ? "#f0e8d8" : "#b8a88a",
                    backgroundColor: location === link.href ? "rgba(255,255,255,0.1)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (location !== link.href) {
                      (e.currentTarget as HTMLElement).style.color = "#f0e8d8";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.07)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location !== link.href) {
                      (e.currentTarget as HTMLElement).style.color = "#b8a88a";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+447393454245"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: "#b8a88a" }}
              data-testid="link-phone-desktop"
            >
              <Phone size={15} />
              <span>+44 7393454245</span>
            </a>
            <Link href="/menu" data-testid="button-view-menu-nav">
              <button
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#c8873a", color: "#fff" }}
              >
                View Menu
              </button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md"
            style={{ color: "#f0e8d8" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
            data-testid="nav-mobile"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
                <span
                  className="block px-4 py-3 text-sm font-medium transition-colors cursor-pointer rounded-md mx-1"
                  style={{ color: location === link.href ? "#f0e8d8" : "#b8a88a" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="mt-3 px-4 flex flex-col gap-3">
              <a
                href="tel:+447393454245"
                className="flex items-center gap-2 text-sm"
                style={{ color: "#b8a88a" }}
                data-testid="link-phone-mobile"
              >
                <Phone size={14} />
                +44 7393454245
              </a>
              <Link href="/menu" data-testid="button-view-menu-mobile">
                <button
                  className="w-full px-5 py-2 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: "#c8873a", color: "#fff" }}
                  onClick={() => setMobileOpen(false)}
                >
                  View Menu
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
