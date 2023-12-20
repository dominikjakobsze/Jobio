import React from "react";
import TitleSection from "./Components/TitleSection";
import OptionsSection from "./Components/OptionsSection";
import ApplySection from "./Components/ApplySection";

const Main = ({ offer }) => {
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
                return <ApplySection />;
            }, [])}
        </>
    );
};

export default Main;
