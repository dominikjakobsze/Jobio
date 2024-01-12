import React from "react";
import { IoDocumentAttach } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPenClip } from "react-icons/fa6";
import { URL as localUrl } from "../../app";
import ShHeader from "./ShHeader";

const EmployeeMenu = () => {
    return (
        <>
            <ShHeader title={"Panel Użytkownika"} />
            <h6 className="flex-[0_0_65%] text-sm font-[400] text-gray-400 px-10 my-5">
                W tym panelu otrzymujesz możliwość stworzenia swojego CV i
                podejrzenia listy ofert na które aplikowałeś
            </h6>
            <div className="f fr fw js cs is ss flex-[0_0_100%] bg-transparent p-10 gap-5">
                <div className="flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1">
                    <FaMapLocationDot className="text-gray-700 text-5xl font-[700]" />
                    <h1 className="text-gray-700 text-lg font-[700] flex-[0_0_100%] text-center">
                        Mapa Ofert
                    </h1>
                </div>
                <div className="flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1">
                    <IoDocumentAttach className="text-gray-700 text-5xl font-[700]" />
                    <h1 className="text-gray-700 text-lg font-[700] flex-[0_0_100%] text-center">
                        Lista Aplikacji
                    </h1>
                </div>
                <div className="flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1">
                    <FaPenClip className="text-gray-700 text-5xl font-[700]" />
                    <h1 className="text-gray-700 text-lg font-[700] flex-[0_0_100%] text-center">
                        Kreator CV
                    </h1>
                </div>
            </div>
        </>
    );
};

export default EmployeeMenu;
