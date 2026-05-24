import urllib.request
import urllib.parse
import re
import json

keywords = {
    "Chicken Shawarma": "chicken wrap",
    "Beef Shawarma": "beef wrap",
    "Mixed Shawarma": "kebab wrap",
    "Large Chicken Shawarma": "burrito",
    "Crispy Fries": "french fries",
    "Spicy Fries": "spicy fries",
    "Coleslaw": "coleslaw",
    "Grilled Plantain": "fried plantain",
    "Egg Roll": "egg roll food",
    "Chilled Soft Drinks": "coca cola can",
    "Bottled Water": "water bottle",
    "Fresh Juice": "orange juice glass",
    "Energy Drink": "energy drink can"
}

results = {}

for name, kw in keywords.items():
    query = f"site:unsplash.com/photos {kw}"
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    )
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            # Look for patterns like unsplash.com/photos/...
            # or hrefs containing /photos/
            matches = re.findall(r'unsplash\.com/photos/([a-zA-Z0-9_-]+)', html)
            if not matches:
                # Try finding any unsplash photo URLs
                matches = re.findall(r'photo-([a-zA-Z0-9_-]+)', html)
            
            # Filter matches to valid looking IDs
            valid_matches = []
            for m in matches:
                if len(m) >= 8 and m not in valid_matches:
                    valid_matches.append(m)
            
            results[name] = valid_matches[:5]
            print(f"{name} ({kw}): {valid_matches[:3]}")
    except Exception as e:
        print(f"Error for {name}: {e}")

with open("image_ids.json", "w") as f:
    json.dump(results, f, indent=2)
