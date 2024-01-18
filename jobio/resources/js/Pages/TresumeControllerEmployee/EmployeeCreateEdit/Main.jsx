import React from "react";
import SendFormButton from "../../Shared/SendFormButton";
import CustomTextArea from "./Components/CustomTextArea";
import { IoIosAddCircle } from "react-icons/io";
import EducationBlock from "./Components/EducationBlock";
import ExperienceBlock from "./Components/ExperienceBlock";
import { v4 as uuidv4 } from "uuid";
import { URL as localUrl, exceptionBlock } from "../../../app";
import axios from "axios";
import ErrorContainer from "../../Shared/ErrorContainer";

const Main = ({ resume }) => {
    console.log(resume?.blocks?.educationBlock);
    const [errors, setErrors] = React.useState([]);
    const formRef = React.useRef(null);
    const [education, setEducation] = React.useState(
        resume?.blocks?.educationBlock ?? [],
    );
    const [experience, setExperience] = React.useState(
        resume?.blocks?.experienceBlock ?? [],
    );
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
                <CustomTextArea
                    defaultTextareaValue={resume?.name ?? ""}
                    name={"name"}
                    placeholder={"Imię i Nazwisko"}
                />
                <CustomTextArea
                    defaultTextareaValue={resume?.address ?? ""}
                    name={"address"}
                    placeholder={"Dane Adresowe"}
                    className={"text-sm text-gray-400 font-[400]"}
                />
                <CustomTextArea
                    defaultTextareaValue={resume?.contact ?? ""}
                    name={"contact"}
                    placeholder={"Dane Kontaktowe"}
                    className={"text-sm text-gray-400 font-[400]"}
                />
                <h2 className="resize-none flex-[0_0_100%] p-2 outline-none text-xl text-gray-600 font-[700] border-transparent placeholder:opacity-[0.3] focus:border-transparent focus:bg-gray-100 focus:ring-0 overflow-hidden whitespace-pre-wrap text-clip break-all">
                    Podsumowanie
                </h2>
                <CustomTextArea
                    defaultTextareaValue={resume?.summary ?? ""}
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
                        console.log(education);
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
                <div className="flex-[0_0_100%] mt-10"></div>
                <ErrorContainer errors={errors} />
                <SendFormButton
                    mxAuto={"mx-auto mt-10"}
                    handleSendForm={async () => {
                        // formRef.current.submit();
                        const result = await exceptionBlock(async () => {
                            const formData = new FormData(formRef.current);
                            const response = await axios.post(
                                `${localUrl}/endpoint/employee/resume-create-edit`,
                                formData,
                                {
                                    headers: {
                                        "Content-Type": "multipart/form-data",
                                    },
                                },
                            );
                            return null;
                        });
                        if (result !== null) {
                            setErrors(result);
                            return;
                        }
                        window.location.href = `${localUrl}/employee/resume-create-edit`;
                    }}
                />
            </form>
        </>
    );
};

export default Main;
