import React from "react";
import { v4 as uuid } from "uuid";
import { URL } from "../../../../app";

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
                <div className="flex-[0_0_100%] p-1 f fr fw jc is cs ss gap-5">
                    {Object.entries(salary)?.map((salary) => {
                        return (
                            <input
                                key={salary[0]+salary[1]}
                                type="number"
                                name={salary[0]}
                                placeholder={salary[1]}
                                className="flex-[0_0_45%] text-gray-600 text-sm font-[600] ss px-1 bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            />
                        );
                    })}
                </div>
            </div>
            <div className="flex-[0_0_100%] p-[0.5px] bg-gray-200"></div>
        </>
    );
};

export default SalaryOptionSection;
