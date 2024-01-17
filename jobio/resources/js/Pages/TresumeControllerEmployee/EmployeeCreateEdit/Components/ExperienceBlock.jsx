import React from "react";
import CustomTextArea from "./CustomTextArea";

const ExperienceBlock = ({ propsHolderDefault }) => {
    const propsHolder = React.useRef(
        propsHolderDefault ?? [
            {
                defaultTextareaValue: "",
                temporaryTextareaValue: "",
                nameKey: "company",
            },
            {
                defaultTextareaValue: "",
                temporaryTextareaValue: "",
                nameKey: "work",
            },
            {
                defaultTextareaValue: "",
                temporaryTextareaValue: "",
                nameKey: "respo",
            },
        ],
    );

    const setPropsHolder = (nameKey, newValue) => {
        const updatedPropsHolder = propsHolder.current.map((item) => {
            if (item.nameKey === nameKey) {
                return {
                    ...item,
                    temporaryTextareaValue: newValue,
                };
            }
            return item;
        });
        propsHolder.current = updatedPropsHolder;
    };

    return (
        <>
            <p
                onClick={() => {
                    console.log(propsHolder);
                }}
            >
                test
            </p>
            <div className="bg-orange-500 flex-[0_0_100%] flex flex-row flex-wrap items-start content-start self-start justify-start">
                <CustomTextArea
                    placeholder={"Nazwa Firmy"}
                    className={"text-base text-gray-600 font-[600]"}
                    defaultTextareaValue={
                        propsHolder?.current?.[0]?.defaultTextareaValue
                    }
                    nameKey={propsHolder?.current?.[0]?.nameKey}
                    setPropsHolder={setPropsHolder}
                />
                <CustomTextArea
                    placeholder={"Okres Pracy"}
                    className={"text-xs text-gray-400 font-[400]"}
                    defaultTextareaValue={
                        propsHolder?.current?.[1]?.defaultTextareaValue
                    }
                    nameKey={propsHolder?.current?.[1]?.nameKey}
                    setPropsHolder={setPropsHolder}
                />

                <CustomTextArea
                    placeholder={"Obowiązki"}
                    className={"text-sm text-gray-500 font-[500]"}
                    defaultTextareaValue={
                        propsHolder?.current?.[2]?.defaultTextareaValue
                    }
                    nameKey={propsHolder?.current?.[2]?.nameKey}
                    setPropsHolder={setPropsHolder}
                />
            </div>
        </>
    );
};

export default ExperienceBlock;
