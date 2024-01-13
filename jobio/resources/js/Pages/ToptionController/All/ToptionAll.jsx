import MenuHeader from "../../Shared/MenuHeader";
import HomeCrums from "../../Shared/HomeCrums";
import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";
import { URL as localUrl } from "../../../app";
import React from "react";
import Main from "./Main";
import MenuContainerLayout from "../../Shared/MenuContainerLayout";
import Spacer from "../../Shared/Spacer";

let counter = 0;
const ToptionAll = ({ options }) => {
    console.log("ToptionAll " + counter++);
    return (
        <>
            <MenuContainerLayout>
                <Spacer type={"extra-large"} />
                <MenuHeader />
                <Spacer type={"extra-small"} />
                <HomeCrums
                    name={"Panel Wsparcia"}
                    link={localUrl + "/profile/support"}
                />
                <Spacer type={"extra-large"} />
                <ShHeader title={"Zarządzanie Opcjami Filtrowania"} />
                <Spacer type={"small"} />
                <ShSubHeader>Umożliwia definiowanie nowych filtrów</ShSubHeader>
                <Spacer type={"extra-large"} />
                <Main options={options} />
            </MenuContainerLayout>
        </>
    );
};

export default ToptionAll;
