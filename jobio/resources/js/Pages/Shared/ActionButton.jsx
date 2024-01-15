const ActionButton = ({ text, handleClick, typeClasses }) => {
    return (
        <div
            onClick={handleClick}
            className={`${typeClasses} flex-[0_1_auto] px-5 py-2 text-sm rounded-2xl hover:brightness-110`}
        >
            {text}
        </div>
    );
};

export default ActionButton;
