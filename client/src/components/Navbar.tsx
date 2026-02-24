/*
 * DESIGN: Midnight Opulence — Dark luxury editorial
 * Nav: Deep navy background, gold accent on logo/active, ivory text
 * Sticky with backdrop blur on scroll
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/prices", label: "Services & Prices" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1A1A2E]/95 backdrop-blur-md shadow-2xl"
          : "bg-[#1A1A2E]"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span
              className="text-xl md:text-2xl font-bold tracking-wide text-[#EFC07B] font-[family-name:var(--font-display)]"
            >
              On-The-Spot
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#F5F0E8]/60">
              Company
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm tracking-widest uppercase transition-colors duration-300 ${
                location === link.href
                  ? "text-[#EFC07B]"
                  : "text-[#F5F0E8]/80 hover:text-[#EFC07B]"
              }`}
            >
              {link.label}
              {location === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#EFC07B]"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:831-383-0791"
            className="hidden sm:flex items-center gap-2 bg-[#EFC07B] text-[#1A1A2E] px-5 py-2.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-[#F5F0E8] hover:shadow-lg hover:shadow-[#EFC07B]/20"
          >
            <Phone className="w-4 h-4" />
            <span>831-383-0791</span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#F5F0E8] p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#16213E] border-t border-[#EFC07B]/20 overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base tracking-widest uppercase py-2 transition-colors ${
                    location === link.href
                      ? "text-[#EFC07B]"
                      : "text-[#F5F0E8]/80 hover:text-[#EFC07B]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:831-383-0791"
                className="flex items-center justify-center gap-2 bg-[#EFC07B] text-[#1A1A2E] px-5 py-3 text-sm font-semibold tracking-wide uppercase mt-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: 831-383-0791</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
