import "leaflet/dist/leaflet.css";
import L, { marker } from "leaflet";
import axios from "axios";
import { URL } from "../../../../js/app";
import { addDataToColumnsPanel } from "./columns-component";

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
            `${URL}/endpoint/toffers?${queryStringData}`,
        );
        const result = await response.data;
        [...markers]?.map((marker) => {
            mapBoard.removeLayer(marker);
        });
        [...result["offers"]]?.map((offer) => {
            markers.push(
                L.marker([offer["latitude"], offer["longitude"]], {
                    icon: L.divIcon({
                        html: `<img src="${offer["company_icon"]}" class="w-[50px] max-w-[50px] h-[50px] object-contain rounded-full" />`,
                    }),
                }).addTo(mapBoard),
            );
        });
        await addDataToColumnsPanel([...result["offers"]]);
    } catch (error) {
        console.log(error);
    }
};
