const ActionButton = ({ text, handleClick, typeClasses }) => {
    return (
        <div
            onClick={async () => await handleClick()}
            className={`${typeClasses} flex-[0_1_auto] px-[14px] py-[6px] text-xs rounded-2xl hover:brightness-110`}
        >
            {text}
        </div>
    );
};

export default ActionButton;
