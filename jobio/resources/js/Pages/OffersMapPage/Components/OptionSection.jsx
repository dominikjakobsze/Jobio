import React from "react";
import OptionCheckbox from "./OptionCheckbox";

const OptionSection = ({ item }) => {
    console.log("OptionSection");
    return (
        <>
            <div className="flex-[0_0_100%] f fr fw js is cs ss overflow-x-hidden overflow-y-auto">
                <div className="flex-[0_0_100%] f fr fnw jc ic cc ss mb-5">
                    <h2 className="flex-[1_0_0] self-end text-xl font-[700] text-gray-700">
                        {item?.displayName}
                    </h2>
                    <img
                        src={item?.iconUrl}
                        className="flex-[0_0_45px] h-[45px] object-contain"
                    ></img>
                </div>
                {item?.items?.map((itemnested) => {
                    return (
                        <OptionCheckbox
                            key={itemnested?.id}
                            itemValue={itemnested?.option_value}
                            itemKey={item?.keyName}
                        />
                    );
                })}
            </div>
            <div className="flex-[0_0_100%] p-[0.5px] bg-gray-200"></div>
        </>
    );
};

export default OptionSection;
