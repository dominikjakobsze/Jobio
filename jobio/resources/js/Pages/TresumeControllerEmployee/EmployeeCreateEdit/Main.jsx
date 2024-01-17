import React from "react";
import SendFormButton from "../../Shared/SendFormButton";
import CustomTextArea from "./Components/CustomTextArea";
import { IoIosAddCircle } from "react-icons/io";
import EducationBlock from "./Components/EducationBlock";
import ExperienceBlock from "./Components/ExperienceBlock";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
    const formRef = React.useRef(null);
    const [education, setEducation] = React.useState([]);
    const [experience, setExperience] = React.useState([]);
    return (
        <>
            <form
                ref={formRef}
                method="post"
                encType="multipart/form-data"
                action="/endpoint/employee/resume-create-edit"
                className="flex-[0_0_100%] shadow-standard p-5 flex flex-wrap flex-row items-start justify-start content-start self-start rounded-2xl bg-white gap-1"
            >
                <input
                    className="hidden"
                    type="text"
                    name="_method"
                    value="PATCH"
                    readOnly={true}
                />
                <CustomTextArea name={"name"} placeholder={"Imię i Nazwisko"} />
                <CustomTextArea
                    name={"address"}
                    placeholder={"Dane Adresowe"}
                    className={"text-sm text-gray-400 font-[400]"}
                />
                <CustomTextArea
                    name={"contact"}
                    placeholder={"Dane Kontaktowe"}
                    className={"text-sm text-gray-400 font-[400]"}
                />
                <h2 className="resize-none flex-[0_0_100%] p-2 outline-none text-xl text-gray-600 font-[700] border-transparent placeholder:opacity-[0.3] focus:border-transparent focus:bg-gray-100 focus:ring-0 overflow-hidden whitespace-pre-wrap text-clip break-all">
                    Podsumowanie
                </h2>
                <CustomTextArea
                    name={"summary"}
                    placeholder={"Podsumowanie"}
                    className={"text-sm text-gray-600 font-[600]"}
                />
                <h2 className="resize-none flex-[0_0_100%] p-2 outline-none text-xl text-gray-600 font-[700] border-transparent placeholder:opacity-[0.3] focus:border-transparent focus:bg-gray-100 focus:ring-0 overflow-hidden whitespace-pre-wrap text-clip break-all">
                    Edukacja
                </h2>
                {education?.map((item, index) => {
                    if (item?.componentName === "EducationBlock") {
                        return (
                            <EducationBlock
                                key={item?.props?.id}
                                setEducation={setEducation}
                                {...item?.props}
                            />
                        );
                    }
                })}
                <IoIosAddCircle
                    onClick={() => {
                        setEducation((prev) => {
                            return [
                                ...prev,
                                {
                                    componentName: "EducationBlock",
                                    props: {
                                        id: uuidv4(),
                                        firstVal: "",
                                        secondVal: "",
                                        thirdVal: "",
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
                    if (item?.componentName === "ExperienceBlock") {
                        return (
                            <ExperienceBlock
                                key={item?.props?.id}
                                setExperience={setExperience}
                                {...item?.props}
                            />
                        );
                    }
                })}
                <IoIosAddCircle
                    onClick={() => {
                        setExperience((prev) => {
                            return [
                                ...prev,
                                {
                                    componentName: "ExperienceBlock",
                                    props: {
                                        id: uuidv4(),
                                        firstVal: "",
                                        secondVal: "",
                                        thirdVal: "",
                                    },
                                },
                            ];
                        });
                    }}
                    className="text-sky-400 text-4xl hover:brightness-110 cursor-pointer mx-auto"
                />
                <h2 className="resize-none flex-[0_0_100%] p-2 outline-none text-xl text-gray-600 font-[700] border-transparent placeholder:opacity-[0.3] focus:border-transparent focus:bg-gray-100 focus:ring-0 overflow-hidden whitespace-pre-wrap text-clip break-all">
                    Umiejętności
                </h2>
                <CustomTextArea
                    name={"skills"}
                    placeholder={"Opisz swoje umiejętności"}
                    className={"text-sm text-gray-600 font-[600]"}
                />
                <SendFormButton
                    mxAuto={"mx-auto mt-10"}
                    handleSendForm={async () => {
                        formRef.current.submit();
                        // const formData = new FormData(formRef.current);
                        // console.log(...formData);
                    }}
                />
            </form>
        </>
    );
};

export default Main;
