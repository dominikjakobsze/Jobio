import Main from "./Main";
import HomeCrums from "../Shared/HomeCrums";
import MenuHeader from "../Shared/MenuHeader";
import { URL as localUrl } from "../../app";

const TfileShowAllFilesPage = () => {
    console.log("TfileShowAllFilesPage");
    return (
        <>
            <div className="w-full bg-gray-100">
                <MenuHeader />
                <HomeCrums name={"Profil"} link={`${localUrl}/profile`} />
            </div>
            <Main />
        </>
    );
};

export default TfileShowAllFilesPage;
