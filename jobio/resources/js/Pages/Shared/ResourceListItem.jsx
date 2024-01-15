const ResourceListItem = ({
    left,
    right,
    ActionButtons,
    leftClasses,
    rightClasses,
    rightText,
    leftText,
    breakLayout,
}) => {
    console.log(ActionButtons);
    return (
        <>
            <div
                className={`${breakLayout} flex flex-row flex-wrap items-center justify-center lg:justify-start content-start self-start gap-2 lg:gap-5 rounded-xl px-5 py-10 lg:px-10 shadow-standard cursor-pointer text-gray-700 font-[700] text-sm`}
            >
                <div className={`${leftClasses} flex-[0_1_auto]`}>
                    {leftText} {left}
                </div>
                {ActionButtons?.map((ActionButton) => {
                    return ActionButton;
                })}
                <div
                    className={`${rightClasses} flex-[0_0_100%] lg:text-left text-center text-clip whitespace-pre-wrap overflow-hidden break-all lg:mt-0 mt-5`}
                >
                    {rightText} {right}
                </div>
            </div>
        </>
    );
};

export default ResourceListItem;
