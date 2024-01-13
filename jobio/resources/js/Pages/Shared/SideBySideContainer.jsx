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
            className={`flex-[0_0_100%] f fr fw ${
                flexPosition ?? "js cs ss is"
            } ${gapNumber ?? ""} ${debug ? "bg-red-100" : ""}`}
        >
            {flexAuto ? (
                <>
                    <div
                        className={`flex-[0_1_auto] ${
                            debug ? "bg-purple-50" : ""
                        }`}
                    >
                        {LeftComponent}
                    </div>
                    <div
                        className={`flex-[0_1_auto] ${
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
