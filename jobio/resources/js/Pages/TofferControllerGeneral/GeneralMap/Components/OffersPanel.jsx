import React from "react";
import { IoCloseSharp, IoSearchSharp } from "react-icons/io5";
import { AnimationContext } from "./AnimationContextProvider";
import { LuActivity } from "react-icons/lu";

const OffersPanel = ({ offers }) => {
    console.log("OffersPanel");
    const offersPanelRef = React.useRef(null);
    const { getOffersPanelTl, bindOffersPanel } =
        React.useContext(AnimationContext);
    React.useEffect(() => {
        bindOffersPanel(offersPanelRef.current);
    }, []);
    return (
        <>
            <div
                ref={offersPanelRef}
                className="w-full max-w-[500px] h-full absolute z-[102] top-0 left-0 translate-x-[-120%] bg-white/80 backdrop-blur shadow-2xl overflow-x-hidden overflow-y-auto f fr fw js is cs ss py-3 p-[5px] md:p-3 gap-2 md:gap-5"
            >
                <div className="flex-[0_0_100%] f fr fnw justify-end is cs ss gap-2 md:gap-4 ">
                    <div
                        onClick={() => getOffersPanelTl().reverse()}
                        className="flex-[0_0_auto] f fr fw js is cs ss p-3 bg-gray-100 rounded-full hover:contrast-[80%] cup"
                    >
                        <IoCloseSharp className=" w-[25px] h-[25px] text-gray-700" />
                    </div>
                </div>
                <div className="flex-[0_0_100%] p-[0.5px] bg-gray-200 ss"></div>
                {offers?.length === 0 ? (
                    <>
                        <div className="p-3 flex-[0_0_100%] f fr is fw cs ss jc gap-2 text-gray-400 text-sm ">
                            <LuActivity className="flex-[0_0_70px] h-[70px]" />
                            <p className="flex-[0_0_100%] text-center">
                                Brak ofert spełniających wymagania!
                            </p>
                        </div>
                    </>
                ) : null}
                {offers?.map((offer) => {
                    return (
                        <div
                            key={offer?.id}
                            className="p-3 bg-gray-100 flex-[0_0_100%] f fr is fw cs ss jc gap-2 rounded-2xl shadow-lg hover:shadow-inner cup hover:"
                        >
                            <div className="flex-[0_1_auto] f fr fnw is cs self-stretch jc">
                                <img
                                    className="flex-[0_0_70px] h-[70px] md:flex-[0_0_120px] md:h-[120px] rounded-2xl object-contain"
                                    src={offer?.company_icon}
                                    alt=""
                                />
                            </div>
                            <div className="flex-[1_0_0] f fr fw js items-stretch content-stretch self-stretch font-[600] text-sm text-gray-700">
                                <div className="flex-[0_0_100%] self-end text-center break-all">
                                    {offer?.title}
                                </div>
                                <div className="flex-[0_0_100%] f fr fnw is cs js self-center truncate gap-5 text-xs font-[500] text-lime-600">
                                    <p className="flex-[0_0_45%] truncate text-end">
                                        {offer?.min_salary} zł
                                    </p>
                                    <p className="flex-[0_0_45%] truncate text-start">
                                        {offer?.max_salary} zł
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default OffersPanel;
