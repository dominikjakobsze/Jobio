import React from "react";
import Main from "./Main";
import Layout from "./Components/Layout";

const OfferPage = ({ offer,randomOffers }) => {
    console.log("OfferPage");
    return (
        <Layout>
            <Main offer={offer} randomOffers={randomOffers} />
        </Layout>
    );
};

export default OfferPage;
