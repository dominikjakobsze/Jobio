import MenuHeader from "../../Shared/MenuHeader";
import HomeCrums from "../../Shared/HomeCrums";
import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";
import { URL as localUrl } from "../../../app";
import React from "react";
import Main from "./Main";
import MenuContainerLayout from "../../Shared/MenuContainerLayout";
import Spacer from "../../Shared/Spacer";

const TpersonSupportAll = ({ users }) => {
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
                <ShHeader title={"Zarządzanie Użytkownikami systemu"} />
                <Spacer type={"small"} />
                <ShSubHeader>Umożliwia zmianę roli użytkownika</ShSubHeader>
                <Spacer type={"extra-large"} />
                <Main users={users} />
                <Spacer type={"extra-large"} />
            </MenuContainerLayout>
        </>
    );
};

export default TpersonSupportAll;
