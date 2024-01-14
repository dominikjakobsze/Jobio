const SideBySideContainer = ({
    LeftComponent,
    RightComponent,
    flexPosition,
    gapNumber,
    flexAuto,
    leftFlex,
    rightFlex,
    debug,
}) => {
    console.log(leftFlex, rightFlex);
    return (
        <div
            className={`flex-[0_0_100%] text-center lg:text-left flex-nowrap f fr ${
                flexPosition ?? "js cs ss is"
            } ${gapNumber ?? ""} ${debug ? "bg-red-100" : ""}`}
        >
            {flexAuto ? (
                <>
                    <div
                        className={`flex-[0_1_auto] whitespace-pre-wrap text-clip break-all overflow-hidden ${
                            debug ? "bg-purple-50" : ""
                        }`}
                    >
                        {LeftComponent}
                    </div>
                    <div
                        className={`flex-[0_1_auto] whitespace-pre-wrap text-clip break-all overflow-hidden ${
                            debug ? "bg-orange-50" : ""
                        }`}
                    >
                        {RightComponent}
                    </div>
                </>
            ) : (
                <>
                    <div
                        className={`${leftFlex ?? "flex-[0_0_50%]"} ${
                            debug ? "bg-sky-50" : ""
                        }`}
                    >
                        {LeftComponent}
                    </div>
                    <div
                        className={`${rightFlex ?? "flex-[0_0_50%]"} ${
                            debug ? "bg-sky-50" : ""
                        }`}
                    >
                        {RightComponent}
                    </div>
                </>
            )}
        </div>
    );
};

export default SideBySideContainer;
