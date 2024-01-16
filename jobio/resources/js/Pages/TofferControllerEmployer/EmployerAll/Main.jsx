import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";
import SideBySideContainer from "../../Shared/SideBySideContainer";
import Spacer from "../../Shared/Spacer";
import ButtonCreate from "../../Shared/ButtonCreate";
import AllOffers from "./Components/AllOffers";

const Main = ({ offers }) => {
    return (
        <>
            <SideBySideContainer
                LeftComponent={<ButtonCreate link={"/employer/offer-create"} />}
                RightComponent={
                    <ShHeader
                        title={"Dodaj nową ofertę pracy"}
                        textSize={"text-sm"}
                        fontWeight={"font-[600]"}
                    />
                }
                gapNumber={"gap-8"}
                flexAuto={true}
                flexPosition={
                    "items-center content-start justify-center lg:justify-start self-start"
                }
                debug={false}
            />
            <Spacer type={"extra-large"} />
            <ShHeader
                title={"Lista wszystkich dodanych ofert pracy"}
                textSize={"text-2xl"}
            />
            <Spacer type={"small"} />
            <ShSubHeader>Edytuj, usuwaj, podglądaj!</ShSubHeader>
            <Spacer type={"extra-large"} />
            <Spacer type={"medium"} />
            <AllOffers offers={offers} />
        </>
    );
};

export default Main;
