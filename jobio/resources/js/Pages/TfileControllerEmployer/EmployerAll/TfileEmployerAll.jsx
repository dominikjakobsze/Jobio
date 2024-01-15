import Main from "./Main";
import HomeCrums from "../../Shared/HomeCrums";
import MenuHeader from "../../Shared/MenuHeader";
import { URL as localUrl } from "../../../app";
import MenuContainerLayout from "../../Shared/MenuContainerLayout";
import Spacer from "../../Shared/Spacer";
import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";

const TfileEmployerAll = () => {
    console.log("TfileEmployerAll");
    return (
        <>
            <MenuContainerLayout>
                <Spacer type={"extra-large"} />
                <MenuHeader />
                <Spacer type={"extra-small"} />
                <HomeCrums
                    name={"Panel Pracodawcy"}
                    link={localUrl + "/profile/employer"}
                />
                <Spacer type={"extra-large"} />
                <ShHeader title={"Zarządzanie Plikami"} />
                <Spacer type={"small"} />
                <ShSubHeader>Dodaj, usuń, skopiuj link.</ShSubHeader>
                <Spacer type={"extra-large"} />
                <Main />
                <Spacer type={"extra-large"} />
            </MenuContainerLayout>
        </>
    );
};

export default TfileEmployerAll;
