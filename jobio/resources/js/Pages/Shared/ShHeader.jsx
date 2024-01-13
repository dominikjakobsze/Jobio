const ShHeader = ({ title, textSize, fontWeight }) => {
    return (
        <h1
            className={`flex-[0_0_100%] ${textSize ?? "text-3xl"} ${
                fontWeight ?? "font-[700]"
            } text-gray-700`}
        >
            {title}
        </h1>
    );
};

export default ShHeader;
