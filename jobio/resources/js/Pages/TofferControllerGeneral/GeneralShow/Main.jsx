import React from "react";
import TitleSection from "./Components/TitleSection";
import OptionsSection from "./Components/OptionsSection";
import ApplySection from "./Components/ApplySection";
import RandomOffersSection from "./Components/RandomOffersSection";
import PageSection from "./Components/PageSection";

const Main = ({ offer, randomOffers }) => {
    console.log("Main");
    return (
        <>
            {React.useMemo(() => {
                return <TitleSection offer={offer} />;
            }, [])}
            {React.useMemo(() => {
                return <OptionsSection offer={offer} />;
            }, [])}
            {React.useMemo(() => {
                return <PageSection offer={offer} />;
            }, [])}
            {React.useMemo(() => {
                return randomOffers?.length > 0 ? (
                    <RandomOffersSection randomOffers={randomOffers} />
                ) : null;
            }, [])}
            {React.useMemo(() => {
                return <ApplySection />;
            }, [])}
        </>
    );
};

export default Main;
