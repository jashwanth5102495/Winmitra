import { get } from 'https';

// Configuration
const SITE_URL = process.env.SITE_URL || 'https://www.winmitraagritech.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

// Function to ping search engines
async function submitSitemap() {
  const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  
  return new Promise((resolve, reject) => {
    get(googlePingUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('Successfully submitted sitemap to Google!');
          resolve();
        } else {
          console.log('Google response:', data || `Status Code: ${res.statusCode}`);
          resolve();
        }
      });
    }).on('error', (e) => {
      console.error('Error submitting to Google:', e.message);
      reject(e);
    });
  });
}

// Main function
async function main() {
  console.log('\n========================================================');
  console.log(' WINMITRA AGRI TECH - Search Engine Submission Helper');
  console.log('========================================================');
  console.log(`Site URL: ${SITE_URL}`);
  console.log(`Sitemap: ${SITEMAP_URL}\n`);
  console.log('To ensure maximum search visibility on Google:');
  console.log('1. Build your website: npm run build');
  console.log('2. Log into Google Search Console: https://search.google.com/search-console');
  console.log('3. Select your property: www.winmitraagritech.com');
  console.log('4. Go to Sitemaps -> Submit "sitemap.xml"\n');

  // Automatically submit sitemap if run with --ping flag
  if (process.argv.includes('--ping')) {
    console.log('Pinging Google with updated sitemap...');
    await submitSitemap();
  }
}

main().catch(console.error);
