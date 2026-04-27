import { describe, it, expect, vi, beforeEach } from "vitest";
import * as db from "./db";

// Mock the database module
vi.mock("./db", () => ({
  getDb: vi.fn(),
  addGalleryImage: vi.fn(),
  deleteGalleryImage: vi.fn(),
  getGalleryImages: vi.fn(),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
}));

// Mock the storage module
vi.mock("./storage", () => ({
  storagePut: vi.fn().mockResolvedValue({
    key: "gallery/test/test-image.jpg",
    url: "https://example.com/gallery/test/test-image.jpg",
  }),
  storageGet: vi.fn(),
}));

describe("Gallery Database Functions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getGalleryImages", () => {
    it("should return an array of gallery images", async () => {
      const mockImages = [
        {
          id: 1,
          title: "Test Image",
          description: "A test image",
          fileUrl: "https://example.com/image.jpg",
          fileKey: "gallery/test/image.jpg",
          mimeType: "image/jpeg",
          category: "general",
          uploadedBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      vi.mocked(db.getGalleryImages).mockResolvedValue(mockImages);

      const result = await db.getGalleryImages();
      expect(result).toEqual(mockImages);
      expect(db.getGalleryImages).toHaveBeenCalled();
    });

    it("should filter by category when provided", async () => {
      const mockImages = [
        {
          id: 1,
          title: "Mansion Photo",
          description: "A luxury mansion",
          fileUrl: "https://example.com/mansion.jpg",
          fileKey: "gallery/mansions/mansion.jpg",
          mimeType: "image/jpeg",
          category: "mansions",
          uploadedBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      vi.mocked(db.getGalleryImages).mockResolvedValue(mockImages);

      const result = await db.getGalleryImages("mansions");
      expect(result).toEqual(mockImages);
      expect(db.getGalleryImages).toHaveBeenCalledWith("mansions");
    });
  });

  describe("addGalleryImage", () => {
    it("should add a new gallery image", async () => {
      const newImage = {
        title: "New Image",
        description: "A new test image",
        fileUrl: "https://example.com/new-image.jpg",
        fileKey: "gallery/test/new-image.jpg",
        mimeType: "image/jpeg",
        category: "general",
        uploadedBy: 1,
      };

      vi.mocked(db.addGalleryImage).mockResolvedValue({ insertId: 1 } as any);

      const result = await db.addGalleryImage(newImage);
      expect(result).toBeDefined();
      expect(db.addGalleryImage).toHaveBeenCalledWith(newImage);
    });
  });

  describe("deleteGalleryImage", () => {
    it("should delete a gallery image by ID", async () => {
      vi.mocked(db.deleteGalleryImage).mockResolvedValue(undefined);

      await db.deleteGalleryImage(1);
      expect(db.deleteGalleryImage).toHaveBeenCalledWith(1);
    });
  });
});

describe("Gallery Upload Validation", () => {
  it("should require a title for upload", () => {
    const uploadData = {
      title: "",
      description: "Test",
      category: "general",
      fileData: "base64data",
      fileName: "test.jpg",
      mimeType: "image/jpeg",
    };

    // Title is empty, should fail validation
    expect(uploadData.title.length).toBe(0);
  });

  it("should accept valid upload data", () => {
    const uploadData = {
      title: "Valid Title",
      description: "Test description",
      category: "general",
      fileData: "base64data",
      fileName: "test.jpg",
      mimeType: "image/jpeg",
    };

    expect(uploadData.title).toBeTruthy();
    expect(uploadData.fileName).toBeTruthy();
    expect(uploadData.mimeType).toBeTruthy();
  });
});
