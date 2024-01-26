import React from "react";
import Main from "./Main";
import MenuHeader from "../../Shared/MenuHeader";
import HomeCrums from "../../Shared/HomeCrums";
import { URL as localUrl } from "../../../app";
import MenuContainerLayout from "../../Shared/MenuContainerLayout";
import Spacer from "../../Shared/Spacer";
import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";

let counter = 0;
const TofferEmployerCreate = () => {
    console.log("OfferCreatePage " + counter++);
    return (
        <>
            <MenuContainerLayout>
                <Spacer type={"extra-large"} />
                <MenuHeader />
                <Spacer type={"extra-small"} />
                <HomeCrums
                    link={`${localUrl}/employer/offers`}
                    name={"Zarządzaj Swoimi Ofertami"}
                />
                <Spacer type={"extra-large"} />
                <ShHeader title={"Dodaj Nową Ofertę Pracy"} />
                <Spacer type={"small"} />
                <ShSubHeader>Kreator oferty pracy.</ShSubHeader>
                <Spacer type={"extra-large"} />
                <Spacer type={"small"} />
                <Main />
                <Spacer type={"extra-large"} />
                <Spacer type={"medium"} />
            </MenuContainerLayout>
        </>
    );
};

export default TofferEmployerCreate;
