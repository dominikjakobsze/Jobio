import "leaflet/dist/leaflet.css";
import React from "react";
import L from "leaflet";

let counter = 0;
const MapSection = () => {
    console.log("MapSection " + counter++);

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
    React.useEffect(() => {
        if (mapLeaflet?.current === null) {
            defineMap();
        }
    }, []);
    return (
        <>
            <div
                ref={mapRef}
                className="flex-[0_0_95%] mx-auto h-[400px]"
            ></div>
            <input type="text" className="flex-[0_0_95%] mx-auto" name="city" />
            <input type="text" name="street" />
            <input type="text" name="zip_code" />
            <input type="text" name="voivodeship" />
            <input type="text" name="longitude" />
            <input type="text" name="latitude" />
        </>
    );
};

export default MapSection;
