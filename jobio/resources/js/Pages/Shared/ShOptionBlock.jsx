import React from "react";

const ShOptionBlock = ({ title, IconComponent, clickHandler }) => {
    const handleClick = React.useCallback(() => {
        if (clickHandler === null || clickHandler === undefined) {
            return;
        }
        clickHandler();
    }, []);
    return (
        <div
            onClick={() => handleClick()}
            className="flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1"
        >
            <IconComponent className="text-gray-700 text-5xl font-[700]" />
            <h1 className="text-gray-700 text-lg font-[700] flex-[0_0_100%] text-center">
                {title}
            </h1>
        </div>
    );
};

export default ShOptionBlock;
