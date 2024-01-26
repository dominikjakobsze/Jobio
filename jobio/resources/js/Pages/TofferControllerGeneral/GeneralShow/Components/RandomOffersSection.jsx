import React from "react";
import { URL } from "../../../../app";

const RandomOffersSection = ({ randomOffers }) => {
    console.log("RandomOffersSection");
    const [randomOfferState, setRandomOfferState] = React.useState(
        () => randomOffers,
    );
    return (
        <div className="bg-white f fr fw ss js is cs w-full p-5 mt-5 gap-8">
            <h2 className="text-xl text-gray-700 font-[600] ss flex-[0_0_100%]">
                Sprawdź również inne oferty
            </h2>
            {randomOfferState?.map((item) => {
                return (
                    <div
                        key={item?.id}
                        className="f fr fw ss justify-center lg:justify-start items-stretch cs p-5 flex-[0_0_100%] shadow-md gap-5 cup hover:brightness-125"
                        onClick={() =>
                            window.open(URL + `/general/offer/${item?.id}`)
                        }
                    >
                        <img
                            src={item?.company_icon}
                            className="flex-[0_0_100px] h-[100px] rounded-2xl ss"
                        />
                        <div className="flex-[0_0_100%] lg:flex-[1_0_0] p-1 sc f fr fw js is cs">
                            <h2 className="flex-[0_0_100%] text-base text-gray-700 font-[600]">
                                {item?.title}
                            </h2>
                            <div className="flex-[0_0_100%] f fr fnw ss js is cs text-xs">
                                <p className="flex-[0_1_auto] ss text-lime-600 font-[600]">
                                    {item?.min_salary} zł - {item?.max_salary}{" "}
                                    zł
                                </p>
                                <p className="flex-[0_1_auto] ss ml-2 text-gray-400 font-[600]">
                                    {item?.city}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RandomOffersSection;
