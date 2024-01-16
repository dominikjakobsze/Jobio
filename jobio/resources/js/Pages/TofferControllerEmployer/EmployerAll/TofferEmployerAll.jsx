import MenuHeader from "../../Shared/MenuHeader";
import HomeCrums from "../../Shared/HomeCrums";
import { URL as localUrl } from "../../../app";
import Main from "./Main";
import MenuContainerLayout from "../../Shared/MenuContainerLayout";
import Spacer from "../../Shared/Spacer";
import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";

const TofferEmployerAll = ({ offers }) => {
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
                <ShHeader title={"Zarządzanie Ofertami Pracy"} />
                <Spacer type={"small"} />
                <ShSubHeader>Umożliwia zarządzanie ofertami pracy</ShSubHeader>
                <Spacer type={"extra-large"} />
                <Main offers={offers} />
                <Spacer type={"extra-large"} />
            </MenuContainerLayout>
        </>
    );
    // return (
    //     <>
    //         <div className="bg-gray-100 min-h-[100dvh] w-full">
    //             <div className="w-full f fr fw js is cs ss">
    //                 <MenuHeader />
    //                 <HomeCrums name={"Profil"} link={localUrl + "/profile"} />
    //                 <Main offers={offers} />
    //             </div>
    //         </div>
    //     </>
    // );
};

export default TofferEmployerAll;
