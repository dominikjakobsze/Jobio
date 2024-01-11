import React from "react";
import Main from "./Main";

let counter = 0;
const OfferEditPage = ({ offer }) => {
    console.log("OfferEditPage " + counter++);
    return <Main offer={offer} />;
};

export default OfferEditPage;
