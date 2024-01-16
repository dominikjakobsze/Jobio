import React from "react";
import { LuUsers2 } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { IoOptions } from "react-icons/io5";
import { URL as localUrl } from "../../app";
import ShHeader from "./ShHeader";
import ShSubHeader from "./ShSubHeader";
import Spacer from "./Spacer";
import MenuBlockButtonsContainer from "./MenuBlockButtonsContainer";
import MenuBlockButton from "./MenuBlockButton";

const SupportMenu = () => {
    return (
        <>
            <ShHeader title={"Panel Działu Wsparcia"} />
            <Spacer type={"small"} />
            <ShSubHeader>
                W tym panelu otrzymujesz możliwość zarządzania całym systemem i
                jego opcjami, wprowadzaj zmiany ostrożnie!
            </ShSubHeader>
            <Spacer type={"extra-large"} />
            <Spacer type={"medium"} />
            <MenuBlockButtonsContainer>
                <MenuBlockButton
                    actionTitle={"Użytkownicy"}
                    link={`${localUrl}/support/people`}
                    IconComponent={
                        <LuUsers2 className="text-gray-700 text-5xl font-[700]" />
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
                    actionTitle={"Filtrowanie"}
                    link={`${localUrl}/support/options`}
                    IconComponent={
                        <IoOptions className="text-gray-700 text-5xl font-[700]" />
                    }
                />
            </MenuBlockButtonsContainer>
        </>
    );
};

export default SupportMenu;
