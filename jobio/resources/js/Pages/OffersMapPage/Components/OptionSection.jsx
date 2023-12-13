import React from "react";
import OptionCheckbox from "./OptionCheckbox";
import { v4 as uuid } from "uuid";

const OptionSection = ({ option }) => {
    console.log(option);
    return (
        <>
            <div className="flex-[0_0_100%] f fr fw js is cs ss overflow-x-hidden overflow-y-auto">
                <h2 className="bg-orange-300 flex-[0_0_100%]">
                    {option?.displayName}
                </h2>
                {option?.items?.map((item) => {
                    return (
                        <OptionCheckbox
                            key={uuid()}
                            itemKey={option?.keyName}
                            itemValue={item?.option_value}
                        />
                    );
                })}
                <OptionCheckbox />
            </div>
        </>
    );
};

export default OptionSection;
