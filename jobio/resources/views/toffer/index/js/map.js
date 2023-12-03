import axios from "axios";
import { URL } from "../../../../js/app";
import L from "leaflet";

const accessToken =
    "jJNHET49eekqSetNpABgWWUYxS144E1aJeQe7wJHNSU2HSrZFKUzueYBnCtS93nh";

const mapLeaflet = L.map(document.querySelector("[data-map]")).setView(
    [52.18066872927717, 19.039306640625004],
    1
);

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
    console.log(url);
    try {
        const response = await axios.get(url);
        const data = await response.data;
        [...data["offers"]].map((offer) => {
            L.marker([offer["longitude"], offer["latitude"]], {
                icon: L.icon({
                    iconUrl: `${URL}/endpoint/image/icons-job.png`,
                    iconSize: [50, 50],
                }),
                offerId: offer["id"],
            })
                .addEventListener("click", (e) => {
                    console.log(e);
                })
                .addTo(mapLeaflet);
        });
        console.log(`${URL}/endpoint/image/icons-job.png`);
    } catch (error) {
        console.log(error);
    }
};
// {
//     "id": "9ac079df-1fba-4104-bec5-304c2a4ea465",
//     "min_salary": 13446,
//     "max_salary": 14100,
//     "title": "Illum voluptatem natus dolores consequatur.",
//     "page_offer": "\"fsd\"",
//     "longitude": 50.593794,
//     "latitude": 22.466301,
//     "city": "Gmina Janów Lubelski",
//     "street": "Kiszki 2",
//     "zip_code": "23-300",
//     "voivodeship": "lubelskie",
//     "temployer_id": "9ac07985-0c79-4b1e-ac8b-ec5fdd885eb8",
//     "company_icon": "suntutodiorecusandae",
//     "created_at": "2023-12-02T10:58:10.000000Z",
//     "updated_at": "2023-12-02T10:58:10.000000Z"
// }
