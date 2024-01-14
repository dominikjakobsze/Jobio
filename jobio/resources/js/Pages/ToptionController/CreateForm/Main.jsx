import SelectBlock from "../../Shared/SelectBlock";
import { exceptionBlock } from "../../../app";
import axios from "axios";
import React from "react";
import { URL as localUrl } from "../../../app";
import ErrorContainer from "../../Shared/ErrorContainer";

const Main = () => {
    const handleSendForm = React.useCallback(async (formRef) => {
        const result = await exceptionBlock(async () => {
            console.log(formRef);
            //formRef.current.submit();
            const formData = new FormData(formRef.current);
            const response = await axios.post("/endpoint/option", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            const result = response.data;
            return null;
        });
        if (result !== null) {
            //setErrors
            console.log(result);
            return;
        }
        return (window.location.href = localUrl + "/options");
    }, []);

    return (
        <>
            {React.useMemo(() => {
                return <SelectBlock handleSendForm={handleSendForm} />;
            }, [])}
            <ErrorContainer />
        </>
    );
};

export default Main;
