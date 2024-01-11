import React from "react";
import { LuUsers2 } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";

const SupportMenu = () => {
    return (
        <>
            <h1 className="flex-[0_0_100%] text-3xl font-[700] text-gray-700 p-10 mt-5">
                Panel Działu Wsparcia
            </h1>
            <div className="f fr fw js cs is ss flex-[0_0_100%] bg-transparent p-10 gap-5">
                <div className="flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1">
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
            </div>
        </>
    );
};

export default SupportMenu;
