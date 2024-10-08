import React from "react";
import ErrorContainer from "../../../Shared/ErrorContainer";
import { URL as localUrl, exceptionBlock } from "../../../../app";
import axios from "axios";

const ApplySection = ({ offer }) => {
    console.log("ApplySection", offer);
    const [errors, setErrors] = React.useState([]);
    const [success, setSuccess] = React.useState(false);
    return (
        <>
            <div className="bg-transparent p-5 w-full mx-auto f fr fw ss jc is cs mt-10">
                <div
                    onClick={async () => {
                        const result = await exceptionBlock(async () => {
                            const response = await axios.get(
                                `${localUrl}/endpoint/employee/resume/apply/offer/${offer?.id}`,
                            );
                            return null;
                        });
                        if (result !== null) {
                            setErrors(result);
                            return;
                        }
                        setErrors([]);
                        setSuccess((prev) => !prev);
                    }}
                    className={`flex-[0_1_auto] text-gray-100 tracking-wide py-2 px-12 rounded-full text-base font-[700] shadow-lg cup hover:brightness-125 ${
                        success ? "bg-lime-600" : "bg-sky-600"
                    }`}
                >
                    {success ? "Zaaplikowano!" : "Zaaplikuj"}
                </div>
            </div>
            <ErrorContainer errors={errors} />
        </>
    );
};

export default ApplySection;
