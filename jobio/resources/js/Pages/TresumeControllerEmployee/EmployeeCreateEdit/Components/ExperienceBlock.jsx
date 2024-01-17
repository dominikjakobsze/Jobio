import React from "react";
import CustomTextArea from "./CustomTextArea";

const ExperienceBlock = () => {
    const propsHolder = React.useRef([
        {
            defaultTextareaValue: "1",
            temporaryTextareaValue: "",
            nameKey: "company",
        },
        {
            defaultTextareaValue: "2",
            temporaryTextareaValue: "",
            nameKey: "work",
        },
        {
            defaultTextareaValue: "3",
            temporaryTextareaValue: "",
            nameKey: "respo",
        },
    ]);
    const setPropsHolder = (nameKey) => {};
    React.useEffect(() => {
        console.log(propsHolder.current);
    }, [propsHolder]);
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
                />
                <CustomTextArea
                    placeholder={"Okres Pracy"}
                    className={"text-xs text-gray-400 font-[400]"}
                    defaultTextareaValue={
                        propsHolder?.current?.[1]?.defaultTextareaValue
                    }
                    nameKey={propsHolder?.current?.[1]?.nameKey}
                />

                <CustomTextArea
                    placeholder={"Obowiązki"}
                    className={"text-sm text-gray-500 font-[500]"}
                    defaultTextareaValue={
                        propsHolder?.current?.[2]?.defaultTextareaValue
                    }
                    nameKey={propsHolder?.current?.[2]?.nameKey}
                />
            </div>
        </>
    );
};

export default ExperienceBlock;
