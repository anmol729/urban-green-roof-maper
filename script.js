// script.js

const map = L.map('map').setView([28.6139, 77.2090], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
}).addTo(map);

const greenRoofs = [
    [28.6139, 77.2090], // Roof 1
    [28.6140, 77.2100], // Roof 2
    [28.6150, 77.2110], // Roof 3
    [28.6160, 77.2120], // Roof 4
    [28.6170, 77.2130]  // Roof 5
];

greenRoofs.forEach(roof => {
    L.marker(roof).addTo(map);
});