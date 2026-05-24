const https = require('https');
const fs = require('fs');

const keywords = {
  "Chicken Shawarma": "chicken wrap",
  "Beef Shawarma": "beef wrap",
  "Mixed Shawarma": "kebab wrap",
  "Large Chicken Shawarma": "burrito",
  "Crispy Fries": "french fries",
  "Spicy Fries": "spicy fries",
  "Coleslaw": "coleslaw salad",
  "Grilled Plantain": "fried plantain",
  "Egg Roll": "egg roll food",
  "Chilled Soft Drinks": "coca cola can",
  "Bottled Water": "water bottle",
  "Fresh Juice": "orange juice glass",
  "Energy Drink": "energy drink can"
};

const results = {};

function search(name, query) {
  return new Promise((resolve) => {
    const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent('site:unsplash.com/photos ' + query)}`;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        // Regex to find unsplash.com/photos/XYZ
        const regex = /unsplash\.com\/photos\/([a-zA-Z0-9_-]+)/g;
        let match;
        const matches = [];
        while ((match = regex.exec(data)) !== null) {
          if (match[1] && match[1].length >= 6 && !matches.includes(match[1])) {
            matches.push(match[1]);
          }
        }
        console.log(`${name} matches:`, matches.slice(0, 3));
        resolve(matches);
      });
    }).on('error', (e) => {
      console.error(`Error searching for ${name}:`, e.message);
      resolve([]);
    });
  });
}

async function run() {
  for (const [name, query] of Object.entries(keywords)) {
    results[name] = await search(name, query);
    // Be nice to DDG
    await new Promise(r => setTimeout(r, 1000));
  }
  fs.writeFileSync('image_ids.json', JSON.stringify(results, null, 2));
  console.log('Finished finding image IDs.');
}

run();
