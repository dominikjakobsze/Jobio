import "leaflet/dist/leaflet.css";
import React from "react";
import L from "leaflet";
import axios from "axios";

let counter = 0;
const MapSection = () => {
    console.log("MapSection " + counter++);

    const mapMarker = React.useRef(null);
    const mapRef = React.useRef(null);
    const mapLeaflet = React.useRef(null);

    const defineMap = React.useCallback(() => {
        const accessToken =
            "jJNHET49eekqSetNpABgWWUYxS144E1aJeQe7wJHNSU2HSrZFKUzueYBnCtS93nh";
        mapLeaflet.current = L.map(mapRef.current).setView(
            [53.123482, 18.008438],
            6,
        );
        L.tileLayer(
            `https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=${accessToken}`,
            {
                attribution:
                    '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib">&copy; <b>Jawg</b>Maps</a> | <a href="https://www.openstreetmap.org/copyright" title="OpenStreetMap is open data licensed under ODbL" target="_blank" class="osm-attrib">&copy; OSM contributors</a>',
                maxZoom: 22,
                minZoom: 6,
                //zoomOffset: -1,
                //detectRetina: true,
            },
        ).addTo(mapLeaflet?.current);
        mapLeaflet?.current?.zoomControl?.setPosition("topright");
    }, []);

    const handleClick = React.useCallback((e) => {
        if (mapMarker.current !== null) {
            mapLeaflet.current.removeLayer(mapMarker.current);
            mapMarker.current.off();
            mapMarker.current.remove();
        }
        mapMarker.current = new L.marker(e.latlng).addTo(mapLeaflet.current);
    }, []);

    React.useEffect(() => {
        if (mapLeaflet?.current === null) {
            defineMap();
        }
        mapLeaflet?.current?.on("click", handleClick);
        return () => {
            mapLeaflet?.current?.off("click", handleClick);
        };
    }, []);

    return (
        <>
            <div
                ref={mapRef}
                className="flex-[0_0_95%] mx-auto h-[400px]"
            ></div>
            <div className="flex-[0_0_95%] text-center">
                <button
                    onClick={async () => {
                        if (mapMarker.current === null) {
                            return;
                        }
                        const { lat, lng } = mapMarker.current._latlng;
                        mapLeaflet?.current?.off("click", handleClick);
                        const accessToken =
                            "jJNHET49eekqSetNpABgWWUYxS144E1aJeQe7wJHNSU2HSrZFKUzueYBnCtS93nh";
                        const response = await axios.get(
                            `https://api.jawg.io/places/v1/reverse?access-token=${accessToken}&point.lat=${lat}&point.lon=${lng}&size=1`,
                        );
                        const data = await response.data;
                        console.log(data);
                        mapMarker.current = null;
                    }}
                    type="button"
                    className="bg-sky-300/20 text-base font-[600] text-sky-300 py-1 px-4 border-2 border-solid border-sky-500/20 rounded-xl hover:brightness-110"
                >
                    Zatwierdź Lokalizacje
                </button>
            </div>
        </>
    );
};

export default MapSection;
