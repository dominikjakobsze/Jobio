import React from "react";
import Spacer from "../../Shared/Spacer";
import ResourceListItem from "../../Shared/ResourceListItem";
import ActionButton from "../../Shared/ActionButton";
import DisplayDate from "../../Shared/DisplayDate";
import { URL as localUrl, exceptionBlock } from "../../../app";

const Main = ({ resumes }) => {
    console.log(resumes);
    const [innerResumes, setInnerResumes] = React.useState(resumes ?? null);
    return (
        <>
            <Spacer type={"medium"} />
            <div className="gap-5 flex flex-row flex-wrap items-start justify-start content-start self-start flex-[0_0_100%]">
                {innerResumes?.map((resume) => {
                    return (
                        <ResourceListItem
                            key={resume?.id}
                            right={
                                <DisplayDate _timestamp={resume?.created_at} />
                            }
                            rightClasses={"text-gray-500"}
                            rightText={"Zaaplikowano o: "}
                            breakLayout={
                                "flex-[0_0_100%] lg:flex-[0_0_45%] xl:flex-[0_0_30%]"
                            }
                            ActionButtons={[
                                <ActionButton
                                    key={resume?.id + "u"}
                                    text={"Odrzuć"}
                                    typeClasses={
                                        "bg-red-300/50 border border-solid border-red-500/50 text-red-400"
                                    }
                                />,
                                <ActionButton
                                    key={resume?.id + "o"}
                                    text={"Oferta"}
                                    typeClasses={
                                        "bg-purple-300/50 border border-solid border-purple-500/50 text-purple-400"
                                    }
                                />,
                                <ActionButton
                                    key={resume?.id + "cv"}
                                    text={"CV"}
                                    typeClasses={
                                        "bg-lime-300/50 border border-solid border-lime-500/50 text-lime-400"
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

export default Main;
