import React from "react";
import { IoDocumentAttach } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaImages } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { IoOptions } from "react-icons/io5";
import { URL as localUrl } from "../../app";
import ShHeader from "./ShHeader";
import ShSubHeader from "./ShSubHeader";
import Spacer from "./Spacer";
import MenuBlockButtonsContainer from "./MenuBlockButtonsContainer";
import MenuBlockButton from "./MenuBlockButton";

const EmployerMenu = () => {
    return (
        <>
            <ShHeader title={"Panel Pracodawcy"} />
            <Spacer type={"small"} />
            <ShSubHeader>
                W tym panelu otrzymujesz możliwość zarządzania swoimi
                ogłoszeniami, możesz je edytować, usunąć, przypisać filtry i
                sprawdzić kto zaaplikował na Twoje ogłoszenie, przejrzeć CV i je
                odrzucić (użytkownik nie będzie o tym wiedział).
            </ShSubHeader>
            <Spacer type={"extra-large"} />
            <Spacer type={"medium"} />
            <MenuBlockButtonsContainer>
                <MenuBlockButton
                    actionTitle={"Mapa Ofert"}
                    link={`${localUrl}/`}
                    IconComponent={
                        <FaMapLocationDot className="text-gray-700 text-5xl font-[700]" />
                    }
                />
                <MenuBlockButton
                    actionTitle={"Oferty"}
                    link={`${localUrl}/support/offers`}
                    IconComponent={
                        <MdLocalOffer className="text-gray-700 text-5xl font-[700]" />
                    }
                />
                <MenuBlockButton
                    actionTitle={"Przypisz Filtry"}
                    link={`${localUrl}/support/options`}
                    IconComponent={
                        <IoOptions className="text-gray-700 text-5xl font-[700]" />
                    }
                />
                <MenuBlockButton
                    actionTitle={"Pliki"}
                    link={`${localUrl}/employer/files`}
                    IconComponent={
                        <FaImages className="text-gray-700 text-5xl font-[700]" />
                    }
                />
                <MenuBlockButton
                    actionTitle={"Aplikacje"}
                    link={`${localUrl}/support/options`}
                    IconComponent={
                        <IoDocumentAttach className="text-gray-700 text-5xl font-[700]" />
                    }
                />
            </MenuBlockButtonsContainer>
        </>
    );
};

export default EmployerMenu;
