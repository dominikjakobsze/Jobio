import React from "react";
import OfferEditor from "./Components/OfferEditor";

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
            className="f fr fw js cs is ss gap-5 custom-scroll-x relative h-auto"
        >
            <div onClick={() => sendForm()}>teeetet</div>
            <OfferEditor />
        </form>
    );
};

export default Main;
