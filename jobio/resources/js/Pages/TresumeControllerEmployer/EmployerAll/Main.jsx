import Spacer from "../../Shared/Spacer";

const Main = () => {
    return (
        <>
            <Spacer type={"medium"} />
            <div className="gap-5 flex flex-row flex-wrap items-start justify-start content-start self-start flex-[0_0_100%]">
                {/* {innerOptions?.map((option) => {
                    return (
                        <ResourceListItem
                            key={option?.id}
                            left={option?.option_type}
                            leftClasses={
                                "py-2 px-3 bg-violet-300/50 text-violet-400 border border-solid border-violet-500/50 rounded-full"
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
                })} */}
            </div>
        </>
    );
};

export default Main;
