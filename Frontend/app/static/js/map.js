mapboxgl.accessToken =
  "pk.eyJ1IjoiZnJhbmNlc2NvZGVtYSIsImEiOiJjbGd4aHpxMXMwMjVkM2VuMG1obDRsMGhlIn0.kDxNMVWDAhSc13S3liXHFg";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [0, 30],
  zoom: 1,
});

map.on("load", function () {
  map.addSource("migration", {
    type: "geojson",
    data: "migration.geojson",
  });

  map.addLayer({
    id: "migration",
    type: "line",
    source: "migration",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#888",
      "line-width": 2,
    },
  });
});
