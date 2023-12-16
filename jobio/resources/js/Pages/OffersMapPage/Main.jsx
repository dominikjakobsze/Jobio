import MapBoard from "./Components/MapBoard";
import OptionPanel from "./Components/OptionPanel";
import React from "react";
import MapControls from "./Components/MapControls";

const Main = ({ items }) => {
    console.log("Main");
    const [offers, setOffers] = React.useState([]);
    return (
        <>
            <MapBoard offers={offers} />
            {React.useMemo(() => {
                return (
                    <>
                        <OptionPanel items={items} setOffers={setOffers} />
                        <MapControls />
                        <MapBoard offers={offers} />
                    </>
                );
            }, [])}
        </>
    );
};

export default Main;
