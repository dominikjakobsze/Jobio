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
                <div className="flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1">
                    <FaMapLocationDot className="text-gray-700 text-5xl font-[700]" />
                    <h1 className="text-gray-700 text-lg font-[700] flex-[0_0_100%] text-center">
                        Mapa Ofert
                    </h1>
                </div>
                <div
                    onClick={() => {
                        window.location.href = localUrl + "/offers";
                    }}
                    className="flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1"
                >
                    <MdLocalOffer className="text-gray-700 text-5xl font-[700]" />
                    <h1 className="text-gray-700 text-lg font-[700] flex-[0_0_100%] text-center">
                        Oferty
                    </h1>
                </div>
                <div className="flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1">
                    <IoOptions className="text-gray-700 text-5xl font-[700]" />
                    <h1 className="text-gray-700 text-lg font-[700] flex-[0_0_100%] text-center">
                        Filtrowanie
                    </h1>
                </div>
                <div className="flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1">
                    <IoDocumentAttach className="text-gray-700 text-5xl font-[700]" />
                    <h1 className="text-gray-700 text-lg font-[700] flex-[0_0_100%] text-center">
                        Lista Aplikacji
                    </h1>
                </div>
                <div
                    onClick={() => {
                        window.location.href = localUrl + "/files";
                    }}
                    className="flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1"
                >
                    <FaImages className="text-gray-700 text-5xl font-[700]" />
                    <h1 className="text-gray-700 text-lg font-[700] flex-[0_0_100%] text-center">
                        Pliki
                    </h1>
                </div>
            </div>
        </>
    );
};

export default EmployerMenu;
