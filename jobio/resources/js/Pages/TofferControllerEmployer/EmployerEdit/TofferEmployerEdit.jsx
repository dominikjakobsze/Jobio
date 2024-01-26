import React from "react";
import Main from "./Main";
import { URL as localUrl } from "../../../app";
import MenuContainerLayout from "../../Shared/MenuContainerLayout";
import Spacer from "../../Shared/Spacer";
import MenuHeader from "../../Shared/MenuHeader";
import HomeCrums from "../../Shared/HomeCrums";
import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";

let counter = 0;
const TofferEmployerEdit = ({ offer }) => {
    console.log("OfferEditPage " + counter++);
    return (
        <>
            <MenuContainerLayout>
                <Spacer type={"extra-large"} />
                <MenuHeader />
                <Spacer type={"extra-small"} />
                <HomeCrums
                    name={"Zarządzanie Ofertami Pracy"}
                    link={localUrl + "/employer/offers"}
                />
                <Spacer type={"extra-large"} />
                <ShHeader title={"Edytuj Ofertę Pracy"} />
                <Spacer type={"small"} />
                <ShSubHeader>Umożliwia edycję ofertę pracy</ShSubHeader>
                <Spacer type={"extra-large"} />
                <Main offer={offer} />
                <Spacer type={"extra-large"} />
            </MenuContainerLayout>
        </>
    );
};

export default TofferEmployerEdit;
