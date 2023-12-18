import React from "react";
import Main from "./Main";
import Layout from "./Components/Layout";

const OfferPage = ({ offer }) => {
    console.log("OfferPage");
    return (
        <Layout>
            <Main offer={offer} />
        </Layout>
    );
};

export default OfferPage;
