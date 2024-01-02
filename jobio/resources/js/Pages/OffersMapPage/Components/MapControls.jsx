import React from "react";
import { TbFilters } from "react-icons/tb";
import { LiaColumnsSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { AnimationContext } from "./AnimationContextProvider";
import { URL } from "../../../app";

//Przekierowuje na /profile, jesli jest zalogowany to normalnie, jesli nie jest to middleware odsyla do sign-in

const MapControls = () => {
    console.log("MapControls");

    const { getOptionPanelTl, getOffersPanelTl } =
        React.useContext(AnimationContext);

    return (
        <>
            <div className=" bg-[rgba(0,0,0,0.2)] absolute top-0 left-0 z-[101] translate-x-[10px] translate-y-[10px] f fr fnw js ss cs is border-2 border-solid border-[rgba(0,0,0,0.2)] rounded-md gap-[1px] overflow-hidden">
                <div
                    className="flex-[0_0_auto] bg-white p-1 cup hover:bg-gray-100"
                    onClick={() => getOptionPanelTl().play()}
                >
                    <TbFilters className="w-[25px] h-[25px]" />
                </div>
                <div
                    onClick={() => getOffersPanelTl().play()}
                    className="flex-[0_0_auto] bg-white p-1 cup hover:bg-gray-100"
                >
                    <LiaColumnsSolid className="w-[25px] h-[25px]" />
                </div>
                <div
                    onClick={() => window.location.href = `${URL}/files`}
                    className="flex-[0_0_auto] bg-white p-1 cup hover:bg-gray-100"
                >
                    <FiUser className="w-[25px] h-[25px]" />
                </div>
            </div>
        </>
    );
};

export default MapControls;
