import React from "react";
import OptionSection from "./OptionSection";
import { v4 as uuid } from "uuid";
import axios from "axios";
import SalaryOptionSection from "./SalaryOptionSection";
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
import {
    animateOptionPanel,
    bindElementToAnimateOptionPanel,
} from "../animations";

const OptionPanel = ({ items, setOffers }) => {
    const formRef = React.useRef(null);

    const handleSendForm = async () => {
        const formData = new FormData(formRef.current);
        const queryStrng = new URLSearchParams(formData).toString();
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

    const closeOptionPanel = () => {
        animateOptionPanel.reverse();
    };

    React.useEffect(() => {
        handleSendForm();
        bindElementToAnimateOptionPanel(formRef.current);
    }, []);

    return (
        <>
            <form
                ref={formRef}
                className="w-full max-w-[500px] h-full absolute z-[102] top-0 left-0 translate-x-[-120%] bg-white/80 backdrop-blur shadow-2xl overflow-x-hidden overflow-y-auto f fr fw js is cs ss py-3 p-[5px] md:p-3 gap-2 md:gap-5"
            >
                <div className="flex-[0_0_100%] f fr fnw justify-end is cs ss gap-2 md:gap-4">
                    <div className="flex-[0_0_auto] f fr fw js is cs ss p-3 bg-gray-100 rounded-full hover:contrast-[80%] cup">
                        <IoSearchSharp
                            className=" w-[25px] h-[25px] text-gray-700"
                            onClick={(e) => handleSendForm()}
                        />
                    </div>
                    <div className="flex-[0_0_auto] f fr fw js is cs ss p-3 bg-gray-100 rounded-full hover:contrast-[80%] cup">
                        <IoCloseSharp
                            className=" w-[25px] h-[25px] text-gray-700"
                            onClick={() => closeOptionPanel()}
                        />
                    </div>
                </div>
                <div className="flex-[0_0_100%] p-[0.5px] bg-gray-200"></div>
                {React.useMemo(() => {
                    return (
                        <SalaryOptionSection
                            key={uuid()}
                            salary={items?.salary}
                        />
                    );
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
