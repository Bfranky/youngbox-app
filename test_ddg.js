const https = require('https');

const query = 'french fries unsplash';
const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

https.get(url, options, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Body length:', data.length);
    console.log('Body preview:', data.substring(0, 1000));
  });
});
