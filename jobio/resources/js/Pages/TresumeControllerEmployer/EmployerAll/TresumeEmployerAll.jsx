import HomeCrums from "../../Shared/HomeCrums";
import MenuContainerLayout from "../../Shared/MenuContainerLayout";
import MenuHeader from "../../Shared/MenuHeader";
import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";
import Spacer from "../../Shared/Spacer";
import { URL as localUrl } from "../../../app";

const TresumeEmployerAll = () => {
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
                <ShHeader title={"Lista Złożonych CV"} />
                <Spacer type={"small"} />
                <ShSubHeader>Przejrzyj złożone CV!</ShSubHeader>
                <Spacer type={"extra-large"} />
                <Spacer type={"extra-large"} />
            </MenuContainerLayout>
        </>
    );
};

export default TresumeEmployerAll;
