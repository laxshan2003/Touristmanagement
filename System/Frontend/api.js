const API_URL = "[localhost](http://localhost:5000/api/places)";

async function fetchPlaces() {
  const res = await fetch(API_URL);
  return await res.json();
}
