import { usePage } from "@inertiajs/react";
import Layout from "./Components/Layout";
import MapBoard from "./Components/MapBoard";
import OptionPanel from "./Components/OptionPanel";

const OffersMap = ({ items }) => {
    return (
        <Layout>
            <MapBoard />
            <OptionPanel items={items} />
        </Layout>
    );
};

export default OffersMap;
