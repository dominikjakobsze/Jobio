import SelectBlock from "../../Shared/SelectBlock";
import { exceptionBlock } from "../../../app";
import axios from "axios";
import React from "react";
import { URL as localUrl } from "../../../app";
import ErrorContainer from "../../Shared/ErrorContainer";
import Spacer from "../../Shared/Spacer";

const Main = () => {
    const handleSendForm = React.useCallback(async (formRef) => {
        const result = await exceptionBlock(async () => {
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
            setErrors(() => {
                return result;
            });
            return;
        }
        return (window.location.href = localUrl + "/options");
    }, []);

    const [errors, setErrors] = React.useState([]);

    return (
        <>
            {React.useMemo(() => {
                return <SelectBlock handleSendForm={handleSendForm} />;
            }, [])}
            <Spacer type={"large"} />
            <ErrorContainer errors={errors} />
        </>
    );
};

export default Main;
