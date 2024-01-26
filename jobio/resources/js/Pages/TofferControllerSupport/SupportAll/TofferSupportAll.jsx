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
const TofferSupportAll = ({ offers }) => {
    console.log("TofferSupportAll " + counter++);
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
                <ShHeader title={"Zarządzanie Ofertami Pracy"} />
                <Spacer type={"small"} />
                <ShSubHeader>Umożliwia usuwanie ofert pracy</ShSubHeader>
                <Spacer type={"extra-large"} />
                <Main offers={offers} />
                <Spacer type={"extra-large"} />
            </MenuContainerLayout>
        </>
    );
};

export default TofferSupportAll;
