
var map = L.map('map').fitWorld();

L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=prAnw6NTF7eaj3wF5QFK', {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
  maxZoom: 18
}).addTo(map);

map.locate({ setView: true, maxZoom: 16 });

function onLocationFound(e) {
  var radius = e.accuracy;

  L.marker(e.latlng).addTo(map)
    .bindPopup("You are within " + radius + " meters from this point").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}
map.on('locationfound', onLocationFound);

function onLocationError(e) {
  alert(e.message);
}

map.on('locationerror', onLocationError);