#!/usr/bin/env node

/**
 * Image optimization script for portfolio site
 * This script will help optimize your images for better performance
 */

import fs from 'fs';
import path from 'path';

console.log('🖼️  Image Optimization Guide for Portfolio Site');
console.log('================================================\n');

console.log('📊 Current Image Analysis:');
console.log('-------------------------');

const imageDirs = [
  'public/images/boxtimer',
  'public/images/flex', 
  'public/images/novaday',
  'public/images/travelo',
  'public/images/recommendations'
];

imageDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`\n📁 ${dir}:`);
    const files = fs.readdirSync(dir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(1);
      
      if (sizeKB > 1000) {
        console.log(`  ⚠️  ${file}: ${sizeMB}MB (TOO LARGE!)`);
      } else {
        console.log(`  ✅ ${file}: ${sizeKB}KB`);
      }
    });
  }
});

console.log('\n🚀 Optimization Recommendations:');
console.log('================================');

console.log('\n1. COMPRESS ORIGINAL IMAGES:');
console.log('   - Use tools like TinyPNG, ImageOptim, or Squoosh');
console.log('   - Target: < 500KB per image');
console.log('   - Convert PNGs to WebP when possible');

console.log('\n2. OPTIMIZE THUMBNAILS:');
console.log('   - Resize to max 600px width');
console.log('   - Target: < 100KB per thumbnail');
console.log('   - Use WebP format for better compression');

console.log('\n3. RECOMMENDED TOOLS:');
console.log('   - Online: https://squoosh.app/');
console.log('   - CLI: npm install -g imagemin-cli');
console.log('   - Mac: ImageOptim (free)');
console.log('   - Windows: RIOT (free)');

console.log('\n4. QUICK FIX COMMANDS:');
console.log('   # Install imagemin CLI globally');
console.log('   npm install -g imagemin-cli imagemin-webp imagemin-mozjpeg imagemin-pngquant');
console.log('');
console.log('   # Optimize all images (run from project root)');
console.log('   imagemin public/images/**/*.{jpg,jpeg,png} --out-dir=public/images-optimized --plugin=webp');
console.log('   imagemin public/images/**/*.{jpg,jpeg} --out-dir=public/images-optimized --plugin=mozjpeg');
console.log('   imagemin public/images/**/*.png --out-dir=public/images-optimized --plugin=pngquant');

console.log('\n5. EXPECTED RESULTS:');
console.log('   - 80-90% reduction in file sizes');
console.log('   - 3-5x faster page load times');
console.log('   - Better user experience on mobile');

console.log('\n💡 Pro Tip:');
console.log('After optimizing, replace your current images with the optimized versions!');
console.log('Your site will load much faster. 🚀\n');
