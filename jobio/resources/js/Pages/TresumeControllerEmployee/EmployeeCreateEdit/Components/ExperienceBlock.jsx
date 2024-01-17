import React from "react";
import CustomTextArea from "./CustomTextArea";
import { FaDeleteLeft } from "react-icons/fa6";

const ExperienceBlock = ({
    firstVal,
    secondVal,
    thirdVal,
    id,
    setExperience,
}) => {
    return (
        <>
            <div className="flex-[0_0_100%] flex flex-row flex-wrap items-start content-start self-start justify-start">
                <div className="flex-[0_0_100%] flex flex-row flex-wrap items-start self-start justify-end content-start my-2">
                    <FaDeleteLeft
                        onClick={() => {
                            setExperience((prev) => {
                                return prev?.filter((item) => {
                                    if (item?.props?.id !== id) {
                                        return item;
                                    }
                                });
                            });
                        }}
                        className="text-red-400 text-3xl font-[700] hover:brightness-110 cursor-pointer"
                    />
                </div>
                <CustomTextArea
                    placeholder={"Nazwa Firmy"}
                    className={"text-base text-gray-600 font-[600]"}
                    defaultTextareaValue={firstVal}
                    name={`experienceBlock[${id}][firstVal]`}
                />
                <CustomTextArea
                    placeholder={"Okres Pracy"}
                    className={"text-xs text-gray-400 font-[400]"}
                    defaultTextareaValue={secondVal}
                    name={`experienceBlock[${id}][secondVal]`}
                />
                <CustomTextArea
                    placeholder={"Obowiązki"}
                    className={"text-sm text-gray-500 font-[500]"}
                    defaultTextareaValue={thirdVal}
                    name={`experienceBlock[${id}][thirdVal]`}
                />
            </div>
        </>
    );
};

export default ExperienceBlock;
