import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { addGalleryImage, deleteGalleryImage, getGalleryImages } from "./db";
import { storagePut } from "./storage";
import { nanoid } from "nanoid";

export const appRouter = router({
  gallery: router({
    // Get all gallery images, optionally filtered by category
    getAll: publicProcedure
      .input(z.object({ category: z.string().optional() }).optional())
      .query(async ({ input }) => {
        return await getGalleryImages(input?.category);
      }),

    // Upload a new image to gallery
    upload: publicProcedure
      .input(
        z.object({
          title: z.string().min(1),
          description: z.string().optional(),
          category: z.string().default("general"),
          fileData: z.string(), // base64 encoded file data
          fileName: z.string(),
          mimeType: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Decode base64 to buffer
          const buffer = Buffer.from(input.fileData, "base64");

          // Generate unique file key
          const fileKey = `gallery/${input.category}/${nanoid()}-${input.fileName}`;

          // Upload to storage
          const { url } = await storagePut(fileKey, buffer, input.mimeType);

          // Save metadata to database
          const result = await addGalleryImage({
            title: input.title,
            description: input.description,
            fileUrl: url,
            fileKey,
            mimeType: input.mimeType,
            category: input.category,
            uploadedBy: 1, // TODO: Use actual user ID from context
          });

          return {
            success: true,
            url,
            fileKey,
          };
        } catch (error) {
          console.error("Upload failed:", error);
          throw new Error("Failed to upload image");
        }
      }),

    // Delete an image from gallery
    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        try {
          await deleteGalleryImage(input.id);
          return { success: true };
        } catch (error) {
          console.error("Delete failed:", error);
          throw new Error("Failed to delete image");
        }
      }),
  }),

  // Health check
  health: publicProcedure.query(() => ({
    status: "ok",
    timestamp: new Date(),
  })),
});

export type AppRouter = typeof appRouter;
