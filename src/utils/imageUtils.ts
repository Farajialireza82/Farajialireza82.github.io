/**
 * Simplified image utilities - no thumbnails needed since images are optimized
 */

/**
 * Optimized color extraction with reduced processing
 * @param img - Image element
 * @returns Promise with dominant color
 */
export function extractDominantColor(img: HTMLImageElement): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Use smaller canvas for faster processing
    canvas.width = 20;
    canvas.height = 20;
    
    const processImage = () => {
      try {
        ctx?.drawImage(img, 0, 0, 20, 20);
        const imageData = ctx?.getImageData(0, 0, 20, 20);
        if (!imageData) {
          resolve('#f3f4f6');
          return;
        }
        
        const data = imageData.data;
        let r = 0, g = 0, b = 0, count = 0;
        
        // Sample every 4th pixel for speed
        for (let i = 0; i < data.length; i += 16) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count++;
        }
        
        const avgR = Math.round(r / count);
        const avgG = Math.round(g / count);
        const avgB = Math.round(b / count);
        
        resolve(`rgb(${avgR}, ${avgG}, ${avgB})`);
      } catch (error) {
        resolve('#f3f4f6');
      }
    };
    
    if (img.complete) {
      processImage();
    } else {
      img.onload = processImage;
    }
  });
}
