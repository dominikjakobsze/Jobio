import React from "react";
import ResourceListItem from "../../../Shared/ResourceListItem";
import ActionButton from "../../../Shared/ActionButton";
import Spacer from "../../../Shared/Spacer";
import axios from "axios";
import { exceptionBlock } from "../../../../app";

let counter = 0;
const AllOptions = ({ options }) => {
    console.log("AllOptions " + counter++);
    const [innerOptions, setInnerOptions] = React.useState(options ?? []);
    const formRef = React.useRef(null);

    const handleClickDelete = async (id) => {
        console.log(id);
    };

    const sendForm = async () => {
        await exceptionBlock(async () => {
            const formData = new FormData(formRef.current);
            //console.log(...formData);
            const queryString = new URLSearchParams(formData).toString();
            //console.log(queryString);
            const response = await axios.get(
                `/endpoint/options/sort?${queryString}`,
            );
            const data = response.data;
            setInnerOptions(data?.options);
        });
    };

    return (
        <>
            <form
                ref={formRef}
                onChange={() => sendForm()}
                onSubmit={(e) => e.preventDefault()}
                action={`/endpoint/options/sort`}
                method="get"
                className="flex flex-row flex-wrap flex-[0_0_100%] items-start content-start self-start lg:justify-start justify-center"
            >
                <input
                    placeholder="Przefiltruj po nazwie"
                    className="flex-[0_0_90%] max-w-[300px] px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black bg-transparent font-[700] text-gray-700 text-sm placeholder:text-gray-400"
                    type="text"
                    name="option_value"
                />
            </form>
            <Spacer type={"medium"} />
            <div className="gap-5 flex flex-row flex-wrap items-start justify-start content-start self-start flex-[0_0_100%]">
                {innerOptions?.map((option) => {
                    return (
                        <ResourceListItem
                            key={option?.id}
                            left={option?.option_type}
                            leftClasses={
                                "p-3 bg-violet-300/50 text-violet-400 border border-solid border-violet-500/50 rounded-full"
                            }
                            right={option?.option_value}
                            rightClasses={"text-gray-500"}
                            rightText={"Nazwa filtru:   "}
                            breakLayout={
                                "flex-[0_0_100%] lg:flex-[0_0_45%] xl:flex-[0_0_30%]"
                            }
                            ActionButtons={[
                                <ActionButton
                                    key={option?.id + option?.option_value}
                                    text={"Usuń"}
                                    typeClasses={
                                        "bg-purple-300/50 border border-solid border-purple-500/50 text-purple-400"
                                    }
                                    handleClick={async () =>
                                        await handleClickDelete(option?.id)
                                    }
                                />,
                            ]}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default AllOptions;
