import React from "react";
import useAutosizeTextArea from "../../../CustomHooks/useAutosizeTextArea";

const CustomTextArea = ({
    placeholder,
    className,
    defaultTextareaValue,
    setPropsHolder,
    nameKey,
}) => {
    const textareaRef = React.useRef(null);
    const [textarea, setTextarea] = React.useState(defaultTextareaValue ?? "");
    useAutosizeTextArea(textareaRef.current, textarea);

    React.useEffect(() => {
        if (typeof setPropsHolder === "function") {
            setPropsHolder(nameKey, textarea);
        }
    }, [textarea]);

    return (
        <textarea
            ref={textareaRef}
            onChange={(e) => {
                setTextarea(e.currentTarget.value);
            }}
            defaultValue={textarea}
            placeholder={placeholder ?? ""}
            rows={1}
            cols={1}
            className={`resize-none flex-[0_0_100%] bg-gray-100 p-2 outline-none border-transparent placeholder:opacity-[0.3] focus:border-transparent focus:bg-gray-100 focus:ring-0 overflow-hidden whitespace-pre-wrap text-clip break-all ${
                className ?? "text-3xl text-gray-600 font-[700]"
            }`}
        />
    );
};

export default CustomTextArea;
