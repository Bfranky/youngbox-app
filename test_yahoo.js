const https = require('https');

const query = 'site:unsplash.com/photos chicken wrap';
const url = `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`;
const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

https.get(url, options, (res) => {
  console.log('Status Code:', res.statusCode);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const regex = /unsplash\.com\/photos\/([a-zA-Z0-9_-]+)/g;
    let match;
    const matches = [];
    while ((match = regex.exec(data)) !== null) {
      if (match[1] && match[1].length >= 6 && !matches.includes(match[1])) {
        matches.push(match[1]);
      }
    }
    console.log('Yahoo matches:', matches.slice(0, 10));
  });
});
