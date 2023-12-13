import React from "react";

const OptionCheckbox = ({ itemValue, itemKey }) => {
    const checkboxRef = React.useRef(null);
    const buttonRef = React.useRef(null);
    //functions
    const handleCheck = (e) => {
        e?.preventDefault();
        checkboxRef.current.checked = !checkboxRef.current.checked;
        buttonRef.current.classList.toggle("bg-gray-100");
        buttonRef.current.classList.toggle("text-gray-700");
        buttonRef.current.classList.toggle("text-gray-100");
        buttonRef.current.classList.toggle("bg-gray-800");
    };
    //logic
    if (itemValue === undefined || itemValue === null) {
        return null;
    }

    return (
        <>
            <label
                onClick={(e) => handleCheck(e)}
                className="flex-[0_1_auto] f fr fnw js is cs ss bg-red-300 p-1 cup"
            >
                <input
                    ref={checkboxRef}
                    type="checkbox"
                    name={itemKey}
                    value={itemValue}
                    className="hidden"
                />
                <p
                    ref={buttonRef}
                    className="flex-[0_0_auto] bg-gray-100 px-3 py-[1px] rounded-2xl text-sm text-gray-700 font-[400]"
                >
                    {itemValue}
                </p>
            </label>
        </>
    );
};

export default OptionCheckbox;
