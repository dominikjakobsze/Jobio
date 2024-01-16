import React from "react";
import OfferEditor from "./Components/OfferEditor";
import Heading from "./Components/Heading";
import MapMain from "./Components/MapMain";
import SalarySection from "./Components/SalarySection";
import TitleField from "./Components/TitleField";
import ImageFields from "./Components/ImageFields";
import axios from "axios";
import { exceptionBlock, URL as localUrl } from "../../../app";
import ErrorBlock from "./Components/ErrorBlock";

let counter = 0;
const Main = ({ offer }) => {
    console.log("Main " + counter++);
    const formRef = React.useRef(null);
    const [errors, setErrors] = React.useState([]);

    const sendForm = React.useCallback(async () => {
        //formRef.current.submit();
        const result = await exceptionBlock(async () => {
            const formData = new FormData(formRef.current);
            const response = await axios.post(
                localUrl + `/endpoint/employer/offer/${offer?.id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );
            const data = await response.data;
            return null;
        });
        if (result !== null) {
            return setErrors(result);
        }
        return (window.location.href = localUrl + "/offers");
        //console.log([...formData]);
    }, []);

    return (
        <form
            ref={formRef}
            action={`/endpoint/offer/employer/edit/${offer?.id}`}
            encType="multipart/form-data"
            method="post"
            className="f fr fw js cs is ss gap-7 custom-scroll-x relative bg-white py-10 px-5 rounded-2xl shadow-standard"
        >
            <Heading>Jak ma nazywać się ogłoszenie?</Heading>
            <TitleField title={offer?.title} />
            <Heading>Dodaj ikonę ogłoszenia</Heading>
            <ImageFields company_icon={offer?.company_icon} />
            <Heading>Widełki Płacowe</Heading>
            <SalarySection
                min_salary={offer?.min_salary}
                max_salary={offer?.max_salary}
            />
            <Heading>Wybierz Lokalizacje</Heading>
            <MapMain offer={offer} />
            <Heading>Stwórz treść swojego ogłoszenia</Heading>
            <OfferEditor page_offer={offer?.page_offer} />
            <div
                className="bg-sky-300/20 cursor-pointer mx-auto text-base font-[600] text-sky-300 py-1 px-4 border-2 border-solid border-sky-500/20 rounded-xl hover:brightness-110"
                onClick={() => sendForm()}
            >
                Prześlij Formularz
            </div>
            <input
                type="hidden"
                name="_method"
                value="PUT"
                className="hidden"
            ></input>
            <ErrorBlock errors={errors} />{" "}
        </form>
    );
};

export default Main;
