import React from "react";
import OfferEditor from "./Components/OfferEditor";
import Heading from "./Components/Heading";
import MapMain from "./Components/MapMain";
import SalarySection from "./Components/SalarySection";
import TitleField from "./Components/TitleField";
import ImageFields from "./Components/ImageFields";
import axios from "axios";
import { exceptionBlock, URL as localUrl } from "../../app";
import ErrorBlock from "./Components/ErrorBlock";

let counter = 0;
const Main = () => {
    console.log("Main " + counter++);
    const formRef = React.useRef(null);
    const [errors, setErrors] = React.useState([]);

    const sendForm = React.useCallback(async () => {
        //formRef.current.submit();
        const result = await exceptionBlock(async () => {
            const formData = new FormData(formRef.current);
            const response = await axios.post(
                localUrl + `/endpoint/offer/employer/create`,
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
            action="/endpoint/offer/employer/create"
            encType="multipart/form-data"
            method="post"
            className="f fr fw js cs is ss gap-7 custom-scroll-x relative h-auto p-5"
        >
            <Heading>Jak ma nazywać się ogłoszenie?</Heading>
            <TitleField />
            <Heading>Dodaj ikonę ogłoszenia</Heading>
            <ImageFields />
            <Heading>Widełki Płacowe</Heading>
            <SalarySection />
            <Heading>Wybierz Lokalizacje</Heading>
            <MapMain />
            <Heading>Stwórz treść swojego ogłoszenia</Heading>
            <OfferEditor />
            <div
                className="bg-sky-300/20 cursor-pointer mx-auto text-base font-[600] text-sky-300 py-1 px-4 border-2 border-solid border-sky-500/20 rounded-xl hover:brightness-110"
                onClick={() => sendForm()}
            >
                Prześlij Formularz
            </div>
            <ErrorBlock errors={errors} />{" "}
        </form>
    );
};

export default Main;
