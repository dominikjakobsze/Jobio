import HomeCrums from "../../Shared/HomeCrums";
import MenuHeader from "../../Shared/MenuHeader";
import Spacer from "../../Shared/Spacer";
import { URL as localUrl } from "../../../app";
import MenuContainerLayout from "../../Shared/MenuContainerLayout";

const TresumeEmployeeShow = ({ resume }) => {
    const renderBlocks = () => {
        if (!resume?.blocks) {
            return null;
        }
        return (
            <div className="my-5 flex-[0_0_100%] text-clip whitespace-pre-wrap overflow-visible break-words text-4xl font-[700] text-gray-700 flex flex-wrap flex-row items-start justify-start content-start self-start">
                {Object?.entries(resume?.blocks)?.map(([blockType, blocks]) => (
                    <div
                        className="my-5 flex-[0_0_100%] text-clip whitespace-pre-wrap overflow-visible break-words text-4xl font-[700] text-gray-700 flex flex-wrap flex-row items-start justify-start content-start self-start"
                        key={blockType}
                    >
                        {blockType === "educationBlock" ? (
                            <h1 className="flex-[0_0_100%] text-clip whitespace-pre-wrap overflow-visible break-words text-xl text-gray-600 font-[700] mt-5">
                                Edukacja
                            </h1>
                        ) : blockType === "experienceBlock" ? (
                            <h1 className="flex-[0_0_100%] text-clip whitespace-pre-wrap overflow-visible break-words text-xl text-gray-600 font-[700] mt-5">
                                Doświadczenie
                            </h1>
                        ) : null}
                        {blocks?.map((block) => (
                            <div
                                className="my-5 flex-[0_0_100%] text-clip whitespace-pre-wrap overflow-visible break-words text-4xl font-[700] text-gray-700 flex flex-wrap flex-row items-start justify-start content-start self-start"
                                key={block?.props.id}
                            >
                                <h3 className="resize-none my-1 flex-[0_0_100%] outline-none border-transparent placeholder:opacity-[0.3] focus:border-transparent focus:bg-gray-100 focus:ring-0 overflow-hidden whitespace-pre-wrap text-clip break-words text-base text-gray-600 font-[600]">
                                    {block?.props.firstVal}
                                </h3>
                                <p className="resize-none my-1 flex-[0_0_100%] outline-none border-transparent placeholder:opacity-[0.3] focus:border-transparent focus:bg-gray-100 focus:ring-0 overflow-hidden whitespace-pre-wrap text-clip break-words text-xs text-gray-400 font-[400]">
                                    {block?.props.secondVal}
                                </p>
                                {block?.props.thirdVal && (
                                    <p className="resize-none my-1 flex-[0_0_100%] outline-none border-transparent placeholder:opacity-[0.3] focus:border-transparent focus:bg-gray-100 focus:ring-0 overflow-hidden whitespace-pre-wrap text-clip break-words text-sm text-gray-500 font-[500]">
                                        {block?.props.thirdVal}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <MenuContainerLayout>
                <Spacer type={"large"} />
                <Spacer type={"small"} />
                <MenuHeader />
                <Spacer type={"extra-small"} />
                <HomeCrums
                    link={`${localUrl}/profile/employee`}
                    name={"Panel Pracownika"}
                />
                <Spacer type={"large"} />
                <div className="min-h-[100dvh] shadow-standard p-3 lg:p-10 rounded-2xl flex flex-row flex-wrap items-start justify-start content-start self-start flex-[0_0_100%] bg-gray-50">
                    {resume?.name ? (
                        <>
                            <h1 className="flex-[0_0_100%] text-clip whitespace-pre-wrap overflow-visible break-words text-2xl lg:text-4xl font-[700] text-gray-700 text-center lg:text-left">
                                {resume?.name}
                            </h1>
                        </>
                    ) : null}
                    {resume?.address ? (
                        <>
                            <h1 className="flex-[0_0_100%] text-clip whitespace-pre-wrap overflow-visible break-words text-sm font-[400] text-gray-400 text-center lg:text-left mt-3 lg:mt-0">
                                {resume?.address}
                            </h1>
                        </>
                    ) : null}
                    {resume?.contact ? (
                        <>
                            <h1 className="flex-[0_0_100%] text-clip whitespace-pre-wrap overflow-visible break-words text-sm font-[400] text-gray-400 text-center lg:text-left mt-3 lg:mt-0">
                                {resume?.contact}
                            </h1>
                        </>
                    ) : null}
                    {resume?.summary ? (
                        <>
                            <h1 className="flex-[0_0_100%] text-clip whitespace-pre-wrap overflow-visible break-words text-xl text-gray-600 font-[700] mt-5">
                                Podsumowanie
                            </h1>
                            <div className="flex-[0_0_100%] text-clip whitespace-pre-wrap overflow-visible break-words text-sm text-gray-600 font-[600] mt-3">
                                {resume?.summary}
                            </div>
                        </>
                    ) : null}
                    {renderBlocks()}
                    {resume?.skills ? (
                        <>
                            <h1 className="flex-[0_0_100%] text-clip whitespace-pre-wrap overflow-visible break-words text-xl text-gray-600 font-[700] mt-5">
                                Umiejętności
                            </h1>
                            <div className="flex-[0_0_100%] text-clip whitespace-pre-wrap overflow-visible break-words text-sm text-gray-600 font-[600] mt-3">
                                {resume?.skills}
                            </div>
                        </>
                    ) : null}
                </div>
                <Spacer type={"extra-large"} />
                <Spacer type={"extra-large"} />
            </MenuContainerLayout>
        </>
    );
};

export default TresumeEmployeeShow;
