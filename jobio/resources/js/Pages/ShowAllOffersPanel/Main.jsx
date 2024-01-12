import ShHeader from "../Shared/ShHeader";
import ShSubHeader from "../Shared/ShSubHeader";
import AllOffers from "./Components/AllOffers";

const Main = ({ offers }) => {
    return (
        <div className="mt-10 f fr fw js is cs ss flex-[0_0_100%]">
            <ShHeader title={"Zarządzaj Swoimi Ofertami"} />
            <ShSubHeader>Dodaj, usuń i edytuj swoje oferty.</ShSubHeader>
            <AllOffers offers={offers} />
        </div>
    );
};

export default Main;
