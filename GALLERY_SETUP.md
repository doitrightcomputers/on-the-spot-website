# Gallery & File Storage Setup Guide

## Overview

Your On-The-Spot website now includes a complete file storage and gallery management system. This allows you to upload, organize, and display photos of your cleaning projects, equipment, and before/after transformations.

## Features

- **Image Upload**: Drag-and-drop or click-to-select image uploads
- **Gallery Organization**: Categorize images (Mansions, Vehicles, Commercial, Equipment, General)
- **S3 Storage**: All images are stored securely in cloud storage
- **Database Tracking**: Image metadata is stored in your database
- **Responsive Gallery**: Beautiful grid display that works on all devices
- **Admin Management**: Delete images directly from the gallery

## Getting Started

### 1. Initialize the Database

Before using the gallery, you need to create the database tables:

```bash
pnpm db:push
```

This command will:
- Generate database migrations from your schema
- Create the `gallery` and `users` tables
- Set up all necessary indexes and relationships

### 2. Access the Gallery

Once deployed, navigate to `/gallery` in your website to access the gallery management page.

## File Structure

### Backend Files

- **`drizzle/schema.ts`** — Database schema defining the `gallery` and `users` tables
- **`server/db.ts`** — Database helper functions for gallery operations
- **`server/storage.ts`** — S3 storage integration for file uploads
- **`server/routers.ts`** — tRPC API endpoints for gallery operations
- **`server/trpc.ts`** — tRPC configuration

### Frontend Files

- **`client/src/pages/Gallery.tsx`** — Main gallery management page
- **`client/src/components/GalleryUpload.tsx`** — Image upload component
- **`client/src/components/GalleryGrid.tsx`** — Gallery display component

### Testing

- **`server/gallery.test.ts`** — Unit tests for gallery functionality
- **`vitest.config.ts`** — Vitest configuration

## Database Schema

### Gallery Table

```sql
CREATE TABLE gallery (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  fileUrl TEXT NOT NULL,
  fileKey TEXT NOT NULL,
  mimeType VARCHAR(100),
  category VARCHAR(100) DEFAULT 'general',
  uploadedBy INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## API Endpoints

The gallery system uses tRPC for type-safe API calls:

### Get All Images

```typescript
const images = await trpc.gallery.getAll.query({ category: "mansions" });
```

### Upload Image

```typescript
const result = await trpc.gallery.upload.mutate({
  title: "Luxury Mansion Cleaning",
  description: "Before and after transformation",
  category: "mansions",
  fileData: base64EncodedImage,
  fileName: "mansion-clean.jpg",
  mimeType: "image/jpeg",
});
```

### Delete Image

```typescript
await trpc.gallery.delete.mutate({ id: imageId });
```

## Categories

The gallery supports the following categories:

- **general** — General images
- **mansions** — Mansion and estate photos
- **vehicles** — Vehicle cleaning photos
- **commercial** — Commercial project photos
- **equipment** — Equipment and van photos

## Storage Configuration

Images are stored using the Manus built-in storage proxy. The following environment variables are automatically configured:

- `BUILT_IN_FORGE_API_URL` — Storage API endpoint
- `BUILT_IN_FORGE_API_KEY` — Storage API authentication key

These are injected by the platform and require no manual configuration.

## Upload Process

1. User selects an image file via drag-and-drop or file picker
2. Frontend converts image to base64 and sends to backend
3. Backend uploads image to S3 storage
4. Backend saves image metadata to database
5. Frontend displays success message and refreshes gallery

## Best Practices

### Image Optimization

For best performance, optimize images before uploading:

- **Size**: Keep images under 5MB
- **Format**: Use JPEG for photos, PNG for graphics
- **Dimensions**: Recommended 1920x1280 or larger for high quality

### Naming Conventions

Use descriptive titles for images:

- ✅ "Luxury Mansion Exterior Cleaning - Before & After"
- ❌ "IMG_12345"

### Categories

Organize images by category for easy browsing:

- Use "mansions" for $10M+ estate photos
- Use "vehicles" for Porsche, Ferrari, and luxury car photos
- Use "commercial" for hotel, restaurant, and retail projects
- Use "equipment" for van and equipment photos

## Testing

Run the test suite to verify gallery functionality:

```bash
pnpm test
```

All tests should pass. Tests include:

- Database function mocking
- Upload validation
- Category filtering
- Image deletion

## Troubleshooting

### Images Not Uploading

1. Check browser console for errors
2. Verify `BUILT_IN_FORGE_API_KEY` and `BUILT_IN_FORGE_API_URL` are set
3. Ensure image file is under 5MB
4. Check that database tables exist (`pnpm db:push`)

### Gallery Page Not Loading

1. Verify `/gallery` route is registered in `App.tsx`
2. Check that all components are imported correctly
3. Verify database connection is working

### Images Not Displaying

1. Check that image URLs are accessible
2. Verify S3 storage is properly configured
3. Check browser network tab for failed requests

## Next Steps

1. **Deploy to Production**: Push your changes and deploy via the Management UI
2. **Upload Photos**: Start uploading photos of your projects
3. **Share Gallery**: Share the gallery link with potential clients
4. **Customize**: Modify categories or styling as needed

## Support

For issues or questions, refer to the main README or contact support.
