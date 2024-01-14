import React from "react";
import { usePage } from "@inertiajs/react";

const MenuHeader = () => {
    const { user } = usePage().props;
    console.log(usePage().props);
    if (user === null) {
        return;
    }
    return (
        // break-all [ whitespace-nowrap || whitespace-pre-wrap ] overflow-hidden text-clip
        <>
            <div className="flex-[0_0_100%] f fr flex-nowrap justify-start ic cs ss text-xs font-[700] text-gray-700 gap-2">
                <p className="hidden lg:flex flex-[0_1_auto]">
                    Zalogowany jako:
                </p>
                <h1 className="flex-[0_1_auto] text-sky-500 whitespace-pre-wrap text-clip break-all overflow-hidden">
                    {user?.email}
                </h1>
                <div className="flex-[0_1_auto] text-orange-400 bg-orange-200/50 px-5 py-1 rounded-xl border border-solid border-orange-300/50 whitespace-pre-wrap text-clip break-all overflow-visible">
                    {user?.role}
                </div>
            </div>
        </>
    );
};

export default MenuHeader;
