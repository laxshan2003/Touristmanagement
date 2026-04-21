async function loadPlaces() {
  const places = await fetchPlaces();
  const container = document.getElementById("places-container");
  container.innerHTML = places.map(p => `
    <div class="card">
      <h3>${p.name}</h3>
      <p>${p.description || "No description available."}</p>
      <p><strong>Distance:</strong> ${p.distance}</p>
    </div>
  `).join("");
}
loadPlaces();
