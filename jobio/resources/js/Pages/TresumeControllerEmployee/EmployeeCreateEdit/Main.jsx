import React from "react";
import SendFormButton from "../../Shared/SendFormButton";
import CustomTextArea from "./Components/CustomTextArea";
import { IoIosAddCircle } from "react-icons/io";
import EducationBlock from "./Components/EducationBlock";
import ExperienceBlock from "./Components/ExperienceBlock";

const Main = () => {
    const [education, setEducation] = React.useState([]);
    const [experience, setExperience] = React.useState([]);
    return (
        <>
            <div className="flex-[0_0_100%] shadow-standard p-5 flex flex-wrap flex-row items-start justify-start content-start self-start rounded-2xl bg-white gap-1">
                {/* <CustomTextArea placeholder={"Imię i Nazwisko"} />
                <CustomTextArea
                    placeholder={"Dane Adresowe"}
                    className={"text-sm text-gray-400 font-[400]"}
                />
                <CustomTextArea
                    placeholder={"Dane Kontaktowe"}
                    className={"text-sm text-gray-400 font-[400]"}
                />
                <h2 className="resize-none flex-[0_0_100%] p-2 outline-none text-xl text-gray-600 font-[700] border-transparent placeholder:opacity-[0.3] focus:border-transparent focus:bg-gray-100 focus:ring-0 overflow-hidden whitespace-pre-wrap text-clip break-all">
                    Podsumowanie
                </h2>
                <CustomTextArea
                    placeholder={"Podsumowanie"}
                    className={"text-sm text-gray-600 font-[600]"}
                /> */}
                <h2 className="resize-none flex-[0_0_100%] p-2 outline-none text-xl text-gray-600 font-[700] border-transparent placeholder:opacity-[0.3] focus:border-transparent focus:bg-gray-100 focus:ring-0 overflow-hidden whitespace-pre-wrap text-clip break-all">
                    Edukacja
                </h2>
                {education?.map((item, index) => {
                    console.log(item);
                    const EducationComponent = item.component;
                    return <EducationComponent key={index} {...item.props} />;
                })}
                <IoIosAddCircle
                    onClick={() => {
                        setEducation((prev) => {
                            return [
                                ...prev,
                                {
                                    component: EducationBlock,
                                    props: {
                                        text: "test55",
                                    },
                                },
                            ];
                        });
                    }}
                    className="text-sky-400 text-4xl hover:brightness-110 cursor-pointer mx-auto"
                />
                <h2 className="resize-none flex-[0_0_100%] p-2 outline-none text-xl text-gray-600 font-[700] border-transparent placeholder:opacity-[0.3] focus:border-transparent focus:bg-gray-100 focus:ring-0 overflow-hidden whitespace-pre-wrap text-clip break-all">
                    Doświadczenie
                </h2>
                {experience?.map((item, index) => {
                    console.log(item);
                    const ExperienceComponent = item.component;
                    return <ExperienceComponent key={index} {...item.props} />;
                })}
                <IoIosAddCircle
                    onClick={() => {
                        setExperience((prev) => {
                            return [
                                ...prev,
                                {
                                    component: ExperienceBlock,
                                    props: {
                                        text: "test55",
                                    },
                                },
                            ];
                        });
                    }}
                    className="text-sky-400 text-4xl hover:brightness-110 cursor-pointer mx-auto"
                />

                <div className="flex-[0_0_100%]"></div>
                <SendFormButton
                    mxAuto={"mx-auto"}
                    handleSendForm={async () => {
                        console.log("SendFormButton");
                    }}
                />
            </div>
        </>
    );
};

export default Main;
