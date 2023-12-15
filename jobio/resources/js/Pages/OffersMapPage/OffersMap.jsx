import { usePage } from "@inertiajs/react";
import Layout from "./Components/Layout";
import MapBoard from "./Components/MapBoard";
import OptionPanel from "./Components/OptionPanel";
import React from "react";
import MapControls from "./Components/MapControls";

const OffersMap = ({ items }) => {
    const [offers, setOffers] = React.useState([]);
    React.useEffect(() => {
        console.log(offers);
    }, [offers]);
    return (
        <Layout>
            <MapBoard />
            <MapControls />
            <OptionPanel items={items} setOffers={setOffers} />
        </Layout>
    );
};

export default OffersMap;
