import React from "react";
import ResourceListItem from "../../../Shared/ResourceListItem";
import ActionButton from "../../../Shared/ActionButton";
import Spacer from "../../../Shared/Spacer";
import axios from "axios";
import { exceptionBlock } from "../../../../app";
import { URL as localUrl } from "../../../../app";
import { FaUserTie } from "react-icons/fa";
import ErrorContainer from "../../../Shared/ErrorContainer";

const AllUsers = ({ users }) => {
    const [innerUsers, setInnerUsers] = React.useState(users ?? []);
    const [inputText, setInputText] = React.useState("");
    const [errors, setErrors] = React.useState([]);

    const formRef = React.useRef(null);

    const sendForm = async () => {
        await exceptionBlock(async () => {
            const formData = new FormData(formRef.current);
            //console.log(...formData);
            const queryString = new URLSearchParams(formData).toString();
            //console.log(queryString);
            const response = await axios.get(
                `${localUrl}/endpoint/support/people/sort?${queryString}`,
            );
            const data = response.data;
            setInnerUsers(data?.users);
        });
    };

    return (
        <>
            <ErrorContainer errors={errors} />
            <Spacer type={"large"} />
            <form
                ref={formRef}
                onChange={() => sendForm()}
                onSubmit={(e) => e.preventDefault()}
                action={`/endpoint/support/people/sort`}
                method="get"
                className="flex flex-row flex-wrap flex-[0_0_100%] items-start content-start self-start lg:justify-start justify-center"
            >
                <input
                    placeholder="Przefiltruj po adresie email"
                    className="flex-[0_0_90%] max-w-[300px] px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black bg-transparent font-[700] text-gray-700 text-sm placeholder:text-gray-400"
                    type="text"
                    name="email"
                    value={inputText}
                    onChange={(e) => setInputText(e.currentTarget.value)}
                />
            </form>
            <Spacer type={"medium"} />
            <div className="gap-5 flex flex-row flex-wrap items-start justify-start content-start self-start flex-[0_0_100%]">
                {innerUsers?.map((user) => {
                    return (
                        <ResourceListItem
                            key={user?.id}
                            left={
                                <FaUserTie className="self-start text-4xl font-[700] text-gray-700" />
                            }
                            leftClasses={
                                "flex items-start justify-start content-start self-start"
                            }
                            right={user?.email + " " + user?.role}
                            rightClasses={"text-gray-500"}
                            breakLayout={
                                "flex-[0_0_100%] lg:flex-[0_0_45%] xl:flex-[0_0_30%]"
                            }
                            ActionButtons={[
                                <ActionButton
                                    key={user?.id + "pk"}
                                    text={"Pracownik"}
                                    typeClasses={
                                        "bg-purple-300/50 border border-solid border-purple-500/50 text-purple-400"
                                    }
                                    handleClick={async () => {
                                        const result = await exceptionBlock(
                                            async () => {
                                                const formData = new FormData();
                                                formData.append(
                                                    "_method",
                                                    "PATCH",
                                                );
                                                formData.append(
                                                    "role",
                                                    "employee",
                                                );
                                                const response =
                                                    await axios.post(
                                                        `${localUrl}/endpoint/support/people/${user?.id}`,
                                                        formData,
                                                        {
                                                            headers: {
                                                                "Content-Type":
                                                                    "multipart/form-data",
                                                            },
                                                        },
                                                    );
                                                const refreshResponse =
                                                    await axios.get(
                                                        `${localUrl}/endpoint/support/people/sort?email=`,
                                                    );
                                                const data =
                                                    refreshResponse.data;
                                                setInnerUsers(data?.users);
                                                setInputText("");
                                                setErrors("");
                                                return null;
                                            },
                                        );
                                        if (result !== null) {
                                            setErrors(result);
                                        }
                                    }}
                                />,
                                <ActionButton
                                    key={user?.id + "pd"}
                                    text={"Pracodawca"}
                                    typeClasses={
                                        "bg-orange-300/50 border border-solid border-orange-500/50 text-orange-400"
                                    }
                                    handleClick={async () => {
                                        const result = await exceptionBlock(
                                            async () => {
                                                const formData = new FormData();
                                                formData.append(
                                                    "_method",
                                                    "PATCH",
                                                );
                                                formData.append(
                                                    "role",
                                                    "employer",
                                                );
                                                const response =
                                                    await axios.post(
                                                        `${localUrl}/endpoint/support/people/${user?.id}`,
                                                        formData,
                                                        {
                                                            headers: {
                                                                "Content-Type":
                                                                    "multipart/form-data",
                                                            },
                                                        },
                                                    );
                                                const refreshResponse =
                                                    await axios.get(
                                                        `${localUrl}/endpoint/support/people/sort?email=`,
                                                    );
                                                const data =
                                                    refreshResponse.data;
                                                setInnerUsers(data?.users);
                                                setInputText("");
                                                setErrors("");
                                                return null;
                                            },
                                        );
                                        if (result !== null) {
                                            setErrors(result);
                                        }
                                    }}
                                />,
                            ]}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default AllUsers;
