/*
 * DESIGN: Midnight Opulence — Dark luxury editorial
 * Footer: Deep navy, gold accents, social media links, contact info
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}


export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-[#F5F0E8]">
      {/* Gold line separator */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#EFC07B] to-transparent" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#EFC07B] font-[family-name:var(--font-display)] mb-4">
              On-The-Spot
            </h3>
            <p className="text-sm text-[#F5F0E8]/60 leading-relaxed mb-6">
              Ultra-prestige cleaning services for Monterey County's finest properties, vehicles, and commercial spaces. 15 years of excellence.
            </p>
            {/* Social Media Banner */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/people/On-The-Spot-Carpet-Cleaning/100077333312684/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#EFC07B]/30 text-[#EFC07B]/60 hover:bg-[#EFC07B] hover:text-[#1A1A2E] transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-[#EFC07B] mb-6 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-[#F5F0E8]/60 hover:text-[#EFC07B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/prices" className="text-sm text-[#F5F0E8]/60 hover:text-[#EFC07B] transition-colors">
                  Services & Prices
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#F5F0E8]/60 hover:text-[#EFC07B] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-[#EFC07B] mb-6 font-semibold">
              Services
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-[#F5F0E8]/60">Carpet & Rug Cleaning</li>
              <li className="text-sm text-[#F5F0E8]/60">Pressure Washing</li>
              <li className="text-sm text-[#F5F0E8]/60">Vehicle Detailing</li>
              <li className="text-sm text-[#F5F0E8]/60">Commercial Cleaning</li>
              <li className="text-sm text-[#F5F0E8]/60">Stain & Odor Removal</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-[#EFC07B] mb-6 font-semibold">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:831-383-0791" className="flex items-center gap-3 text-sm text-[#F5F0E8]/60 hover:text-[#EFC07B] transition-colors">
                  <Phone className="w-4 h-4 text-[#EFC07B]" />
                  831-383-0791
                </a>
              </li>
              <li>
                <a href="mailto:onthespot831@gmail.com" className="flex items-center gap-3 text-sm text-[#F5F0E8]/60 hover:text-[#EFC07B] transition-colors">
                  <Mail className="w-4 h-4 text-[#EFC07B]" />
                  onthespot831@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-[#F5F0E8]/60">
                  <MapPin className="w-4 h-4 text-[#EFC07B] mt-0.5 shrink-0" />
                  Carmel-By-The-Sea &<br />Monterey County, CA
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#EFC07B]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#F5F0E8]/40">
            &copy; {new Date().getFullYear()} On-The-Spot Company. All rights reserved. Licensed & Insured.
          </p>
          <p className="text-xs text-[#F5F0E8]/40">
            Serving Monterey County &mdash; Available 24/7/365
          </p>
        </div>
      </div>
    </footer>
  );
}
