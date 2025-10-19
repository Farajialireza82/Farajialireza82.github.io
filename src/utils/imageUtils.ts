/**
 * Utility functions for handling image thumbnails and lazy loading
 */

/**
 * Generates a thumbnail path from a full image path
 * @param imagePath - The full path to the image (e.g., "/images/project/1.jpg")
 * @returns The thumbnail path (e.g., "/images/project/thumbnails/1.jpg")
 */
export function getThumbnailPath(imagePath: string): string {
  // Extract directory and filename
  const lastSlashIndex = imagePath.lastIndexOf('/');
  const directory = imagePath.substring(0, lastSlashIndex);
  const filename = imagePath.substring(lastSlashIndex + 1);
  
  // Create thumbnail path
  return `${directory}/thumbnails/${filename}`;
}

/**
 * Generates thumbnail paths for an array of images
 * @param images - Array of image paths
 * @returns Array of thumbnail paths
 */
export function getThumbnailPaths(images: string[]): string[] {
  return images.map(getThumbnailPath);
}

/**
 * Creates a lazy loading image component with thumbnail support
 * @param src - Full image source path
 * @param thumbnailSrc - Thumbnail source path
 * @param alt - Alt text for the image
 * @param className - CSS classes for the image
 * @param loading - Loading strategy ('lazy' or 'eager')
 * @returns Object with image attributes
 */
export function createLazyImage(
  src: string,
  thumbnailSrc: string,
  alt: string,
  className: string = '',
  loading: 'lazy' | 'eager' = 'lazy'
) {
  return {
    src: thumbnailSrc,
    'data-full-src': src,
    alt,
    className: `${className} lazy-image`,
    loading,
    onload: 'this.classList.add("loaded")',
    onerror: 'this.src = this.dataset.fullSrc; this.classList.add("loaded")'
  };
}

/**
 * Preloads a full-size image
 * @param src - Full image source path
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

/**
 * Replaces thumbnail with full-size image
 * @param imgElement - The image element to replace
 */
export function loadFullImage(imgElement: HTMLImageElement): void {
  const fullSrc = imgElement.dataset.fullSrc;
  if (fullSrc && imgElement.src !== fullSrc) {
    preloadImage(fullSrc)
      .then(() => {
        imgElement.src = fullSrc;
        imgElement.classList.add('loaded');
      })
      .catch(() => {
        // If preload fails, just load directly
        imgElement.src = fullSrc;
        imgElement.classList.add('loaded');
      });
  }
}
