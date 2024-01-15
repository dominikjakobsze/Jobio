import React from "react";

const OptionCheckbox = ({ itemValue, itemKey }) => {
    console.log("OptionCheckbox");

    const inputRef = React.useRef();
    const paraRef = React.useRef();
    const testRef = React.useRef(false);

    const toggleCheckbox = React.useCallback((e) => {
        e.preventDefault();
        testRef.current = true;
        inputRef.current.checked = !inputRef.current.checked;
        if (inputRef.current.checked === true) {
            paraRef.current.className =
                "flex-[0_0_auto] bg-gray-800 px-1 md:px-3 py-[2px] md:py-[3px] rounded-2xl text-sm text-gray-100 font-[400]";
        } else {
            paraRef.current.className =
                "flex-[0_0_auto] bg-gray-100 px-1 md:px-3 py-[2px] md:py-[3px] rounded-2xl text-sm text-gray-700 font-[400]";
        }
    }, []);

    return (
        <>
            <label
                onClick={(e) => toggleCheckbox(e)}
                className="flex-[0_1_auto] f fr fnw js is cs ss p-1 cup"
            >
                <input
                    ref={inputRef}
                    type="checkbox"
                    name={itemKey}
                    value={itemValue}
                    className="hidden"
                />
                <p
                    ref={paraRef}
                    className="flex-[0_0_auto] bg-gray-100 px-1 md:px-3 py-[2px] md:py-[3px] rounded-2xl text-sm text-gray-700 font-[400]"
                >
                    {itemValue}
                </p>
            </label>
        </>
    );
};

export default OptionCheckbox;
