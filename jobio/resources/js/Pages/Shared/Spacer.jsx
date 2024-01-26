const Spacer = ({ type }) => {
    return (
        <>
            <div
                className={
                    type === "extra-small"
                        ? "flex-[0_0_100%] p-1"
                        : type === "small"
                          ? "flex-[0_0_100%] p-2"
                          : type === "medium"
                            ? "flex-[0_0_100%] p-3"
                            : type === "large"
                              ? "flex-[0_0_100%] p-4"
                              : type === "extra-large"
                                ? "flex-[0_0_100%] p-5"
                                : "flex-[0_0_100%] bg-red-500 p-1"
                }
            ></div>
        </>
    );
};

export default Spacer;
