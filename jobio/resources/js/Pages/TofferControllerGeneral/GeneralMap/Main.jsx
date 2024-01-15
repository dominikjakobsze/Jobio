import MapBoard from "./Components/MapBoard";
import OptionPanel from "./Components/OptionPanel";
import React from "react";
import MapControls from "./Components/MapControls";
import OffersPanel from "./Components/OffersPanel";

const Main = ({ items }) => {
    console.log("Main");
    const [offers, setOffers] = React.useState([]);
    return (
        <>
            <MapBoard offers={offers} />
            <OffersPanel offers={offers} />
            {React.useMemo(() => {
                return (
                    <>
                        <OptionPanel items={items} setOffers={setOffers} />
                        <MapControls />
                    </>
                );
            }, [])}
        </>
    );
};

export default Main;
