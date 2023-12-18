import React from "react";
import TitleSection from "./Components/TitleSection";

const Main = ({ offer }) => {
    console.log("Main");
    return (
        <>
            {React.useMemo(() => {
                return <TitleSection offer={offer} />;
            }, [])}
        </>
    );
};

export default Main;
