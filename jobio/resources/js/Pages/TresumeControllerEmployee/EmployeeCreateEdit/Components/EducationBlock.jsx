import React from "react";
import CustomTextArea from "./CustomTextArea";
import { FaDeleteLeft } from "react-icons/fa6";

const EducationBlock = ({
    firstVal,
    secondVal,
    thirdVal,
    id,
    setEducation,
}) => {
    return (
        <>
            <div className="flex-[0_0_100%] flex flex-row flex-wrap items-start content-start self-start justify-start">
                <div className="flex-[0_0_100%] flex flex-row flex-wrap items-start self-start justify-end content-start my-2">
                    <FaDeleteLeft
                        onClick={() => {
                            setEducation((prev) => {
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
                <input
                    readOnly={true}
                    type="text"
                    className="hidden"
                    name={`blocks[educationBlock][${id}][componentName]`}
                    value={"EducationBlock"}
                />
                <input
                    readOnly={true}
                    type="text"
                    className="hidden"
                    name={`blocks[educationBlock][${id}][props][id]`}
                    value={`${id}`}
                />
                <CustomTextArea
                    placeholder={"Nazwa Szkoły"}
                    className={"text-base text-gray-600 font-[600]"}
                    defaultTextareaValue={firstVal}
                    name={`blocks[educationBlock][${id}][props][firstVal]`}
                />
                <CustomTextArea
                    placeholder={"Okres Nauki"}
                    className={"text-xs text-gray-400 font-[400]"}
                    defaultTextareaValue={secondVal}
                    name={`blocks[educationBlock][${id}][props][secondVal]`}
                />
                <CustomTextArea
                    placeholder={"Dodatkowe Informacje"}
                    className={"text-sm text-gray-500 font-[500]"}
                    defaultTextareaValue={thirdVal}
                    name={`blocks[educationBlock][${id}][props][thirdVal]`}
                />
            </div>
        </>
    );
};

export default EducationBlock;
