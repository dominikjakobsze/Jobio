import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { URL } from "../../../js/app";
const accessToken =
    "jJNHET49eekqSetNpABgWWUYxS144E1aJeQe7wJHNSU2HSrZFKUzueYBnCtS93nh";
const map = L.map(document.querySelector("[data-map]")).setView(
    [48.7965913, 2.3210938],
    3
);
L.tileLayer(
    `https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=${accessToken}`,
    {
        attribution:
            '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib">&copy; <b>Jawg</b>Maps</a> | <a href="https://www.openstreetmap.org/copyright" title="OpenStreetMap is open data licensed under ODbL" target="_blank" class="osm-attrib">&copy; OSM contributors</a>',
        maxZoom: 22,
    }
).addTo(map);

map.on('click', function(e) {
    console.log(e,URL);
    var marker = L.marker(e.latlng).addTo(map);
});
