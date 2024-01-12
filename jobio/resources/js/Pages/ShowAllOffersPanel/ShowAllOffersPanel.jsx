import MenuHeader from "../Shared/MenuHeader";
import HomeCrums from "../Shared/HomeCrums";
import { URL as localUrl } from "../../app";
import Main from "./Main";

const ShowAllOffersPanel = ({ offers }) => {
    return (
        <>
            <div className="bg-gray-100 min-h-[100dvh] w-full">
                <div className="w-full f fr fw js is cs ss">
                    <MenuHeader />
                    <HomeCrums name={"Profil"} link={localUrl + "/profile"} />
                    <Main offers={offers} />
                </div>
            </div>
        </>
    );
};

export default ShowAllOffersPanel;
