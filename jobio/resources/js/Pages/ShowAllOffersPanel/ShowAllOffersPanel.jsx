import MenuHeader from "../Shared/MenuHeader";
import HomeCrums from "../Shared/HomeCrums";
import { URL as localUrl } from "../../app";
import Main from "./Main";

const ShowAllOffersPanel = () => {
    return (
        <>
            <div className="w-full bg-gray-100 f fr fw js is cs ss min-h-[100dvh]">
                <MenuHeader />
                <HomeCrums name={"Profil"} link={localUrl + "/profile"} />
                <Main />
            </div>
        </>
    );
};

export default ShowAllOffersPanel;
