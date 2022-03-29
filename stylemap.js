L.mapbox.accessToken = 'pk.eyJ1IjoiY2JhcHRpZSIsImEiOiJja3p3NG1naTkxYXNqMzBwazl3dmoxejAyIn0.Pbl19lXTMNW-Qei_7auoJA';
var map = L.map('map').setView([51.0447, -114.0719], 11);

// Add tiles from the Mapbox Static Tiles API
// (https://docs.mapbox.com/api/maps/#static-tiles)
// Tiles are 512x512 pixels and are offset by 1 zoom level
L.tileLayer(
    'https://api.mapbox.com/styles/cbaptie/ckzw6nz3p00bm14qtupu5ju1y/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
