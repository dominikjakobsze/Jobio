const ShHeader = ({ title, textSize, fontWeight, textAlign }) => {
    return (
        <h1
            className={`flex-[0_0_100%] ${textSize ?? "text-3xl"} ${
                fontWeight ?? "font-[700]"
            } text-gray-700 ${textAlign ?? "text-left"}`}
        >
            {title}
        </h1>
    );
};

export default ShHeader;
