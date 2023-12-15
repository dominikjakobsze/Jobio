import { usePage } from "@inertiajs/react";
import Layout from "./Components/Layout";
import MapBoard from "./Components/MapBoard";
import OptionPanel from "./Components/OptionPanel";
import React from "react";

const OffersMap = ({ items }) => {
    const [offers, setOffers] = React.useState([]);
    React.useEffect(() => {
        console.log(offers);
    }, [offers]);
    return (
        <Layout>
            <MapBoard />
            <OptionPanel items={items} setOffers={setOffers} />
        </Layout>
    );
};

export default OffersMap;
