import axios from "axios";
import { URL } from "../../../../js/app";
import L, { marker } from "leaflet";

const accessToken =
    "jJNHET49eekqSetNpABgWWUYxS144E1aJeQe7wJHNSU2HSrZFKUzueYBnCtS93nh";

const mapLeaflet = L.map(document.querySelector("[data-map]")).setView(
    [52.18066872927717, 19.039306640625004],
    1
);

const markers = [];

export const initMap = async () => {
    L.tileLayer(
        `https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=${accessToken}`,
        {
            attribution:
                '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib">&copy; <b>Jawg</b>Maps</a> | <a href="https://www.openstreetmap.org/copyright" title="OpenStreetMap is open data licensed under ODbL" target="_blank" class="osm-attrib">&copy; OSM contributors</a>',
            maxZoom: 20,
            minZoom: 7,
        }
    ).addTo(mapLeaflet);
    mapLeaflet.zoomControl.remove();
    L.control
        .zoom({
            position: "bottomright",
        })
        .addTo(mapLeaflet);
};

export const renderMarkers = async (url) => {
    //console.log(url);
    try {
        const response = await axios.get(url);
        const data = await response.data;
        //console.log(data);
        markers.map((marker) => {
            mapLeaflet.removeLayer(marker);
        });
        [...data["offers"]].map((offer) => {
            markers.push(
                L.marker([offer["longitude"], offer["latitude"]], {
                    icon: L.divIcon({
                        // iconUrl: `${URL}/endpoint/image/icons-job.png`,
                        // iconUrl: `${offer["company_icon"]}`,
                        html: `<img class="w-[50px] h-[50px] object-contain rounded-full overflow-hidden" src="${offer["company_icon"]}"/>`,
                        iconSize: [0, 0],
                        iconAnchor: [0, 0],
                    }),
                    options: {
                        offerId: offer["id"],
                    },
                })
                    .addEventListener("click", (e) => {
                        console.log(e);
                    })
                    .addTo(mapLeaflet)
            );
        });
        //console.log(`${URL}/endpoint/image/icons-job.png`);
    } catch (error) {
        console.log(error);
    }
};
