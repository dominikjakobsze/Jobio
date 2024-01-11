import React from "react";
import { LuUsers2 } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { IoOptions } from "react-icons/io5";
import { URL as localUrl } from "../../app";

const SupportMenu = () => {
    return (
        <>
            <h1 className="flex-[0_0_100%] text-3xl font-[700] text-gray-700 px-10 pt-10">
                Panel Działu Wsparcia
            </h1>
            <h6 className="flex-[0_0_65%] text-sm font-[400] text-gray-400 px-10 my-5">
                W tym panelu otrzymujesz możliwość zarządzania całym systemem i
                jego opcjami, wprowadzaj zmiany ostrożnie!
            </h6>
            <div className="f fr fw js cs is ss flex-[0_0_100%] bg-transparent p-10 gap-5">
                <div
                    onClick={() => {
                        window.location.href = localUrl + "/test";
                    }}
                    className="flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1"
                >
                    <LuUsers2 className="text-gray-700 text-5xl font-[700]" />
                    <h1 className="text-gray-700 text-lg font-[700] flex-[0_0_100%] text-center">
                        Użytkownicy
                    </h1>
                </div>
                <div className="flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1">
                    <FaMapLocationDot className="text-gray-700 text-5xl font-[700]" />
                    <h1 className="text-gray-700 text-lg font-[700] flex-[0_0_100%] text-center">
                        Mapa Ofert
                    </h1>
                </div>
                <div className="flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1">
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
            </div>
        </>
    );
};

export default SupportMenu;
