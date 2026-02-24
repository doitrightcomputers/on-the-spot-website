/*
 * DESIGN: Midnight Opulence — Dark luxury editorial
 * Contact Page: Contact form, business info, service area, hours
 * Colors: #1A1A2E, #16213E, #0F3460, #EFC07B, #F5F0E8
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Shield, Award, Send } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0, 0, 0.2, 1] as const },
  }),
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "831-383-0791",
    href: "tel:831-383-0791",
    desc: "Call Tony directly — available 24/7/365",
  },
  {
    icon: Mail,
    label: "Email",
    value: "onthespot831@gmail.com",
    href: "mailto:onthespot831@gmail.com",
    desc: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Monterey County, CA",
    href: null,
    desc: "Carmel-By-The-Sea, Monterey, Pacific Grove, Pebble Beach & surrounding areas",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "24/7/365",
    href: null,
    desc: "Rain or shine — we guarantee we show up",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry! Tony will contact you shortly.", {
      description: "For immediate service, call 831-383-0791",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

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
              Get In Touch
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#F5F0E8] mt-3 mb-6 leading-tight">
              Contact <span className="text-[#EFC07B]">Us</span>
            </h1>
            <div className="w-16 h-[2px] bg-[#EFC07B] mb-6" />
            <p className="text-[#F5F0E8]/60 text-lg leading-relaxed">
              Ready for a free estimate? Have questions about our services? Reach out
              to Tony directly. We respond quickly and are available around the clock.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====== CONTACT CARDS ====== */}
      <section className="bg-[#16213E] py-12">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="border border-[#EFC07B]/10 p-6 text-center hover:border-[#EFC07B]/30 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-[#EFC07B] mx-auto mb-3" />
                <h3 className="text-xs tracking-[0.2em] uppercase text-[#EFC07B] mb-2 font-semibold">
                  {item.label}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-lg font-bold text-[#F5F0E8] hover:text-[#EFC07B] transition-colors block mb-2 font-[family-name:var(--font-display)]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg font-bold text-[#F5F0E8] mb-2 font-[family-name:var(--font-display)]">
                    {item.value}
                  </p>
                )}
                <p className="text-xs text-[#F5F0E8]/40">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CONTACT FORM + INFO ====== */}
      <section className="bg-[#F5F0E8] py-24">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E] mb-2">
                Request a Free Estimate
              </h2>
              <p className="text-sm text-[#1A1A2E]/50 mb-8">
                Fill out the form below and Tony will get back to you promptly. For
                immediate service, call{" "}
                <a href="tel:831-383-0791" className="text-[#0F3460] font-semibold hover:underline">
                  831-383-0791
                </a>
                .
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#1A1A2E]/60 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-white border border-[#1A1A2E]/10 text-[#1A1A2E] placeholder:text-[#1A1A2E]/30 focus:border-[#EFC07B] focus:ring-1 focus:ring-[#EFC07B] outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#1A1A2E]/60 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="(831) 000-0000"
                      className="w-full px-4 py-3 bg-white border border-[#1A1A2E]/10 text-[#1A1A2E] placeholder:text-[#1A1A2E]/30 focus:border-[#EFC07B] focus:ring-1 focus:ring-[#EFC07B] outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#1A1A2E]/60 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white border border-[#1A1A2E]/10 text-[#1A1A2E] placeholder:text-[#1A1A2E]/30 focus:border-[#EFC07B] focus:ring-1 focus:ring-[#EFC07B] outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#1A1A2E]/60 font-semibold mb-2">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-[#1A1A2E]/10 text-[#1A1A2E] focus:border-[#EFC07B] focus:ring-1 focus:ring-[#EFC07B] outline-none transition-all text-sm"
                  >
                    <option value="">Select a service...</option>
                    <option value="carpet">Carpet & Rug Cleaning</option>
                    <option value="pressure">Pressure Washing</option>
                    <option value="vehicle">Vehicle Detailing</option>
                    <option value="stain">Stain & Odor Removal</option>
                    <option value="upholstery">Upholstery Cleaning</option>
                    <option value="commercial">Commercial Services</option>
                    <option value="tile">Tile & Grout Cleaning</option>
                    <option value="chemical">Chemical Wash</option>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#1A1A2E]/60 font-semibold mb-2">
                    Message / Details
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your cleaning needs, property type, approximate square footage, or any special requirements..."
                    className="w-full px-4 py-3 bg-white border border-[#1A1A2E]/10 text-[#1A1A2E] placeholder:text-[#1A1A2E]/30 focus:border-[#EFC07B] focus:ring-1 focus:ring-[#EFC07B] outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-[#1A1A2E] text-[#EFC07B] px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#0F3460] hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Send Request
                </button>
              </form>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="lg:col-span-2"
            >
              <div className="bg-[#1A1A2E] p-8 mb-8">
                <h3 className="text-lg font-bold text-[#EFC07B] mb-6 font-[family-name:var(--font-display)]">
                  Business Information
                </h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-[#F5F0E8]/40 mb-1">
                      Company Name
                    </p>
                    <p className="text-[#F5F0E8] font-medium">On-The-Spot Company</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-[#F5F0E8]/40 mb-1">
                      Owner / Operator
                    </p>
                    <p className="text-[#F5F0E8] font-medium">Tony Enea</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-[#F5F0E8]/40 mb-1">
                      Phone
                    </p>
                    <a href="tel:831-383-0791" className="text-[#EFC07B] font-medium hover:underline">
                      831-383-0791
                    </a>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-[#F5F0E8]/40 mb-1">
                      Email
                    </p>
                    <a href="mailto:onthespot831@gmail.com" className="text-[#EFC07B] font-medium hover:underline text-sm">
                      onthespot831@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-[#F5F0E8]/40 mb-1">
                      Service Area
                    </p>
                    <p className="text-[#F5F0E8] font-medium text-sm">
                      Carmel-By-The-Sea, Monterey, Pacific Grove, Pebble Beach, Seaside, Marina, Salinas & surrounding areas
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-[#F5F0E8]/40 mb-1">
                      Hours
                    </p>
                    <p className="text-[#F5F0E8] font-medium">24/7/365 — Rain or Shine</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-[#F5F0E8]/40 mb-1">
                      License & Insurance
                    </p>
                    <p className="text-[#F5F0E8] font-medium">Fully Licensed & Insured</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-[#16213E] p-8">
                <h3 className="text-lg font-bold text-[#EFC07B] mb-6 font-[family-name:var(--font-display)]">
                  Why Choose On-The-Spot
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: "Licensed & Insured" },
                    { icon: Clock, text: "Available 24/7/365" },
                    { icon: Award, text: "15+ Years Experience" },
                    { icon: Shield, text: "Free Estimates, No Minimums" },
                    { icon: Award, text: "Senior & Military Discounts" },
                    { icon: Clock, text: "Same-Day Service Available" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <item.icon className="w-4 h-4 text-[#EFC07B] shrink-0" />
                      <span className="text-sm text-[#F5F0E8]/70">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== MAP PLACEHOLDER ====== */}
      <section className="bg-[#1A1A2E] py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <span className="text-[#EFC07B] text-xs tracking-[0.3em] uppercase font-semibold">
              Our Service Area
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#F5F0E8] mt-3">
              Serving Monterey County
            </h2>
          </motion.div>

          <div className="bg-[#16213E] border border-[#EFC07B]/10 p-12 text-center">
            <MapPin className="w-12 h-12 text-[#EFC07B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#F5F0E8] mb-3 font-[family-name:var(--font-display)]">
              Carmel-By-The-Sea & Greater Monterey County
            </h3>
            <p className="text-sm text-[#F5F0E8]/50 max-w-lg mx-auto mb-6">
              We serve Carmel-By-The-Sea, Monterey, Pacific Grove, Pebble Beach,
              Seaside, Marina, Salinas, and all surrounding communities. From luxury
              estates to commercial properties, we're your local cleaning experts.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Carmel-By-The-Sea",
                "Monterey",
                "Pacific Grove",
                "Pebble Beach",
                "Seaside",
                "Marina",
                "Salinas",
              ].map((area) => (
                <span
                  key={area}
                  className="text-xs tracking-wider uppercase border border-[#EFC07B]/20 text-[#EFC07B]/60 px-4 py-2"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-[#F5F0E8]/60 max-w-lg mx-auto mb-8">
              The fastest way to get your free estimate is to call Tony directly.
            </p>
            <a
              href="tel:831-383-0791"
              className="inline-flex items-center gap-3 bg-[#EFC07B] text-[#1A1A2E] px-10 py-5 text-lg font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#F5F0E8] hover:shadow-xl hover:shadow-[#EFC07B]/20"
            >
              <Phone className="w-6 h-6" />
              Call Now: 831-383-0791
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
