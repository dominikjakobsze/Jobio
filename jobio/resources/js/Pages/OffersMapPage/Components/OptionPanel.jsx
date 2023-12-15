import React from "react";
import OptionSection from "./OptionSection";
import { v4 as uuid } from "uuid";
import axios from "axios";
import SalaryOptionSection from "./SalaryOptionSection";

const OptionPanel = ({ items, setOffers }) => {
    const formRef = React.useRef(null);

    const handleSendForm = async () => {
        const formData = new FormData(formRef.current);
        const queryStrng = new URLSearchParams(formData).toString();
        console.log(queryStrng);
        try {
            const response = await axios.get(`/endpoint/toffers?${queryStrng}`);
            const results = await response.data;
            setOffers((prev) => {
                return [...results?.offers];
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    React.useEffect(() => {
        handleSendForm();
    }, []);

    return (
        <>
            <form
                ref={formRef}
                className="w-full max-w-[500px] h-full absolute z-[102] top-0 left-0 bg-white shadow-2xl overflow-x-hidden overflow-y-auto f fr fw js is cs ss p-3 gap-5"
            >
                <div onClick={(e) => handleSendForm()}>button</div>
                {React.useMemo(() => {
                    return <SalaryOptionSection key={uuid()} salary={items?.salary} />;
                }, [])}
                {React.useMemo(
                    () =>
                        items?.options?.map((option) => {
                            return (
                                <OptionSection key={uuid()} option={option} />
                            );
                        }),
                    [],
                )}
            </form>
        </>
    );
};

export default OptionPanel;
