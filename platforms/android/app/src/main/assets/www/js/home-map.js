
var ratIcon = L.icon({
  iconUrl: 'http://andywoodruff.com/maptime-leaflet/rat.png',
  iconSize: [60, 50]
});

var map = L.map('map').setView([7.893542840690553, 98.35242033004761], 11);
L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=prAnw6NTF7eaj3wF5QFK', {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',

}).addTo(map);
map.locate({ setView: true }, 9);



var pushpage = '<a id="push-button" onclick="pushPage()"> Click </a>';

var ratIcon = L.icon({
  iconUrl: 'img/boy-icon.png',

  iconSize: [50, 40],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});


firestore.collection("Technicians").get().then(function (querySnapshot) {
  querySnapshot.forEach(function (doc) {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());

    console.log("lat :" + doc.data().latitude, "long : " + doc.data().longitude);
    
    L.marker([doc.data().latitude, doc.data().longitude,11], { icon: ratIcon }).addTo(map).bindPopup(
      " ชื่อร้าน : " + doc.data().namestore + ";" + '<a id="push-button" onclick="pushPage(' + "'" + doc.data().namestore + "'" + ')">' + "Click" + '</a>').openPopup();
  });
});


function onLocationFound(e) {

  L.marker(e.latlng,8).addTo(map)
    .bindPopup("You are here! ").openPopup();


} map.on('locationfound', onLocationFound);

function onLocationError(e) {
  alert(e.message);
} 
map.on('locationerror', onLocationError);

