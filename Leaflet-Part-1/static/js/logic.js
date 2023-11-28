// Define the url for the GeoJSON earthquake data
var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

// Creating the map object
let myMap = L.map("map", {
  center: [20, -40],
  zoom: 3
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Use this link to get the GeoJSON data.
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// The function that will determine the colour of a neighbourhood based on the depth that it belongs to


// Getting our GeoJSON data
d3.json(link).then(function (data) {
  // Creating a GeoJSON layer with the retrieved data

  L.geoJSON(data, {
    style: function (feature) {
      let depth = feature.geometry.coordinates[2];
      let mag = feature.properties.mag;

      return {
        color: 'black',
        weight: 1,
        fillOpacity: .9,
        radius: mag * 3,
        fillColor:
          depth < 10 ? '#e16b5c' :
            depth < 30 ? '#ca485c' :
              depth < 50 ? '#ac255e' :
                depth < 70 ? '#5b1060' :
                  depth < 90 ? '#00003C' : '#ffb56b',                  
      };
    },

    pointToLayer: function (geoJsonPoint, latlng) {
      return L.circleMarker(latlng);
    }


  }).bindPopup(function ({ feature: { properties: { place, mag, time } } }) {

    return `<h3>${place}<br>${new Date(time).toLocaleString()}<br>Magnitude: ${mag} </h3>`;

  }).addTo(myMap);
});

// Add legend
var legend = L.control({ position: "bottomright" });

legend.onAdd = function () {

  var div = L.DomUtil.create("div", "info legend");

  div.innerHTML = "<h3 style='text-align: center'>Depth</h3>"
  div.innerHTML +=
    `
        <i style="background: #e16b5c;width:100%;color:white"> -10 - 10</i><br>
        <i style="background: #ca485c;width:100%;color:white">  10 - 30</i><br>
        <i style="background: #ac255e;width:100%;color:white">  30 - 50</i><br>
        <i style="background: #5b1060;width:100%;color:white">  50 - 70</i><br>
        <i style="background: #1f005c;width:100%;color:white">  70 - 90</i><br>
        <i style="background: #ffb56b;width:100%;color:white">  90+</i>
      `;

  return div;
}

legend.addTo(myMap)
  ;



