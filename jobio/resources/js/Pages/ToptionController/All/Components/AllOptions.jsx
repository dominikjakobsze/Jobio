import React from "react";
import ResourceListItem from "../../../Shared/ResourceListItem";
import ActionButton from "../../../Shared/ActionButton";

let counter = 0;
const AllOptions = ({ options }) => {
    console.log("AllOptions " + counter++);
    const [innerOptions, setInnerOptions] = React.useState(options ?? []);
    const handleClickDelete = async (id) => {
        console.log(id);
    };

    return (
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
                                text={"Usuń"}
                                typeClasses={
                                    "bg-purple-300/50 border border-solid border-purple-500/50 text-purple-400"
                                }
                                handleClick={async () =>
                                    handleClickDelete(option?.id)
                                }
                            />,
                        ]}
                    />
                );
            })}
        </div>
    );
};

export default AllOptions;
