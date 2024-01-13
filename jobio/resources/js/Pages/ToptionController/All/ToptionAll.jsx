import MenuHeader from "../../Shared/MenuHeader";
import HomeCrums from "../../Shared/HomeCrums";
import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";
import { URL as localUrl } from "../../../app";
import React from "react";
import Main from "./Main";
import MenuContainerLayout from "../../Shared/MenuContainerLayout";

let counter = 0;
const ToptionAll = ({ options }) => {
    console.log("ToptionAll " + counter++);
    return (
        <>
            <MenuContainerLayout>
                <MenuHeader />
                <HomeCrums
                    name={"Panel Wsparcia"}
                    link={localUrl + "/profile/support"}
                />
                <ShHeader title={"Zarządzanie Opcjami Filtrowania"} />
                <ShSubHeader>Umożliwia definiowanie nowych filtrów</ShSubHeader>
                <div className="flex-[0_0_100%]"></div>
                <Main options={options} />
            </MenuContainerLayout>
        </>
    );
};

export default ToptionAll;
