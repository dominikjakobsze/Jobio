import HomeCrums from "../../Shared/HomeCrums";
import MenuContainerLayout from "../../Shared/MenuContainerLayout";
import MenuHeader from "../../Shared/MenuHeader";
import Spacer from "../../Shared/Spacer";
import { URL as localUrl } from "../../../app";
import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";
import Main from "./Main";

const TresumeEmployeeCreateEdit = ({ resume }) => {
    return (
        <>
            <MenuContainerLayout>
                <Spacer type={"extra-large"} />
                <MenuHeader />
                <Spacer type={"extra-small"} />
                <HomeCrums
                    name={"Panel Pracownika"}
                    link={localUrl + "/profile/employee"}
                />
                <Spacer type={"extra-large"} />
                <ShHeader title={"Kreator CV"} />
                <Spacer type={"small"} />
                <ShSubHeader>Stwórz lub edytuj swoje CV</ShSubHeader>
                <Spacer type={"extra-large"} />
                <Main resume={resume} />
                <Spacer type={"extra-large"} />
            </MenuContainerLayout>
        </>
    );
};

export default TresumeEmployeeCreateEdit;
