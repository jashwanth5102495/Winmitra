import { writeFile, mkdir, readFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const rootDir = resolve(__dirname, '..');
const publicDir = resolve(rootDir, 'public');
const siteUrl = process.env.SITE_URL || 'https://www.winmitraagritech.com';

// Static routes
const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/products', changefreq: 'daily', priority: 0.9 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

// Helper to extract product IDs from products.ts
async function getProductRoutes() {
  try {
    const productsPath = resolve(rootDir, 'src/data/products.ts');
    const content = await readFile(productsPath, 'utf8');
    const matches = content.matchAll(/id:\s*'([^']+)'/g);
    const productIds = new Set();
    for (const match of matches) {
      if (match[1] && match[1] !== 'all' && match[1] !== 'liquids' && match[1] !== 'powder' && match[1] !== 'organic' && match[1] !== 'granular' && match[1] !== 'specialty' && match[1] !== 'mineral') {
        productIds.add(match[1]);
      }
    }
    return Array.from(productIds).map(id => ({
      url: `/products/${id}`,
      changefreq: 'weekly',
      priority: 0.8
    }));
  } catch (err) {
    console.warn('Could not read product IDs for sitemap:', err.message);
    return [];
  }
}

// Format date to YYYY-MM-DD
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

// Generate XML entry for single URL
function generateUrlEntry({ url, lastmod, changefreq, priority }) {
  const lastmodTag = lastmod ? `\n    <lastmod>${formatDate(new Date(lastmod))}</lastmod>` : '';
  const changefreqTag = changefreq ? `\n    <changefreq>${changefreq}</changefreq>` : '';
  const priorityTag = priority ? `\n    <priority>${priority}</priority>` : '';
    
  return `  <url>
    <loc>${siteUrl}${url}</loc>${lastmodTag}${changefreqTag}${priorityTag}
  </url>`;
}

// Generate complete sitemap XML
async function generateSitemap() {
  const now = new Date();
  const productRoutes = await getProductRoutes();
  const allRoutes = [...staticRoutes, ...productRoutes];

  const urlsXml = allRoutes.map(route => 
    generateUrlEntry({ 
      ...route, 
      lastmod: now,
      priority: route.priority
    })
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlsXml}
</urlset>`;
}

// Main execution function
async function main() {
  try {
    const sitemap = await generateSitemap();
    
    // Ensure public directory exists
    await mkdir(publicDir, { recursive: true });
    
    // Write sitemap to public/sitemap.xml and root sitemap.xml
    await writeFile(resolve(publicDir, 'sitemap.xml'), sitemap, 'utf8');
    await writeFile(resolve(rootDir, 'sitemap.xml'), sitemap, 'utf8');
    
    console.log('Sitemap generated successfully with product pages!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

main();
