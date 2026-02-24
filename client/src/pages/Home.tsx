/*
 * DESIGN: Midnight Opulence — Dark luxury editorial
 * Home/Landing Page: Cinematic hero, about Tony, services overview, trust signals, CTA
 * Colors: #1A1A2E, #16213E, #0F3460, #EFC07B, #F5F0E8
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Phone,
  Shield,
  Clock,
  Award,
  Droplets,
  Star,
  ChevronRight,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/469PtRvU9J2xAguWXbEx9x/sandbox/d0wJPWUtjF4KwUmZxItNyt-img-1_1771961677000_na1fn_aGVyby1sdXh1cnktY2xlYW5pbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNDY5UHRSdlU5SjJ4QWd1V1hiRXg5eC9zYW5kYm94L2Qwd0pQV1V0akY0S3dVbVp4SXROeXQtaW1nLTFfMTc3MTk2MTY3NzAwMF9uYTFmbl9hR1Z5Ynkxc2RYaDFjbmt0WTJ4bFlXNXBibWMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vnEdcRvCDZsU-oASnD39Nd2FfQAMnq3QUZ6DqOBmM~ukXRTAFdnawBkZ8U5q8aDoEkRMpUHgDHYpsLb0YU7xCRLUlm4AuYEUH0RuNBqGfdh5kjih566942mA8cjwL0SiOr5HonXxeLUZSt95OHs83WFaF1UpXX989KrXaC1lmtV583aWgU6LlpBtQ2C9oBqg8zynPwKOCJA6kg0nq04JNMgQT9G0iRwYHsutmyAvx2IZ5YnRdNAyABPXRw96ennuPHIAuPfCnz4~6YUAFMHCrqW~O2qrtLSLVcZ1Az9CC1kKMzCRdhyC3FU6DyccawRAFfdcg5TpnnuSmPlO~Z7b5w__";

const CARPET_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/469PtRvU9J2xAguWXbEx9x/sandbox/d0wJPWUtjF4KwUmZxItNyt-img-2_1771961684000_na1fn_c2VydmljZXMtY2FycGV0LWNsZWFuaW5n.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNDY5UHRSdlU5SjJ4QWd1V1hiRXg5eC9zYW5kYm94L2Qwd0pQV1V0akY0S3dVbVp4SXROeXQtaW1nLTJfMTc3MTk2MTY4NDAwMF9uYTFmbl9jMlZ5ZG1salpYTXRZMkZ5Y0dWMExXTnNaV0Z1YVc1bi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lbevgi3vAryspi35yle6a3c9GAyBVdP3F-BQWn1K00kmZtEUhblNNHOGxDfuOjW-91CbfFogPE5dz9blNweYsWQ8UlzZWoU1zoQpPP8HtvDN5-dDig5H~Wt8UoW~9i2DdKrYEe4B8Tr9PO1-57SD~TKlauHe0mK-mRRZLNNZWrBJ92qFy62LPyQrmuw-6PgswslDObgk1llC1PdbzeDNriLhVkPJWkKUGS0E3WuiTWaOoCJkM9GE3FZ4a0jTxerQblRVgz8fy1Hobb6z4KEqXcuD~1yFXnyDwuTLpTM5nW8FGrwb08jFB9T3QO~bEwyjT~59Y~CAVxnYbMymp20xsA__";

const PRESSURE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/469PtRvU9J2xAguWXbEx9x/sandbox/d0wJPWUtjF4KwUmZxItNyt-img-3_1771961685000_na1fn_cHJlc3N1cmUtd2FzaGluZy1sdXh1cnk.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNDY5UHRSdlU5SjJ4QWd1V1hiRXg5eC9zYW5kYm94L2Qwd0pQV1V0akY0S3dVbVp4SXROeXQtaW1nLTNfMTc3MTk2MTY4NTAwMF9uYTFmbl9jSEpsYzNOMWNtVXRkMkZ6YUdsdVp5MXNkWGgxY25rLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TYOvmMExBvxg14Scya-078s-x1VT62KKn68qGuRT9SRgNwME8uQF1aUGd8bwapjDUEQAAxmCP0OH3fOIo7IG0kH0TBEJDaalpKpdHqx8Vdsq-bMod5Vi9nwY~tqTb15roVgjBTQHZ8peO-1lOatKLENqiF1~HjIFmnrdunbRLqta~RgEUuAuBdkXOwSxWsJNHX3QUl6kq1iUhWTS3kogG5~IiHAZN42UHgP6kA1z2OOWFuLxTVaqYcfjdes3dImLrqLF4hW0m3ZyUz6PMc7ReGnbRQJ9VqHB70P3~23BfnTpTEAeOuIaHQueMtIjRKeLH2qd6iM9Kq11E3vDjgyMrQ__";

const VAN_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/469PtRvU9J2xAguWXbEx9x/sandbox/d0wJPWUtjF4KwUmZxItNyt-img-4_1771961699000_na1fn_dmFuLWVxdWlwbWVudC1oZXJv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNDY5UHRSdlU5SjJ4QWd1V1hiRXg5eC9zYW5kYm94L2Qwd0pQV1V0akY0S3dVbVp4SXROeXQtaW1nLTRfMTc3MTk2MTY5OTAwMF9uYTFmbl9kbUZ1TFdWeGRXbHdiV1Z1ZEMxb1pYSnYuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tX5BAJMZvbJkNk6DK-LEOyCtEFOGJUt4sJZCAWQQnH8wE4WknVoSTDY9C~fIEy~iOfqtpoUE8i980p7wMK0oq18~vmkjJp~LDEb2Q6A9H5NdoPMockH8f7Sy5usgsEeOF54UFr1ZkFskfZmolPxegsW6ZJHEQAKHwySd1sVOL8JhGbKRjF7iwTp~-iU6JTtdKVKfWqHBbgmBKNIWsSEWNV0mP4UJdVin1e5ZPxMF-8syNhHpGMDAVLDxx5seg-~JfFPNqqEnCi2qwZ3VHNudsVEqQrEnZmkTEKXXeAtp2NtO4fce-Fpo50Fu5PArbRqoEJfISFaccYByd75e~idJWg__";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0, 0, 0.2, 1] as const },
  }),
};

const trustItems = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Clock, label: "Available 24/7/365" },
  { icon: Award, label: "15 Years Experience" },
  { icon: Droplets, label: "Reverse Osmosis H2O" },
  { icon: Star, label: "No Minimums" },
  { icon: Zap, label: "Same-Day Service" },
];

const serviceHighlights = [
  {
    title: "Carpet & Rug Cleaning",
    desc: "High-heat extraction with reverse osmosis deionized water. MasterBlend products for the deepest clean possible.",
    icon: Sparkles,
  },
  {
    title: "Pressure Washing",
    desc: "Roofs, concrete, siding, decks, fences, brick pavers, and commercial exteriors. Sodium hypochlorite wash available.",
    icon: Droplets,
  },
  {
    title: "Vehicle Detailing",
    desc: "Porsches, Ferraris, and luxury vehicles. Reverse osmosis water, sap removal, and meticulous interior detailing.",
    icon: Star,
  },
  {
    title: "Stain & Odor Removal",
    desc: "Urine, wine, red stains, mildew — we remove what others can't. Topical treatments and DuPont Invisible Shield protection.",
    icon: Shield,
  },
  {
    title: "Commercial Services",
    desc: "Hotels, restaurants, retail, HOAs, condos, apartments, and event spaces. Downtown Carmel-By-The-Sea specialist.",
    icon: Award,
  },
  {
    title: "Specialty Cleaning",
    desc: "Mattresses, upholstery, pillows, bedframes, gutters, dumpsters, playgrounds, and outdoor workout areas.",
    icon: CheckCircle2,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Luxury mansion in Monterey County"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/95 via-[#1A1A2E]/80 to-[#1A1A2E]/40" />
        </div>

        <div className="relative container pt-32 pb-20">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="mb-6"
            >
              <span className="inline-block text-[#EFC07B] text-xs tracking-[0.4em] uppercase font-semibold border border-[#EFC07B]/30 px-4 py-2">
                Monterey County's Premier Cleaning Service
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Ultra-Prestige
              <br />
              <span className="text-[#EFC07B]">Cleaning Services</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-lg text-[#F5F0E8]/70 leading-relaxed mb-8 max-w-lg"
            >
              From $10 million estates to luxury vehicles, Tony Enea delivers
              unmatched quality with 15 years of expertise, state-of-the-art
              equipment, and reverse osmosis deionized water technology.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:831-383-0791"
                className="inline-flex items-center justify-center gap-3 bg-[#EFC07B] text-[#1A1A2E] px-8 py-4 text-base font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#F5F0E8] hover:shadow-xl hover:shadow-[#EFC07B]/20"
              >
                <Phone className="w-5 h-5" />
                Call Now: 831-383-0791
              </a>
              <Link
                href="/prices"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#EFC07B]/40 text-[#EFC07B] px-8 py-4 text-base font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#EFC07B]/10 hover:border-[#EFC07B]"
              >
                View Services & Prices
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
              className="mt-6 text-sm text-[#EFC07B]/60"
            >
              Free quick & easy estimates &mdash; Senior, military, student & teacher discounts
            </motion.p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#EFC07B] to-transparent" />
        </motion.div>
      </section>

      {/* ====== TRUST BAR ====== */}
      <section className="bg-[#16213E] py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex items-center gap-3 justify-center"
              >
                <item.icon className="w-5 h-5 text-[#EFC07B] shrink-0" />
                <span className="text-xs sm:text-sm text-[#F5F0E8]/80 tracking-wide whitespace-nowrap">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ABOUT TONY ====== */}
      <section className="bg-[#F5F0E8] py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div className="relative">
                <img
                  src={VAN_IMG}
                  alt="On-The-Spot fully equipped Mercedes-Benz Sprinter van"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#EFC07B]/30 -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <span className="text-[#0F3460] text-xs tracking-[0.3em] uppercase font-semibold">
                About the Founder
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A2E] mt-3 mb-6 leading-tight">
                Tony Enea,{" "}
                <span className="text-[#0F3460]">Master Cleaner</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#EFC07B] mb-8" />
              <p className="text-[#1A1A2E]/70 leading-relaxed mb-6">
                I start with household tap water and run it through a custom-made
                reverse osmosis tank inside my Mercedes-Benz Sprinter van. This
                results in a miracle rinse with zero contaminants in the water,
                leaving carpets perfect with soft fibers. Failure isn't an option,
                so I'm there as long as it takes.
              </p>
              <p className="text-[#1A1A2E]/70 leading-relaxed mb-6">
                I also wash cars, houses, and windows with reverse osmosis on every
                cleaning. With 15 years in business, state-of-the-art machines
                purchased in July 2025, and MasterBlend cleaning products, I bring
                everything I need — my own self-contained power, products, labor,
                and high-pressure air. Everything fits in my van, and that is just
                the tip of the iceberg.
              </p>
              <p className="text-[#1A1A2E]/70 leading-relaxed mb-8">
                I specialize in cleaning things that other cleaners can't clean. I
                provide higher quality service, 100% reliability, honesty,
                professionalism, and I never charge minimums. I work 24/7/365, rain
                or shine, and I guarantee that I show up.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0F3460]">15+</div>
                  <div className="text-xs text-[#1A1A2E]/50 mt-1 uppercase tracking-wider">
                    Years
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0F3460]">24/7</div>
                  <div className="text-xs text-[#1A1A2E]/50 mt-1 uppercase tracking-wider">
                    Availability
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0F3460]">100%</div>
                  <div className="text-xs text-[#1A1A2E]/50 mt-1 uppercase tracking-wider">
                    Guaranteed
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== SERVICES OVERVIEW ====== */}
      <section className="bg-[#1A1A2E] py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-[#EFC07B] text-xs tracking-[0.3em] uppercase font-semibold">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#F5F0E8] mt-3 mb-4">
              Premium Services
            </h2>
            <div className="w-16 h-[2px] bg-[#EFC07B] mx-auto mb-6" />
            <p className="text-[#F5F0E8]/60 max-w-2xl mx-auto">
              From luxury residences to commercial properties, we deliver
              uncompromising quality with specialized equipment and techniques.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group border border-[#EFC07B]/10 p-8 transition-all duration-500 hover:border-[#EFC07B]/40 hover:bg-[#16213E]/50"
              >
                <service.icon className="w-8 h-8 text-[#EFC07B] mb-5 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-bold text-[#F5F0E8] mb-3 font-[family-name:var(--font-display)]">
                  {service.title}
                </h3>
                <p className="text-sm text-[#F5F0E8]/50 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mt-12"
          >
            <Link
              href="/prices"
              className="inline-flex items-center gap-2 border-2 border-[#EFC07B]/40 text-[#EFC07B] px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#EFC07B] hover:text-[#1A1A2E]"
            >
              View All Services & Pricing
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====== SPLIT IMAGE SECTION ====== */}
      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[400px] lg:min-h-[600px]">
          <img
            src={CARPET_IMG}
            alt="Premium carpet cleaning service"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1A2E]/40" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-[#EFC07B] text-xs tracking-[0.3em] uppercase font-semibold">
              Interior Services
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mt-2">
              Carpet, Rug & Upholstery
            </h3>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-[600px]">
          <img
            src={PRESSURE_IMG}
            alt="Professional pressure washing service"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1A2E]/40" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-[#EFC07B] text-xs tracking-[0.3em] uppercase font-semibold">
              Exterior Services
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mt-2">
              Pressure Washing & Restoration
            </h3>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="bg-[#16213E] py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-[#EFC07B] text-xs tracking-[0.3em] uppercase font-semibold">
              The On-The-Spot Difference
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#F5F0E8] mt-3">
              Why Monterey County Trusts Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto">
            {[
              {
                title: "Reverse Osmosis Deionized Water",
                desc: "Custom-built RO system in our Mercedes-Benz Sprinter van produces zero-contaminant water for flawless results on every surface.",
              },
              {
                title: "State-of-the-Art Equipment",
                desc: "Brand new machines purchased July 2025 — low speed floor machines, RIGID Turbo dryers, high-heat extraction, and more.",
              },
              {
                title: "Self-Contained Operation",
                desc: "Our own power, water, products, labor, and high-pressure air. Everything fits in the van — no burden on your property.",
              },
              {
                title: "MasterBlend Products",
                desc: "Professional-grade cleaning solutions for the most demanding jobs. Eco-friendly options available for sensitive environments.",
              },
              {
                title: "DuPont Invisible Shield",
                desc: "Premium fabric and surface protection that repels stains and extends the life of your carpets, upholstery, and textiles.",
              },
              {
                title: "Chemical Reclaim Technology",
                desc: "Environmentally responsible cleaning with chemical reclaim processes that protect Monterey County's natural beauty.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex gap-4"
              >
                <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-[#EFC07B]/30 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#EFC07B]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F5F0E8] mb-2 font-[family-name:var(--font-display)]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#F5F0E8]/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0F3460]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F3460] via-[#1A1A2E] to-[#16213E]" />

        <div className="relative container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-[#EFC07B] text-xs tracking-[0.3em] uppercase font-semibold">
              Ready to Experience the Difference?
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#F5F0E8] mt-4 mb-6">
              Book Your Free Estimate Today
            </h2>
            <p className="text-[#F5F0E8]/60 max-w-xl mx-auto mb-10">
              Quick and easy estimates. No minimums. No obligations. Senior citizen,
              military, student, and teacher discounts available.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:831-383-0791"
                className="inline-flex items-center gap-3 bg-[#EFC07B] text-[#1A1A2E] px-10 py-5 text-lg font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#F5F0E8] hover:shadow-xl hover:shadow-[#EFC07B]/20"
              >
                <Phone className="w-6 h-6" />
                831-383-0791
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-[#EFC07B]/40 text-[#EFC07B] px-10 py-5 text-lg font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#EFC07B]/10 hover:border-[#EFC07B]"
              >
                Contact Us
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
