import React from "react";
import OptionCheckbox from "./OptionCheckbox";
import { v4 as uuid } from "uuid";
import { URL } from "../../../app";

const OptionSection = ({ option }) => {
    return (
        <>
            <div className="flex-[0_0_100%] f fr fw js is cs ss overflow-x-hidden overflow-y-auto">
                <div className="flex-[0_0_100%] f fr fnw jc ic cc ss mb-5">
                    <h2 className="flex-[1_0_0] self-end text-xl font-[700] text-gray-700">
                        {option?.displayName}
                    </h2>
                    <img
                        src={option?.iconUrl}
                        className="flex-[0_0_45px] h-[45px] object-contain"
                    ></img>
                </div>
                {option?.items?.map((item) => {
                    return (
                        <>
                            <OptionCheckbox
                                key={uuid()}
                                itemKey={option?.keyName}
                                itemValue={item?.option_value}
                            />
                        </>
                    );
                })}
            </div>
            <div className="flex-[0_0_100%] p-[0.5px] bg-gray-200"></div>
        </>
    );
};

export default OptionSection;
