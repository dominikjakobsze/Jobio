import React from "react";

const FilterCheckbox = ({ option_value, option_id }) => {
    const checkboxRef = React.useRef(null);
    const [checkStyles, setCheckStyles] = React.useState(false);

    return (
        <label
            onClick={(e) => {
                e.preventDefault();
                checkboxRef.current.checked = !checkboxRef.current.checked;
                setCheckStyles((prev) => !prev);
            }}
            className={`${
                checkStyles
                    ? "bg-gray-700 hover:bg-gray-700 text-gray-100"
                    : null
            } flex-[0_1_auto] flex flex-row flex-nowrap items-start justify-start self-start content-start py-1 px-3 shadow-standard cursor-pointer hover:bg-gray-200`}
        >
            <div className="flex-[0_0_auto]">
                <input
                    className="hidden"
                    ref={checkboxRef}
                    type="checkbox"
                    name="toption_id[]"
                    value={option_id}
                />
                {option_value}
            </div>
        </label>
    );
};

export default FilterCheckbox;
