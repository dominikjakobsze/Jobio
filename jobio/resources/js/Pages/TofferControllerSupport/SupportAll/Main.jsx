import React from "react";
import ShHeader from "../../Shared/ShHeader";
import Spacer from "../../Shared/Spacer";
import ShSubHeader from "../../Shared/ShSubHeader";
import AllOffers from "./Components/AllOffers";

let counter = 0;
const Main = ({ offers }) => {
    console.log("Main " + counter++);
    return (
        <>
            <ShHeader title={"Lista wszystkich ofert"} textSize={"text-2xl"} />
            <Spacer type={"small"} />
            <ShSubHeader>
                Lista wszystkich aktywnych ofert w systemie.
            </ShSubHeader>
            <Spacer type={"extra-large"} />
            <Spacer type={"medium"} />
            <AllOffers offers={offers} />
        </>
    );
};

export default Main;
