import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapBoard = ({ offers }) => {
    console.log("MapBoard");
    const mapRef = React.useRef(null);
    const mapLeaflet = React.useRef(null);

    const defineMap = React.useCallback(() => {
        const accessToken =
            "jJNHET49eekqSetNpABgWWUYxS144E1aJeQe7wJHNSU2HSrZFKUzueYBnCtS93nh";
        mapLeaflet.current = L.map(mapRef.current).setView(
            [48.7965913, 2.3210938],
            6,
        );
        L.tileLayer(
            `https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=${accessToken}`,
            {
                attribution:
                    '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib">&copy; <b>Jawg</b>Maps</a> | <a href="https://www.openstreetmap.org/copyright" title="OpenStreetMap is open data licensed under ODbL" target="_blank" class="osm-attrib">&copy; OSM contributors</a>',
                maxZoom: 22,
                minZoom: 6,
            },
        ).addTo(mapLeaflet.current);
        mapLeaflet.current.zoomControl.setPosition("topright");
    }, []);

    React.useEffect(() => {
        if (mapLeaflet.current === null) {
            defineMap();
        }
    }, []);

    return (
        <>
            <div
                ref={mapRef}
                className="w-full h-full z-[100] overflow-hidden"
            >
            </div>
            {offers.map(offer => console.log(offer))}
        </>
    );
};

export default MapBoard;
