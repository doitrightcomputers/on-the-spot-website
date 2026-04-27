import { useState } from "react";
import { motion } from "framer-motion";
import GalleryUpload from "@/components/GalleryUpload";
import GalleryGrid from "@/components/GalleryGrid";

const categories = [
  { id: "general", label: "All Images" },
  { id: "mansions", label: "Mansions & Estates" },
  { id: "vehicles", label: "Vehicles" },
  { id: "commercial", label: "Commercial" },
  { id: "equipment", label: "Equipment" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleUploadSuccess = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#1A1A2E] pt-32 pb-20">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <span className="text-[#EFC07B] text-xs tracking-[0.4em] uppercase font-semibold">
            Gallery Management
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#F5F0E8] mt-4 mb-6">
            Project <span className="text-[#EFC07B]">Portfolio</span>
          </h1>
          <p className="text-[#F5F0E8]/60 max-w-2xl mx-auto">
            Upload and manage photos of your cleaning projects, equipment, and before/after transformations.
          </p>
        </motion.div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <GalleryUpload
            category={selectedCategory === "general" ? "general" : selectedCategory}
            onUploadSuccess={handleUploadSuccess}
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-[#EFC07B] text-[#1A1A2E]"
                    : "bg-[#16213E] text-[#F5F0E8] hover:bg-[#0F3460]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GalleryGrid
            category={selectedCategory === "general" ? undefined : selectedCategory}
            refreshTrigger={refreshTrigger}
          />
        </motion.div>
      </div>
    </div>
  );
}
