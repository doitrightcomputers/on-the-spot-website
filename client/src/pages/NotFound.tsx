/*
 * DESIGN: Midnight Opulence — Dark luxury editorial
 * 404 Page: Styled to match the luxury brand
 */
import { Link } from "wouter";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1A1A2E] flex items-center justify-center pt-20">
      <div className="container text-center py-20">
        <span className="text-[#EFC07B] text-xs tracking-[0.4em] uppercase font-semibold">
          Page Not Found
        </span>
        <h1 className="text-8xl lg:text-[12rem] font-bold text-[#F5F0E8]/5 leading-none mt-4">
          404
        </h1>
        <h2 className="text-2xl lg:text-4xl font-bold text-[#F5F0E8] -mt-16 lg:-mt-24 mb-6">
          This Page Doesn't Exist
        </h2>
        <p className="text-[#F5F0E8]/50 max-w-md mx-auto mb-10">
          The page you're looking for may have been moved or no longer exists.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#EFC07B] text-[#1A1A2E] px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#F5F0E8]"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <a
            href="tel:831-383-0791"
            className="inline-flex items-center gap-2 border-2 border-[#EFC07B]/40 text-[#EFC07B] px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#EFC07B]/10"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
