import React from "react";
import { v4 as uuid } from "uuid";
import { URL } from "../../../app";

const SalaryOptionSection = ({ salary }) => {
    return (
        <>
            <div className="flex-[0_0_100%] f fr fw js is cs ss overflow-x-hidden overflow-y-auto">
                <div className="flex-[0_0_100%] f fr fnw jc ic cc ss mb-5">
                    <h2 className="flex-[1_0_0] self-end text-xl font-[700] text-gray-700">
                        Wynagrodzenie
                    </h2>
                    <img
                        src={URL + "/endpoint/image/icons-salary.png"}
                        className="flex-[0_0_45px] h-[45px] object-contain"
                    />
                </div>
                {Object?.entries(salary)?.map((item) => {
                    return (
                        <input
                            className="flex-[0_0_40%] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm text-gray-600 font-[700]"
                            type="number"
                            name={item[0]}
                            key={uuid()}
                            placeholder={item[1]}
                        />
                    );
                })}
            </div>
            <div className="flex-[0_0_100%] p-[0.5px] bg-gray-200"></div>
        </>
    );
};

export default SalaryOptionSection;
