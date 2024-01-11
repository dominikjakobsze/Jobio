import React from "react";
import { usePage } from "@inertiajs/react";

const MenuHeader = () => {
    const { user } = usePage().props;
    console.log(usePage().props);
    if (user === null) {
        return;
    }
    return (
        <>
            <div className="px-10 pt-10 flex-[0_0_100%] f fr fw js ic cs ss text-xs font-[700] text-gray-700 gap-2">
                <p className="flex-[0_1_auto]">Zalogowany jako:</p>
                <h1 className="flex-[0_1_auto] text-sky-500">{user?.email}</h1>
                <div className="flex-[0_1_auto] text-orange-400 bg-orange-200/50 px-5 py-1 rounded-xl border border-solid border-orange-300/50">
                    {user?.role}
                </div>
            </div>
        </>
    );
};

export default MenuHeader;
