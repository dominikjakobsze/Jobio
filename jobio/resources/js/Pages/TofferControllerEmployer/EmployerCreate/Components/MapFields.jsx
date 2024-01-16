import React from "react";
import { stringToUpperCase } from "../../../../app";

let counter = 0;
const MapFields = ({ fields }) => {
    console.log("MapFields " + counter++);

    const [city, setCity] = React.useState("");
    const [street, setStreet] = React.useState("");
    const [zip_code, setZip_code] = React.useState("");
    const [voivodeship, setVoivodeship] = React.useState("");
    const [longitude, setLongitude] = React.useState("");
    const [latitude, setLatitude] = React.useState("");

    React.useEffect(() => {
        setCity((prev) => {
            return stringToUpperCase(fields?.city);
        });
        setStreet((prev) => {
            return stringToUpperCase(fields?.street);
        });
        setZip_code((prev) => {
            return stringToUpperCase(fields?.zip_code);
        });
        setVoivodeship((prev) => {
            return stringToUpperCase(fields?.voivodeship);
        });
        setLongitude((prev) => {
            return stringToUpperCase(fields?.longitude);
        });
        setLatitude((prev) => {
            return stringToUpperCase(fields?.latitude);
        });
    }, [fields?.refresh]);

    return (
        <>
            <input
                type="text"
                className="placeholder:text-gray-300 flex-[0_0_40%] lg:flex-[0_0_45%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="city"
                placeholder="Miasto"
                onChange={(e) => {
                    setCity(e.currentTarget.value);
                }}
                value={city}
            />
            <input
                type="text"
                className="placeholder:text-gray-300 flex-[0_0_40%] lg:flex-[0_0_45%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="street"
                placeholder="Ulica"
                onChange={(e) => {
                    setStreet(e.currentTarget.value);
                }}
                value={street}
            />
            <input
                type="text"
                className="placeholder:text-gray-300 flex-[0_0_40%] lg:flex-[0_0_45%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="zip_code"
                placeholder="Kod Pocztowy"
                onChange={(e) => {
                    setZip_code(e.currentTarget.value);
                }}
                value={zip_code}
            />
            <input
                type="text"
                className="placeholder:text-gray-300 flex-[0_0_40%] lg:flex-[0_0_45%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="voivodeship"
                placeholder="Województwo"
                onChange={(e) => {
                    setVoivodeship(e.currentTarget.value);
                }}
                value={voivodeship}
            />
            <input
                type="text"
                className="hidden flex-[0_0_45%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="longitude"
                onChange={(e) => {
                    setLongitude(e.currentTarget.value);
                }}
                value={longitude}
            />
            <input
                type="text"
                className="hidden flex-[0_0_45%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="latitude"
                onChange={(e) => {
                    setLatitude(e.currentTarget.value);
                }}
                value={latitude}
            />
        </>
    );
};

export default MapFields;
