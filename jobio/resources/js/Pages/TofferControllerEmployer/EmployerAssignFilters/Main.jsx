import React from "react";
import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";
import Spacer from "../../Shared/Spacer";
import FilterCheckbox from "./Components/FilterCheckbox";
import OfferPreview from "./Components/OfferPreview";
import { exceptionBlock, URL as localUrl } from "../../../app";
import SendFormButton from "../../Shared/SendFormButton";
import axios from "axios";
import ErrorContainer from "../../Shared/ErrorContainer";

const Main = ({ offer, options, active_options }) => {
    console.log(active_options);
    const [errors, setErrors] = React.useState([]);
    const formRef = React.useRef(null);
    const handleSendForm = async () => {
        const result = await exceptionBlock(async () => {
            const formData = new FormData(formRef.current);
            const response = await axios.post(
                `${localUrl}/endpoint/employer/offer-filters/${offer?.id}`,
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
        return (window.location.href = `${localUrl}/employer/offers`);
    };
    return (
        <>
            <OfferPreview offer={offer} />
            <Spacer type={"small"} />
            <ShHeader title={"Przypisz filtry do ogłoszenia"} />
            <Spacer type={"small"} />
            <ShSubHeader>
                Umożliwia przypisanie filtrów do ofert pracy. Jeśli posiadasz
                aktywne filtry, to zostaną one wyświetlone w osobnym wierszu,
                każde wybranie i zatwierdzenie filtrów spowoduje nadpisanie
                filtrów.
            </ShSubHeader>
            <Spacer type={"extra-large"} />
            <ErrorContainer errors={errors} />
            <Spacer type={"medium"} />
            {active_options?.length > 0 ? (
                <>
                    <ShHeader textSize={"text-xl"} title={"Aktywne Filtry"} />
                    <Spacer type={"medium"} />
                    <div className="flex-[0_0_100%] flex flex-row flex-wrap justify-start content-start items-start self-start font-[700] text-gray-100 text-xs gap-3">
                        {active_options?.map((active_option) => {
                            return (
                                <div
                                    className="flex-[0_1_auto] px-5 py-2 shadow-standard bg-gray-700"
                                    key={active_option?.toption?.id}
                                >
                                    {active_option?.toption?.option_value}
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : null}
            <Spacer type={"extra-large"} />
            <form
                ref={formRef}
                action={`/endpoint/employer/offer-filters/${offer?.id}`}
                method="post"
                encType="multipart/form-data"
                className="flex-[0_0_100%] flex flex-row flex-wrap justify-start content-start items-start self-start font-[700] text-gray-700 text-xs"
            >
                {Object?.entries(options)?.map(([title, options]) => {
                    return (
                        <div
                            className="flex-[0_0_100%] flex flex-row flex-wrap justify-start content-start items-start self-start"
                            key={title}
                        >
                            <Spacer type={"small"} />
                            <ShHeader textSize={"text-xl"} title={title} />
                            <Spacer type={"medium"} />
                            <div className="flex flex-[0_0_100%] flex-row flex-wrap items-start justify-start self-start content-start gap-3">
                                {options?.map((option) => {
                                    return (
                                        <FilterCheckbox
                                            key={option?.id}
                                            option_value={option?.option_value}
                                            option_id={option?.id}
                                        />
                                    );
                                })}
                            </div>
                            <Spacer type={"large"} />
                        </div>
                    );
                })}
                <input
                    readOnly
                    className="hidden"
                    type="text"
                    name="_method"
                    value={"PUT"}
                />
            </form>
            <Spacer type={"small"} />
            <SendFormButton handleSendForm={() => handleSendForm()} />
        </>
    );
};

export default Main;
