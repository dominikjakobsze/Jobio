import React from "react";
import ShHeader from "../../Shared/ShHeader";
import ShSubHeader from "../../Shared/ShSubHeader";
import Spacer from "../../Shared/Spacer";
import FilterCheckbox from "./Components/FilterCheckbox";
import OfferPreview from "./Components/OfferPreview";
import { exceptionBlock } from "../../../app";
import SendFormButton from "../../Shared/SendFormButton";
import axios from "axios";

const Main = ({ offer, options }) => {
    const formRef = React.useRef(null);
    const handleSendForm = async () => {
        formRef.current.submit();
        // const result = await exceptionBlock(async () => {
        //     const formData = new FormData(formRef.current);
        //     console.log(...formData);
        //     return null;
        // });
        // if (result !== null) {
        //     console.log(result);
        // }
    };
    return (
        <>
            <OfferPreview offer={offer} />
            <Spacer type={"small"} />
            <ShHeader title={"Przypisz filtry do ogłoszenia"} />
            <Spacer type={"small"} />
            <ShSubHeader>
                Umożliwia przypisanie filtrów do ofert pracy
            </ShSubHeader>
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
