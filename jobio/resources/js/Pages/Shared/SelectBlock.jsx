import React from "react";
import { FaArrowsUpDown } from "react-icons/fa6";
import SendFormButton from "./SendFormButton";

let counter = 0;
const SelectBlock = ({ handleSendForm }) => {
    console.log("SelectBlock " + counter++);
    const formRef = React.useRef(null);
    const selectRef = React.useRef(null);
    const fakeSelectRef = React.useRef(null);
    const fakeBottomContainerSelectRef = React.useRef(null);

    const handleSelectChange = (e, optionValue) => {
        e.preventDefault();
        e.stopPropagation();
        selectRef.current.value = optionValue;
        fakeSelectRef.current.textContent = optionValue;
        fakeBottomContainerSelectRef.current.style.display = "none";
    };

    const actionSelect = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (fakeBottomContainerSelectRef.current.style.display === "flex") {
            fakeBottomContainerSelectRef.current.style.display = "none";
        } else {
            fakeBottomContainerSelectRef.current.style.display = "flex";
        }
    };

    return (
        <div className="flex-[0_0_100%] flex flex-wrap flex-row items-start justify-start content-start self-start">
            <form
                ref={formRef}
                action={`/endpoint/option`}
                encType="multipart/form-data"
                method="post"
                className="flex-[0_0_100%] flex flex-wrap flex-row items-start justify-center lg:justify-start content-start self-start"
            >
                <select className="hidden" name="option_type" ref={selectRef}>
                    <option value="S">S</option>
                    <option value="D">D</option>
                    <option value="T">T</option>
                </select>
                <div
                    className="flex-[0_0_85%] max-w-[350px] bg-gray-200 px-5 py-2 flex flex-row flex-nowrap items-center justify-start content-start self-start gap-2 rounded-xl cursor-pointer font-[700] text-gray-500 relative"
                    onClick={(e) => actionSelect(e)}
                >
                    <h1
                        ref={fakeSelectRef}
                        className="flex-[1_0_0] text-center text-sm"
                    >
                        S
                    </h1>
                    <FaArrowsUpDown className="flex-[0_1_auto] text-lg text-gray-700" />
                    <div
                        className="top-[120%] left-0 absolute max-h-[200px] w-full hidden flex-wrap flex-row items-start justify-start content-start self-start bg-gray-200 p-2 gap-1 overflow-x-hidden overflow-y-auto text-sm"
                        ref={fakeBottomContainerSelectRef}
                    >
                        <p
                            onClick={(e) => handleSelectChange(e, "S")}
                            className="flex-[0_0_100%] p-1 hover:bg-gray-300"
                        >
                            S
                        </p>
                        <p
                            onClick={(e) => handleSelectChange(e, "D")}
                            className="flex-[0_0_100%] p-1 hover:bg-gray-300"
                        >
                            D
                        </p>
                        <p
                            onClick={(e) => handleSelectChange(e, "T")}
                            className="flex-[0_0_100%] p-1 hover:bg-gray-300"
                        >
                            T
                        </p>
                    </div>
                </div>
                <div className="flex-[0_0_100%] p-5"></div>
                <input
                    type="text"
                    placeholder="Nazwa Filtru"
                    name="option_value"
                    className="px-0.5 bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black flex-[0_0_85%] max-w-[350px] placeholder:font-[700] placeholder:text-gray-300 text-base font-[700] text-gray-600"
                />
                <div className="flex-[0_0_100%] p-5"></div>
                <SendFormButton
                    formRef={formRef}
                    handleSendForm={handleSendForm}
                />
            </form>
        </div>
    );
};

export default SelectBlock;
