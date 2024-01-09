import React from "react";
import OfferEditor from "./Components/OfferEditor";
import Heading from "./Components/Heading";
import MapMain from "./Components/MapMain";
import SalarySection from "./Components/SalarySection";

let counter = 0;
const Main = () => {
    console.log("Main " + counter++);
    const formRef = React.useRef(null);

    const sendForm = React.useCallback(async () => {
        const formData = new FormData(formRef.current);
        console.log([...formData]);
    }, []);

    return (
        <form
            ref={formRef}
            action="/endpoint/file"
            encType="multipart/form-data"
            method="post"
            className="f fr fw js cs is ss gap-7 custom-scroll-x relative h-auto p-5"
        >
            <Heading>Widełki Płacowe</Heading>
            <SalarySection />
            <Heading>Wybierz Lokalizacje</Heading>
            <MapMain />
            <Heading>Stwórz treść swojego ogłoszenia</Heading>
            <OfferEditor />
            <div onClick={() => sendForm()}>teeetet</div>
        </form>
    );
};

export default Main;
