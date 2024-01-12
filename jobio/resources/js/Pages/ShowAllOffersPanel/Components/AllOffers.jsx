import { FaPlus } from "react-icons/fa";
import { URL as localUrl, exceptionBlock } from "../../../app";
import axios from "axios";
import React from "react";

const AllOffers = ({ offers }) => {
    const [nestedOffers, setNestedOffers] = React.useState(offers ?? []);

    return (
        <div className="flex-[0_0_100%] px-10 f fr fw js is cs ss gap-5">
            <div className="f fr fw js is cs ss flex-[0_0_100%] mb-5">
                <div
                    onClick={() => {
                        window.location.href =
                            localUrl + "/offer/employer/create";
                    }}
                    className="flex-[0_1_auto] bg-sky-200/50 border-2 border-solid border-sky-400/50 text-2xl font-[700] text-sky-300 p-5 rounded-xl my-5 hover:brightness-110 cursor-pointer"
                >
                    <FaPlus />
                </div>
            </div>
            {nestedOffers?.map((offer) => {
                return (
                    <div
                        key={offer?.id}
                        className="flex-[0_0_100%] overflow-hidden f fr fnw js ic cs ss gap-5 border-solid border-0 border-t-2 border-gray-200 pt-7"
                    >
                        <img
                            onClick={() => console.log(nestedOffers)}
                            src={offer?.company_icon}
                            alt=""
                            className="flex-[0_0_50px] ss h-[50px] object-cover rounded-lg bg-gray-200"
                        />
                        <h1 className="flex-[1_0_0] sc whitespace-pre-wrap text-sm font-[700] text-gray-700">
                            {offer?.title}
                        </h1>
                        <div className="flex-[0_0_auto] f fr fnw js ic cs sc gap-5">
                            <p
                                onClick={() => {
                                    window.location.href =
                                        localUrl +
                                        `/offer/employer/edit/${offer?.id}`;
                                }}
                                className="flex-[0_0_auto] sc px-5 py-2 cursor-pointer bg-indigo-300/50 border-2 border-solid border-indigo-500/50 text-indigo-400 text-sm font-[700] rounded-xl hover:brightness-110"
                            >
                                Edytuj
                            </p>
                            <p
                                onClick={async () => {
                                    // formRef.current.submit();
                                    const result = await exceptionBlock(
                                        async () => {
                                            const formData = new FormData();
                                            formData.append(
                                                "_method",
                                                "DELETE",
                                            );
                                            const response = await axios.post(
                                                localUrl +
                                                    `/endpoint/offer/employer/delete/${offer?.id}`,
                                                formData,
                                                {
                                                    headers: {
                                                        "Content-Type":
                                                            "multipart/form-data",
                                                    },
                                                },
                                            );
                                            const data = await response.data;
                                            return null;
                                        },
                                    );
                                    if (result === null) {
                                        const nextResult = await exceptionBlock(
                                            async () => {
                                                const response =
                                                    await axios.get(
                                                        localUrl +
                                                            "/endpoint/offers/employer",
                                                    );
                                                const data =
                                                    await response.data;
                                                return data;
                                            },
                                        );
                                        setNestedOffers(nextResult?.offers);
                                    }
                                }}
                                className="flex-[0_0_auto] sc px-5 py-2 cursor-pointer bg-lime-300/50 border-2 border-solid border-lime-500/50 text-lime-400 text-sm font-[700] rounded-xl hover:brightness-110"
                            >
                                Usuń
                            </p>
                            <p
                                onClick={() => {
                                    window.location.href =
                                        localUrl + `/offer/${offer?.id}`;
                                }}
                                className="flex-[0_0_auto] sc px-5 py-2 cursor-pointer bg-teal-300/50 border-2 border-solid border-teal-500/50 text-teal-400 text-sm font-[700] rounded-xl hover:brightness-110"
                            >
                                Podgląd
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AllOffers;
