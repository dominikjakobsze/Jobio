import React from "react";
import Main from "./Main";
import MenuHeader from "../Shared/MenuHeader";
import HomeCrums from "../Shared/HomeCrums";
import { URL as localUrl } from "../../app";

let counter = 0;
const OfferEditPage = ({ offer }) => {
    console.log("OfferEditPage " + counter++);
    return (
        <>
            <div className="bg-gray-100 min-h-[auto] w-full pb-10">
                <div className="w-full f fr fw js is cs ss">
                    <MenuHeader />
                    <HomeCrums
                        name={"Zarządzaj Swoimi Ofertami"}
                        link={localUrl + "/offers"}
                    />
                </div>
            </div>
            <Main offer={offer} />
        </>
    );
};

export default OfferEditPage;
