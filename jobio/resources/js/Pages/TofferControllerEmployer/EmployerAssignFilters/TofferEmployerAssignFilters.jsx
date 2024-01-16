import HomeCrums from "../../Shared/HomeCrums";
import MenuContainerLayout from "../../Shared/MenuContainerLayout";
import MenuHeader from "../../Shared/MenuHeader";
import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";
import Spacer from "../../Shared/Spacer";
import { URL as localUrl } from "../../../app";
import Main from "./Main";

const TofferEmployerAssignFilters = ({offer, options}) => {
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
                <Main offer={offer} options={options}/>
                <Spacer type={"extra-large"} />
                <Spacer type={"extra-large"} />
            </MenuContainerLayout>
        </>
    );
};

export default TofferEmployerAssignFilters;
