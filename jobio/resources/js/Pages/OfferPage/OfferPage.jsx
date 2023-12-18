import React from "react";
import Main from "./Main";
import Layout from "./Components/Layout";

const OfferPage = ({ offer }) => {
    console.log(offer);
    return (
        <Layout>
            <Main />
        </Layout>
    );
};

export default OfferPage;
