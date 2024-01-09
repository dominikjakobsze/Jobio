let counter = 0;
const MapFields = () => {
    console.log("MapFields " + counter++);
    return (
        <>
            <input
                type="text"
                className="flex-[0_0_31.5%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="city"
            />
            <input
                type="text"
                className="flex-[0_0_31.5%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="street"
            />
            <input
                type="text"
                className="flex-[0_0_31.5%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="zip_code"
            />
            <input
                type="text"
                className="flex-[0_0_31.5%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="voivodeship"
            />
            <input
                type="text"
                className="flex-[0_0_31.5%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="longitude"
            />
            <input
                type="text"
                className="flex-[0_0_31.5%] text-center text-gray-500 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="latitude"
            />
        </>
    );
};

export default MapFields;
