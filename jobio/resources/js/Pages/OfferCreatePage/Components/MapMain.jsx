import MapFields from "./MapFields";
import MapSection from "./MapSection";
import React from "react";

let counter = 0;
const MapMain = () => {
    console.log("MapMain " + counter++);
    const [fields, setFields] = React.useState({
        street: "",
        zip_code: "",
        voivodeship: "",
        city: "",
        latitude: "",
        longitude: "",
        refresh: true,
    });
    return (
        <>
            {React.useMemo(() => {
                return <MapSection setFields={setFields} />;
            }, [])}
            <MapFields fields={fields} />
        </>
    );
};

export default MapMain;
