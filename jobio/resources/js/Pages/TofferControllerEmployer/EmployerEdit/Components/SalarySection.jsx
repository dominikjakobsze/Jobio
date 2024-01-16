import React from "react";

let counter = 0;
const SalarySection = ({ min_salary, max_salary }) => {
    console.log("SalarySection " + counter++);
    return (
        <>
            <input
                type="number"
                name="min_salary"
                placeholder="min"
                defaultValue={min_salary}
                className="placeholder:text-gray-300 flex-[0_0_42%] lg:flex-[0_0_25%] text-center text-gray-700 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
            <input
                type="number"
                placeholder="max"
                name="max_salary"
                defaultValue={max_salary}
                className="placeholder:text-gray-300 flex-[0_0_42%] lg:flex-[0_0_25%] text-center text-gray-700 text-sm font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
        </>
    );
};

export default SalarySection;
