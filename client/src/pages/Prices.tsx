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
      { service: "Carpet Cleaning", unit: "Per Sq. Ft.", price: "$0.44" },
      { service: "Area Rug Cleaning", unit: "Per Sq. Ft.", price: "$2.50" },
      { service: "Pet Urine Removal Treatment (PURT)", unit: "Per Treatment", price: "$45.00" },
      { service: "DuPont Invisible Shield Protection", unit: "Per Sq. Ft.", price: "Contact for Quote" },
    ],
  },
  {
    title: "Flooring Services",
    description: "Tile, hardwood, and specialized floor care",
    rows: [
      { service: "Tile Cleaning", unit: "Per Sq. Ft.", price: "$1.00" },
      { service: "Hardwood Floors", unit: "Per Sq. Ft.", price: "$0.33" },
      { service: "Low Speed Floor Machine", unit: "Flat Rate", price: "$150.00" },
      { service: "Baseboard Cleaning", unit: "Per Linear Sq. Ft.", price: "$0.40" },
    ],
  },
  {
    title: "Upholstery & Specialty",
    description: "Fine upholstery, mattresses, pillows, and bedframes",
    rows: [
      { service: "Upholstery Cleaning", unit: "Per Sq. Ft.", price: "$10.00" },
      { service: "Mattress Cleaning", unit: "Per Mattress", price: "Contact for Quote" },
      { service: "Pillow Cleaning", unit: "Per Pillow", price: "Contact for Quote" },
      { service: "Fine Upholstery / Bedframes", unit: "Per Piece", price: "Contact for Quote" },
    ],
  },
  {
    title: "Pressure Washing & Exterior",
    description: "Roofs, concrete, siding, decks, fences, brick pavers, and more",
    rows: [
      { service: "Concrete Cleaning", unit: "Per Foot", price: "$1.00" },
      { service: "Sealing", unit: "Per Sq. Ft.", price: "$1.30" },
      { service: "Roof Washing", unit: "TBD", price: "Contact for Quote" },
      { service: "House Washing", unit: "TBD", price: "Contact for Quote" },
      { service: "Vacuum Gutter Cleaning", unit: "Per Linear Sq. Ft.", price: "$4.00" },
      { service: "Wood-Restore", unit: "Per Linear Sq. Ft.", price: "$4.00" },
    ],
  },
  {
    title: "Specialized Cleaning Services",
    description: "Chemical treatments, equipment rental, and specialized services",
    rows: [
      { service: "Rust Remover", unit: "Per Gallon", price: "$70.00" },
      { service: "Effervescent Calcium Remover", unit: "Per Gallon", price: "$70.00" },
      { service: "High Speed Dryers", unit: "Per Unit", price: "$30.00" },
      { service: "High Pressure Air", unit: "Per Half-Hour", price: "$30.00 ($1.00/min)" },
      { service: "Chemical Reclamation", unit: "Per Hour", price: "$200.00" },
      { service: "Water Reclamation", unit: "Per Hour", price: "$160.00" },
      { service: "Bio-Hazard Cleaning", unit: "Per Hour", price: "$350.00" },
      { service: "Hoarding/Hoarding Cleanup", unit: "Per Hour", price: "$250.00" },
    ],
  },
  {
    title: "Moving & Furniture Services",
    description: "Moving furniture and related services",
    rows: [
      { service: "Moving Furniture", unit: "Per Sq. Ft.", price: "$0.52" },
      { service: "Hauling and Moving", unit: "TBD", price: "Contact for Quote" },
    ],
  },
  {
    title: "Soft Wash & Window Services",
    description: "Gentle washing and window cleaning",
    rows: [
      { service: "Soft Wash", unit: "TBD", price: "Contact for Quote" },
      { service: "Window Wash", unit: "TBD", price: "Contact for Quote" },
      { service: "House Wash, Wax, and Blow", unit: "TBD", price: "Contact for Quote" },
    ],
  },
  {
    title: "Commercial & Property Services",
    description: "Commercial cleaning, property cleanup, and specialized services",
    rows: [
      { service: "Trash Removal", unit: "N/A", price: "No Price" },
      { service: "Donations", unit: "N/A", price: "No Price" },
      { service: "Senior Solutions", unit: "N/A", price: "No Price" },
      { service: "Power Wash Indoors", unit: "N/A", price: "No Price" },
      { service: "Extra Cleaning", unit: "N/A", price: "No Price" },
      { service: "Remote Location", unit: "N/A", price: "No Price" },
      { service: "Full Property Cleanup", unit: "TBD", price: "Contact for Quote" },
      { service: "Landscape Cleanup", unit: "TBD", price: "Contact for Quote" },
      { service: "Driveway/House Combo", unit: "TBD", price: "Contact for Quote" },
    ],
  },
  {
    title: "Warranties & Protection",
    description: "Extended protection and warranty options",
    rows: [
      { service: "Warranties", unit: "Duration", price: "Contact for Quote" },
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
            <div className="mt-8 p-6 bg-[#0F3460]/30 border border-[#EFC07B]/30 rounded-lg">
              <p className="text-[#F5F0E8]/80 text-sm leading-relaxed">
                <span className="text-[#EFC07B] font-semibold">Why Some Prices Are Contact for Quote:</span> The beautiful homes, hotels, and properties in Carmel-By-The-Sea and Monterey County are unique. Each property varies widely in size, shape, location, and the specific fixtures that need cleaning and improvement. Many of our services require a high level of specialization that only On-The-Spot Company can provide. For these custom services, we offer free, quick, and easy estimates so you know exactly what to expect.
              </p>
            </div>
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
                          Price
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
                  <li>
                    Licensed and insured. Serving Monterey County for 15 years.
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
