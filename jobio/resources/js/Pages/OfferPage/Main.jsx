import React from "react";
import TitleSection from "./Components/TitleSection";
import OptionsSection from "./Components/OptionsSection";

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
        </>
    );
};

export default Main;
