import React from "react";
import { IoDocumentAttach } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import { URL as localUrl } from "../../app";
import ShHeader from "./ShHeader";
import ShSubHeader from "./ShSubHeader";
import Spacer from "./Spacer";
import MenuBlockButtonsContainer from "./MenuBlockButtonsContainer";
import MenuBlockButton from "./MenuBlockButton";

const EmployerMenu = () => {
    return (
        <>
            <ShHeader title={"Panel Pracownika"} />
            <Spacer type={"small"} />
            <ShSubHeader>
                W tym panelu otrzymujesz możliwość przejrzenia złożonych CV,
                stworzenia swojego CV itp.
            </ShSubHeader>
            <Spacer type={"extra-large"} />
            <Spacer type={"medium"} />
            <MenuBlockButtonsContainer>
                <MenuBlockButton
                    actionTitle={"Lista Aplikacji"}
                    link={`${localUrl}/`}
                    IconComponent={
                        <MdLocalOffer className="text-gray-700 text-5xl font-[700]" />
                    }
                />
                <MenuBlockButton
                    actionTitle={"Kreator CV"}
                    link={`${localUrl}/`}
                    IconComponent={
                        <IoDocumentAttach className="text-gray-700 text-5xl font-[700]" />
                    }
                />
            </MenuBlockButtonsContainer>
        </>
    );
};

export default EmployerMenu;
