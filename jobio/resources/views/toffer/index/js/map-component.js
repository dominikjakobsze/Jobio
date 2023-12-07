import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

let mapBoard = null;
let markers = [];

export const bindLeafletMapToElement = async () => {
    const accessToken =
        "jJNHET49eekqSetNpABgWWUYxS144E1aJeQe7wJHNSU2HSrZFKUzueYBnCtS93nh";
    mapBoard = L.map(document.querySelector("map-board")).setView(
        [52.387078, 19.270766],
        3,
    );
    L.tileLayer(
        `https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=${accessToken}`,
        {
            attribution:
                '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib">&copy; <b>Jawg</b>Maps</a> | <a href="https://www.openstreetmap.org/copyright" title="OpenStreetMap is open data licensed under ODbL" target="_blank" class="osm-attrib">&copy; OSM contributors</a>',
            maxZoom: 22,
            minZoom: 6,
        },
    ).addTo(mapBoard);
    mapBoard.zoomControl.remove();
    L.control
        .zoom({
            position: "bottomright",
        })
        .addTo(mapBoard);
    await addMarkersToMap("");
};

export const addMarkersToMap = async (queryStringData) => {
    try {
        const response = await axios.get(
            `/endpoint/toffers?${queryStringData}`,
        );
        const result = await response.data;
        [...result["offers"]]?.map((offer) => {
            console.log(offer);
            L.marker([offer["latitude"], offer["longitude"]], {
                icon: L.icon({
                    iconUrl:
                        "https://www.jawg.io/docs/images/icons/eiffel-tower.png",
                    iconSize: [50, 50],
                }),
            }).addTo(mapBoard);
        });
    } catch (error) {
        console.log(error);
    }
};
