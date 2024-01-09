import MapFields from "./MapFields";
import MapSection from "./MapSection";
import React from "react";

let counter = 0;
const MapMain = () => {
    console.log("MapMain " + counter++);
    
    return (
        <>
            <MapSection />
            <MapFields />
        </>
    );
};

export default MapMain;
