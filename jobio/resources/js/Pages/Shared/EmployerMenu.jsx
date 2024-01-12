import React from "react";
import { IoDocumentAttach } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { IoOptions } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import { URL as localUrl } from "../../app";
import ShHeader from "./ShHeader";
import ShSubHeader from "./ShSubHeader";
import ShOptionBlock from "./ShOptionBlock";

const EmployerMenu = () => {
    return (
        <>
            <ShHeader title={"Panel Pracodawcy"} />
            <ShSubHeader>
                W tym panelu otrzymujesz możliwość zarządzania swoimi
                ogłoszeniami, możesz je edytować, usunąć, przypisać filtry i
                sprawdzić kto zaaplikował na Twoje ogłoszenie, przejrzeć CV i je
                odrzucić (użytkownik nie będzie o tym wiedział).
            </ShSubHeader>
            <div className="f fr fw js cs is ss flex-[0_0_100%] bg-transparent p-10 gap-5">
                <ShOptionBlock
                    title={"Mapa Ofert"}
                    IconComponent={FaMapLocationDot}
                />
                <ShOptionBlock
                    clickHandler={() => {
                        window.location.href = localUrl + "/offers";
                    }}
                    title={"Oferty"}
                    IconComponent={MdLocalOffer}
                />
                <ShOptionBlock
                    title={"Filtrowanie"}
                    IconComponent={IoOptions}
                />
                <ShOptionBlock
                    title={"Lista Aplikacji"}
                    IconComponent={IoDocumentAttach}
                />
                <ShOptionBlock
                    clickHandler={() => {
                        window.location.href = localUrl + "/files";
                    }}
                    title={"Pliki"}
                    IconComponent={FaImages}
                />
            </div>
        </>
    );
};

export default EmployerMenu;
