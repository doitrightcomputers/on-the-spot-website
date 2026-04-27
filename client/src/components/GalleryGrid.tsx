import { useState, useEffect } from "react";
import { Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface GalleryImage {
  id: number;
  title: string;
  description?: string;
  fileUrl: string;
  category: string;
  createdAt: string;
}

interface GalleryGridProps {
  category?: string;
  refreshTrigger?: number;
}

export default function GalleryGrid({ category, refreshTrigger = 0 }: GalleryGridProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, [category, refreshTrigger]);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const query = category ? `?category=${category}` : "";
      const response = await fetch(`/api/gallery/all${query}`);
      if (!response.ok) throw new Error("Failed to fetch images");
      const data = await response.json();
      setImages(data);
    } catch (error) {
      toast.error("Failed to load gallery images");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const response = await fetch(`/api/gallery/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error("Failed to delete image");

      setImages(images.filter((img) => img.id !== id));
      toast.success("Image deleted successfully");
    } catch (error) {
      toast.error("Failed to delete image");
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 text-[#EFC07B] animate-spin" />
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#1A1A2E]/60">No images in this gallery yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <div key={image.id} className="group relative overflow-hidden rounded-lg bg-[#F5F0E8]">
          <img
            src={image.fileUrl}
            alt={image.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h4 className="text-white font-semibold mb-1">{image.title}</h4>
            {image.description && (
              <p className="text-[#F5F0E8]/80 text-sm mb-3">{image.description}</p>
            )}
            <button
              onClick={() => handleDelete(image.id)}
              className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
