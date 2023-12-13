import React from "react";
import OptionSection from "./OptionSection";
import { v4 as uuid } from 'uuid';

const OptionPanel = ({ items }) => {
    const formRef = React.useRef(null);
    return (
        <>
            <form
                ref={formRef}
                className="w-full max-w-[500px] h-full absolute z-[102] top-0 left-0 bg-white shadow-2xl overflow-x-hidden overflow-y-auto f fr fw js is cs ss p-3 gap-5"
            >
                {items?.options?.map((option) => {
                    return <OptionSection key={uuid()} option={option} />;
                })}
            </form>
        </>
    );
};

export default OptionPanel;
