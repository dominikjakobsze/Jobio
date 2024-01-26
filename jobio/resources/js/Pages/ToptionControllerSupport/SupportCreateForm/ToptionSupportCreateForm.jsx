import HomeCrums from "../../Shared/HomeCrums";
import MenuContainerLayout from "../../Shared/MenuContainerLayout";
import MenuHeader from "../../Shared/MenuHeader";
import Spacer from "../../Shared/Spacer";
import { URL as localUrl } from "../../../app";
import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";
import Main from "./Main";

const ToptionCreateForm = () => {
    return (
        <>
            <MenuContainerLayout>
                <Spacer type={"extra-large"} />
                <MenuHeader />
                <Spacer type={"extra-small"} />
                <HomeCrums
                    link={`${localUrl}/support/options`}
                    name={"Wszystkie Filtry"}
                />
                <Spacer type={"extra-large"} />
                <ShHeader title={"Dodaj nową opcję filtrowania"} />
                <Spacer type={"small"} />
                <ShSubHeader>
                    Wszystko co istotne dla filtrowania ofert pracy.
                </ShSubHeader>
                <Spacer type={"extra-large"} />
                <Main />
                <Spacer type={"extra-large"} />
                <Spacer type={"medium"} />
            </MenuContainerLayout>
        </>
    );
};

export default ToptionCreateForm;
