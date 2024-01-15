import Layout from "./Components/Layout";
import MapBoard from "./Components/MapBoard";
import OptionPanel from "./Components/OptionPanel";
import React from "react";
import MapControls from "./Components/MapControls";
import { AnimationContextProvider } from "./Components/AnimationContextProvider";
import Main from "./Main";

const TofferGeneralMap = ({ items }) => {
    console.log("OffersMap");
    return (
        <AnimationContextProvider>
            <Layout>
                <Main items={items} />
            </Layout>
        </AnimationContextProvider>
    );
};

export default TofferGeneralMap;
