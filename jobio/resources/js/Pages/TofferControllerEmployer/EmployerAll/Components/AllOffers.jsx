import React from "react";
import ResourceListItem from "../../../Shared/ResourceListItem";
import ActionButton from "../../../Shared/ActionButton";
import Spacer from "../../../Shared/Spacer";
import axios from "axios";
import { exceptionBlock } from "../../../../app";
import { URL as localUrl } from "../../../../app";

let counter = 0;
const AllOffers = ({ offers }) => {
    console.log("AllOffers " + counter++);

    const [innerOffers, setInnerOffers] = React.useState(offers ?? []);
    const [inputText, setInputText] = React.useState("");

    const formRef = React.useRef(null);

    const handleClickDelete = async (id) => {
        const result = await exceptionBlock(async () => {
            const formData = new FormData();
            formData.append("_method", "DELETE");
            const response = await axios.post(
                `${localUrl}/endpoint/employer/offer/${id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );
            const data = response.data;
            const refreshResponse = await axios.get(
                `${localUrl}/endpoint/employer/offers`,
            );
            const refreshData = refreshResponse.data;
            setInnerOffers(refreshData?.["offers"]);
            setInputText("");
        });
    };

    const handleClickEdit = async (id) => {
        window.location.href = `${localUrl}/employer/offer-edit/${id}`;
    };

    const handleClickShow = async (id) => {
        window.location.href = `${localUrl}/general/offer/${id}`;
    };

    const sendForm = async () => {
        await exceptionBlock(async () => {
            const formData = new FormData(formRef.current);
            //console.log(...formData);
            const queryString = new URLSearchParams(formData).toString();
            //console.log(queryString);
            const response = await axios.get(
                `${localUrl}/endpoint/employer/offers/sort?${queryString}`,
            );
            const data = response.data;
            setInnerOffers(data?.offers);
        });
    };

    return (
        <>
            <form
                ref={formRef}
                onChange={() => sendForm()}
                onSubmit={(e) => e.preventDefault()}
                action={`/endpoint/support/offers/sort`}
                method="get"
                className="flex flex-row flex-wrap flex-[0_0_100%] items-start content-start self-start lg:justify-start justify-center"
            >
                <input
                    placeholder="Przefiltruj po nazwie"
                    className="flex-[0_0_90%] max-w-[300px] px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black bg-transparent font-[700] text-gray-700 text-sm placeholder:text-gray-400"
                    type="text"
                    name="title"
                    value={inputText}
                    onChange={(e) => setInputText(e.currentTarget.value)}
                />
            </form>
            <Spacer type={"medium"} />
            <div className="gap-5 flex flex-row flex-wrap items-start justify-start content-start self-start flex-[0_0_100%]">
                {innerOffers?.map((offer) => {
                    return (
                        <ResourceListItem
                            key={offer?.id}
                            left={
                                <img
                                    className="rounded-full flex-[0_0_75px] min-w-[75px] max-w-[75px] h-[75px] bg-gray-300"
                                    src={offer?.company_icon}
                                />
                            }
                            leftClasses={
                                "flex items-start justify-start content-start self-start"
                            }
                            right={offer?.title}
                            rightClasses={"text-gray-500"}
                            rightText={"Nazwa ogłoszenia:   "}
                            breakLayout={
                                "flex-[0_0_100%] lg:flex-[0_0_45%] xl:flex-[0_0_30%]"
                            }
                            ActionButtons={[
                                <ActionButton
                                    key={offer?.id + offer?.title}
                                    text={"Usuń"}
                                    typeClasses={
                                        "bg-purple-300/50 border border-solid border-purple-500/50 text-purple-400"
                                    }
                                    handleClick={async () =>
                                        await handleClickDelete(offer?.id)
                                    }
                                />,
                                <ActionButton
                                    key={offer?.id + offer?.title}
                                    text={"Edytuj"}
                                    typeClasses={
                                        "bg-yellow-300/50 border border-solid border-yellow-500/50 text-yellow-400"
                                    }
                                    handleClick={async () =>
                                        await handleClickEdit(offer?.id)
                                    }
                                />,
                                <ActionButton
                                    key={offer?.id + offer?.title}
                                    text={"Podgląd"}
                                    typeClasses={
                                        "bg-indigo-300/50 border border-solid border-indigo-500/50 text-indigo-400"
                                    }
                                    handleClick={async () =>
                                        await handleClickShow(offer?.id)
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

export default AllOffers;
