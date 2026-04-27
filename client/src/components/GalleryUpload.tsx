import { useState, useRef } from "react";
import { Upload, X, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface GalleryUploadProps {
  category?: string;
  onUploadSuccess?: () => void;
}

export default function GalleryUpload({ category = "general", onUploadSuccess }: GalleryUploadProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    setSelectedFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !title) {
      toast.error("Please select a file and enter a title");
      return;
    }

    setIsLoading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Data = (e.target?.result as string).split(",")[1];

        const response = await fetch("/api/gallery/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description,
            category,
            fileData: base64Data,
            fileName: selectedFile.name,
            mimeType: selectedFile.type,
          }),
        });

        if (!response.ok) {
          throw new Error("Upload failed");
        }

        toast.success("Image uploaded successfully!");
        setSelectedFile(null);
        setTitle("");
        setDescription("");
        onUploadSuccess?.();
      };
      reader.readAsDataURL(selectedFile);
    } catch (error) {
      toast.error("Failed to upload image");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg border-2 border-[#EFC07B]/20">
      <h3 className="text-lg font-bold text-[#1A1A2E] mb-4">Upload Image</h3>

      {!selectedFile ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragging
              ? "border-[#EFC07B] bg-[#EFC07B]/5"
              : "border-[#EFC07B]/30 hover:border-[#EFC07B]/50"
          }`}
        >
          <Upload className="w-8 h-8 text-[#EFC07B] mx-auto mb-2" />
          <p className="text-sm text-[#1A1A2E]/60">
            Drag and drop your image here or click to select
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
            className="hidden"
          />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-[#EFC07B]/10 rounded">
            <span className="text-sm text-[#1A1A2E]">{selectedFile.name}</span>
            <button
              onClick={() => setSelectedFile(null)}
              className="text-[#1A1A2E]/50 hover:text-[#1A1A2E]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <input
            type="text"
            placeholder="Image title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-[#EFC07B]/20 rounded text-sm focus:outline-none focus:border-[#EFC07B]"
          />

          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-[#EFC07B]/20 rounded text-sm focus:outline-none focus:border-[#EFC07B]"
            rows={3}
          />

          <button
            onClick={handleUpload}
            disabled={isLoading}
            className="w-full bg-[#EFC07B] text-[#1A1A2E] py-2 rounded font-semibold hover:bg-[#F5F0E8] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            {isLoading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
      )}
    </div>
  );
}
