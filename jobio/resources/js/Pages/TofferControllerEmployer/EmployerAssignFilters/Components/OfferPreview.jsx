import Spacer from "../../../Shared/Spacer";

const OfferPreview = ({ offer }) => {
    return (
        <>
            <div className="flex-[0_0_100%] flex flex-row flex-wrap justify-start content-start items-start self-start font-[700] text-gray-700 text-xs">
                <div className="lg:flex-[0_0_70%] xl:flex-[0_0_55%] flex flex-row flex-wrap justify-center lg:justify-start content-start items-start self-start bg-gray-50 p-5 shadow-standard rounded-2xl gap-3">
                    <img
                        className="flex-[0_0_130px] h-[130px] object-cover rounded-2xl self-center"
                        src={offer?.company_icon}
                        alt=""
                    />
                    <div className="flex-[0_0_100%] lg:flex-[1_0_0] flex flex-row flex-wrap justify-start content-start items-start self-center p-1 text-base gap-2 lg:gap-0">
                        <h1 className="flex-[0_0_100%] text-center lg:text-left whitespace-pre-wrap text-clip overflow-visible break-all">
                            Tytuł: {offer?.title}
                        </h1>
                        <h1 className="flex-[0_0_100%] text-center lg:text-left whitespace-pre-wrap text-clip overflow-visible break-all">
                            Identyfikator: {offer?.id}
                        </h1>
                    </div>
                </div>
                <Spacer type={"extra-large"} />
            </div>
        </>
    );
};

export default OfferPreview;
