/*
 * DESIGN: Midnight Opulence — Dark luxury editorial
 * Prices Page: Comprehensive service listing with pricing tables
 * Colors: #1A1A2E, #16213E, #0F3460, #EFC07B, #F5F0E8
 */
import { motion } from "framer-motion";
import { Phone, ChevronRight, Info } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0, 0, 0.2, 1] as const },
  }),
};

interface PriceRow {
  service: string;
  unit: string;
  price: string;
  note?: string;
}

interface PriceCategory {
  title: string;
  description: string;
  rows: PriceRow[];
}

const priceCategories: PriceCategory[] = [
  {
    title: "Carpet & Rug Cleaning",
    description: "Reverse osmosis H2O, high-heat extraction, MasterBlend products",
    rows: [
      { service: "Standard Carpet Cleaning", unit: "Per Sq. Ft.", price: "$0.35 – $0.55", note: "Depends on soiling level" },
      { service: "Deep Extraction Cleaning", unit: "Per Sq. Ft.", price: "$0.50 – $0.75", note: "Heavy traffic / staining" },
      { service: "Area Rug Cleaning", unit: "Per Sq. Ft.", price: "$2.00 – $5.00", note: "Varies by material & size" },
      { service: "Stair Cleaning", unit: "Per Step", price: "$3.00 – $5.00" },
      { service: "DuPont Invisible Shield Protection", unit: "Per Sq. Ft.", price: "$0.15 – $0.25", note: "Stain repellent coating" },
      { service: "Fragrance Treatment", unit: "Per Room", price: "$10.00 – $20.00" },
    ],
  },
  {
    title: "Stain & Odor Removal",
    description: "Specialized treatments for the toughest stains and odors",
    rows: [
      { service: "Pet Urine Treatment", unit: "Per Area", price: "$50.00 – $150.00", note: "Depends on severity" },
      { service: "Wine / Red Stain Removal", unit: "Per Stain", price: "$25.00 – $75.00" },
      { service: "Mildew Treatment", unit: "Per Area", price: "$40.00 – $100.00" },
      { service: "General Odor Removal", unit: "Per Room", price: "$30.00 – $80.00" },
      { service: "Topical Stain Treatment", unit: "Per Stain", price: "$15.00 – $50.00" },
    ],
  },
  {
    title: "Upholstery & Specialty",
    description: "Fine upholstery, mattresses, pillows, and bedframes",
    rows: [
      { service: "Sofa Cleaning (3-seat)", unit: "Per Piece", price: "$100.00 – $200.00" },
      { service: "Loveseat Cleaning", unit: "Per Piece", price: "$75.00 – $150.00" },
      { service: "Armchair Cleaning", unit: "Per Piece", price: "$50.00 – $100.00" },
      { service: "Mattress Cleaning", unit: "Per Side", price: "$50.00 – $100.00", note: "Twin to King" },
      { service: "Pillow Cleaning", unit: "Per Pillow", price: "$10.00 – $25.00" },
      { service: "Fine Upholstery / Bedframes", unit: "Per Piece", price: "Call for Quote" },
    ],
  },
  {
    title: "Pressure Washing",
    description: "Roofs, concrete, siding, decks, fences, brick pavers, and more",
    rows: [
      { service: "Concrete / Driveway Cleaning", unit: "Per Sq. Ft.", price: "$0.15 – $0.35" },
      { service: "House Siding & Trim", unit: "Per Lin. Ft.", price: "$1.00 – $3.00" },
      { service: "Deck & Fence Cleaning", unit: "Per Lin. Ft.", price: "$1.00 – $2.50" },
      { service: "Roof Cleaning", unit: "Per Sq. Ft.", price: "$0.25 – $0.60", note: "Soft wash method" },
      { service: "Brick Paver Cleaning", unit: "Per Sq. Ft.", price: "$0.20 – $0.50" },
      { service: "Brick Paver Sealing", unit: "Per Sq. Ft.", price: "$0.50 – $1.50", note: "After cleaning" },
    ],
  },
  {
    title: "Chemical Wash (Sodium Hypochlorite)",
    description: "Professional-grade chemical treatments for exterior surfaces",
    rows: [
      { service: "Light Concentration Wash", unit: "Per Sq. Ft.", price: "$0.10 – $0.20", note: "General maintenance" },
      { service: "Medium Concentration Wash", unit: "Per Sq. Ft.", price: "$0.20 – $0.40", note: "Moderate buildup" },
      { service: "Heavy Concentration Wash", unit: "Per Sq. Ft.", price: "$0.35 – $0.60", note: "Severe mold/mildew" },
      { service: "Gutter Vacuuming", unit: "Per Lin. Ft.", price: "$1.00 – $3.00" },
    ],
  },
  {
    title: "Vehicle Detailing",
    description: "Luxury vehicles, reverse osmosis water, sap removal, and more",
    rows: [
      { service: "Exterior Wash (RO Water)", unit: "Per Vehicle", price: "$75.00 – $200.00", note: "Size dependent" },
      { service: "Interior Detailing", unit: "Per Vehicle", price: "$100.00 – $300.00" },
      { service: "Full Detail Package", unit: "Per Vehicle", price: "$200.00 – $500.00" },
      { service: "Sap Removal", unit: "Per Vehicle", price: "$50.00 – $150.00" },
      { service: "Upholstery / Carpet in Vehicle", unit: "Per Vehicle", price: "$75.00 – $200.00" },
    ],
  },
  {
    title: "Commercial Services",
    description: "Hotels, restaurants, retail, HOAs, condos, and event spaces",
    rows: [
      { service: "Hotel Exterior Cleaning", unit: "Per Project", price: "Call for Quote" },
      { service: "Restaurant / Retail Cleaning", unit: "Per Sq. Ft.", price: "$0.20 – $0.50" },
      { service: "Sidewalk / Pool Deck", unit: "Per Sq. Ft.", price: "$0.15 – $0.35" },
      { service: "Dumpster Cleaning / Degreasing", unit: "Per Unit", price: "$75.00 – $200.00" },
      { service: "Playground / Park Equipment Sanitizing", unit: "Per Project", price: "Call for Quote" },
      { service: "Drive-Through Cleaning", unit: "Per Project", price: "Call for Quote" },
      { service: "Event Pre/Post Cleaning", unit: "Per Project", price: "Call for Quote" },
    ],
  },
  {
    title: "Tile, Grout & Floor Services",
    description: "Machine-scrub, tile cleaning, grout restoration, and floor care",
    rows: [
      { service: "Tile & Grout Cleaning", unit: "Per Sq. Ft.", price: "$0.75 – $2.00" },
      { service: "Machine Scrub (Any Surface)", unit: "Per Sq. Ft.", price: "$0.50 – $1.50" },
      { service: "Low Speed Floor Machine Service", unit: "Per Sq. Ft.", price: "$0.40 – $1.00" },
      { service: "Steam Cleaning", unit: "Per Sq. Ft.", price: "$0.35 – $0.75" },
    ],
  },
];

export default function Prices() {
  return (
    <div className="min-h-screen">
      {/* ====== PAGE HEADER ====== */}
      <section className="bg-[#1A1A2E] pt-32 pb-20">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="max-w-3xl"
          >
            <span className="text-[#EFC07B] text-xs tracking-[0.3em] uppercase font-semibold">
              Transparent Pricing
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#F5F0E8] mt-3 mb-6 leading-tight">
              Services & <span className="text-[#EFC07B]">Prices</span>
            </h1>
            <div className="w-16 h-[2px] bg-[#EFC07B] mb-6" />
            <p className="text-[#F5F0E8]/60 text-lg leading-relaxed">
              All prices are estimates and may vary based on condition, accessibility,
              and scope of work. We provide free, quick, and easy estimates with no
              obligations and no minimums. Senior citizen, military, student, and
              teacher discounts are available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====== PRICING TABLES ====== */}
      <section className="bg-[#F5F0E8] py-24">
        <div className="container">
          <div className="space-y-16">
            {priceCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
              >
                <div className="mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">
                    {category.title}
                  </h2>
                  <p className="text-sm text-[#1A1A2E]/50 mt-2">
                    {category.description}
                  </p>
                  <div className="w-12 h-[2px] bg-[#EFC07B] mt-4" />
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="bg-[#1A1A2E]">
                        <th className="text-left text-xs tracking-[0.15em] uppercase text-[#EFC07B] font-semibold py-4 px-6">
                          Service
                        </th>
                        <th className="text-left text-xs tracking-[0.15em] uppercase text-[#EFC07B] font-semibold py-4 px-6">
                          Unit
                        </th>
                        <th className="text-left text-xs tracking-[0.15em] uppercase text-[#EFC07B] font-semibold py-4 px-6">
                          Price Range
                        </th>
                        <th className="text-left text-xs tracking-[0.15em] uppercase text-[#EFC07B] font-semibold py-4 px-6">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.rows.map((row, rowIdx) => (
                        <tr
                          key={row.service}
                          className={`border-b border-[#1A1A2E]/10 transition-colors hover:bg-[#EFC07B]/5 ${
                            rowIdx % 2 === 0 ? "bg-white" : "bg-[#F5F0E8]"
                          }`}
                        >
                          <td className="py-4 px-6 text-sm font-medium text-[#1A1A2E]">
                            {row.service}
                          </td>
                          <td className="py-4 px-6 text-sm text-[#1A1A2E]/60">
                            {row.unit}
                          </td>
                          <td className="py-4 px-6 text-sm font-semibold text-[#0F3460]">
                            {row.price}
                          </td>
                          <td className="py-4 px-6 text-sm text-[#1A1A2E]/40 italic">
                            {row.note || "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mt-16 p-8 bg-[#1A1A2E] border border-[#EFC07B]/20"
          >
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-[#EFC07B] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-[#F5F0E8] mb-2 font-[family-name:var(--font-display)]">
                  Important Pricing Notes
                </h3>
                <ul className="space-y-2 text-sm text-[#F5F0E8]/60">
                  <li>
                    All prices are estimates. Final pricing depends on condition, accessibility, and scope of work.
                  </li>
                  <li>
                    Free quick and easy estimates — no obligation, no minimums.
                  </li>
                  <li>
                    Discounts available: Senior citizens, military personnel, students, and teachers.
                  </li>
                  <li>
                    Same-day service available upon request. We work 24/7/365, rain or shine.
                  </li>
                  <li>
                    All services include reverse osmosis deionized water and MasterBlend products.
                  </li>
                  <li>
                    Tony brings his own self-contained power, products, labor, and equipment.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="bg-gradient-to-br from-[#0F3460] via-[#1A1A2E] to-[#16213E] py-20">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F5F0E8] mb-4">
              Get Your Free Estimate
            </h2>
            <p className="text-[#F5F0E8]/60 max-w-lg mx-auto mb-8">
              Call Tony directly for a quick, no-obligation estimate. Available 24/7/365.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:831-383-0791"
                className="inline-flex items-center gap-3 bg-[#EFC07B] text-[#1A1A2E] px-10 py-5 text-lg font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#F5F0E8] hover:shadow-xl hover:shadow-[#EFC07B]/20"
              >
                <Phone className="w-6 h-6" />
                831-383-0791
              </a>
              <a
                href="mailto:onthespot831@gmail.com"
                className="inline-flex items-center gap-2 border-2 border-[#EFC07B]/40 text-[#EFC07B] px-10 py-5 text-lg font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#EFC07B]/10 hover:border-[#EFC07B]"
              >
                Email Us
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
