import React from "react";
import CustomTextArea from "./CustomTextArea";

const EducationBlock = () => {
    return (
        <>
            <div className="bg-orange-500 flex-[0_0_100%] flex flex-row flex-wrap items-start content-start self-start justify-start">
                <CustomTextArea
                    placeholder={"Nazwa Szkoły, Kierunek i Specjalizacja"}
                    className={"text-base text-gray-600 font-[600]"}
                />
                <CustomTextArea
                    placeholder={"Okres Nauki"}
                    className={"text-xs text-gray-400 font-[400]"}
                />

                <CustomTextArea
                    placeholder={"Dodatkowe Informacje"}
                    className={"text-sm text-gray-500 font-[500]"}
                />
            </div>
        </>
    );
};

export default EducationBlock;
