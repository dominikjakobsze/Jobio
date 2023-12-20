import React from "react";

const OptionsSection = ({ offer }) => {
    console.log("OptionsSection");

    const [options, setOptions] = React.useState({
        d: [],
        s: [],
        t: [],
    });

    const turnOfferIntoSubArrays = React.useCallback(() => {
        offer?.toftops?.forEach((toftop) => {
            if (toftop?.toption?.option_type === "D") {
                setOptions((prev) => {
                    return {
                        ...prev,
                        d: [
                            ...prev.d,
                            {
                                itemValue: toftop?.toption?.option_value,
                                itemId: toftop?.toption?.id,
                            },
                        ],
                    };
                });
            }
            if (toftop?.toption?.option_type === "S") {
                setOptions((prev) => {
                    return {
                        ...prev,
                        s: [
                            ...prev.s,
                            {
                                itemValue: toftop?.toption?.option_value,
                                itemId: toftop?.toption?.id,
                            },
                        ],
                    };
                });
            }
            if (toftop?.toption?.option_type === "T") {
                setOptions((prev) => {
                    return {
                        ...prev,
                        t: [
                            ...prev.t,
                            {
                                itemValue: toftop?.toption?.option_value,
                                itemId: toftop?.toption?.id,
                            },
                        ],
                    };
                });
            }
        });
    }, []);

    React.useEffect(() => {
        turnOfferIntoSubArrays();
    }, []);

    return (
        <>
            <div className="bg-white p-5 w-full mx-auto f fr fw ss js is cs gap-3 custom-scroll-x">
                <h2
                    onClick={() => console.log(options?.d)}
                    className="flex-[0_0_100%] text-gray-400 text-base font-[500]"
                >
                    Doświadczenie
                </h2>
                <div className="flex-[0_0_100%] p-1 overflow-x-auto overflow-y-hidden f fr fnw ss js is cs gap-3"></div>
                <h2 className="flex-[0_0_100%] text-gray-400 text-base font-[500]">
                    Techologie
                </h2>
                <div className="flex-[0_0_100%] p-1 overflow-x-auto overflow-y-hidden f fr fnw ss js is cs gap-3"></div>
                <h2 className="flex-[0_0_100%] text-gray-400 text-base font-[500]">
                    Narzędzia i Inne
                </h2>
                <div className="flex-[0_0_100%] p-1 overflow-x-auto overflow-y-hidden f fr fnw ss js is cs gap-3">
                    {options?.d?.map((item) => {
                        return (
                            <div className="flex-[0_0_auto] px-4 py-2 bg-[#fffaf0] text-[#FF8A29] rounded-xl text-xs font-[500]">
                                {item?.itemValue}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default OptionsSection;
