import MapFields from "./MapFields";
import MapSection from "./MapSection";
import React from "react";

let counter = 0;
const MapMain = ({ offer }) => {
    console.log("MapMain " + counter++);
    const [fields, setFields] = React.useState({
        street: offer?.street ?? "",
        zip_code: offer?.zip_code ?? "",
        voivodeship: offer?.voivodeship ?? "",
        city: offer?.city ?? "",
        latitude: offer?.latitude ?? "",
        longitude: offer?.longitude ?? "",
        refresh: true,
    });
    return (
        <>
            {React.useMemo(() => {
                return <MapSection fields={fields} setFields={setFields} />;
            }, [])}
            <MapFields fields={fields} />
        </>
    );
};

export default MapMain;
