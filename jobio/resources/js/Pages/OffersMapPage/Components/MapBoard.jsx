import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const MapBoard = () => {
    const mapRef = React.useRef();
    const mapRefNotInitialized = React.useRef(true);

    React.useEffect(() => {
        if (mapRefNotInitialized.current) {
            defineLeafletMap();
        }
    }, []);

    const defineLeafletMap = React.useCallback(() => {
        mapRefNotInitialized.current = false;
        const accessToken =
            "jJNHET49eekqSetNpABgWWUYxS144E1aJeQe7wJHNSU2HSrZFKUzueYBnCtS93nh";
        const mapBoard = L.map(mapRef.current).setView(
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
    }, []);
    return (
        <>
            <div
                ref={mapRef}
                className="w-full h-full z-[100] overflow-hidden"
            ></div>
        </>
    );
};

export default MapBoard;
