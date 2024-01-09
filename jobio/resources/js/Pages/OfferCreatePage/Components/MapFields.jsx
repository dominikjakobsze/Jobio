import React from "react";

let counter = 0;
const MapFields = ({ fields }) => {
    console.log("MapFields " + counter++);

    const [city, setCity] = React.useState("");

    React.useEffect(() => {
        setCity((prev) => {
            return fields?.city;
        });
    }, [fields?.refresh]);

    return (
        <>
            <input
                type="text"
                className="flex-[0_0_45%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="city"
                onChange={(e) => {
                    setCity(e.currentTarget.value);
                }}
                value={city}
            />
            <input
                type="text"
                className="flex-[0_0_45%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="street"
            />
            <input
                type="text"
                className="flex-[0_0_45%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="zip_code"
            />
            <input
                type="text"
                className="flex-[0_0_45%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="voivodeship"
            />
            <input
                type="text"
                className=" flex-[0_0_45%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="longitude"
            />
            <input
                type="text"
                className=" flex-[0_0_45%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="latitude"
            />
        </>
    );
};

export default MapFields;
