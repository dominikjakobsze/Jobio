import SelectBlock from "../../Shared/SelectBlock";
import { exceptionBlock } from "../../../app";
import axios from "axios";

const Main = () => {
    return (
        <SelectBlock
            handleSendForm={async (formRef) => {
                const result = await exceptionBlock(async () => {
                    formRef.current.submit();
                    // const formData = new FormData(formRef.current);
                    // console.log(...formData);
                    return null;
                });
                console.log(result);
            }}
        />
    );
};

export default Main;
