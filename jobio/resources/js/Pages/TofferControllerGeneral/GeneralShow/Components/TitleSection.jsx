import React from "react";

const TitleSection = ({ offer }) => {
    console.log("TitleSection");

    return (
        <>
            <div className="bg-sky-600 p-5 w-full f fr fw ss justify-center lg:justify-start is cs rounded-t-2xl gap-3 text-3xl font-[600] text-gray-100">
                <img
                    src={offer?.company_icon}
                    className="flex-[0_0_100%] lg:flex-[0_0_200px] h-[200px] f ss object-cover rounded-xl"
                />
                <div className="flex-[0_0_100%] lg:flex-[1_0_0] f fr fw js is self-stretch content-between p-5 gap-5 lg:gap-3">
                    <p className="flex-[0_0_100%] ss">{offer?.title}</p>
                    <div className="flex-[0_0_100%] f fr fw js ic ss cc font-[400] text-base gap-1 lg:gap-4">
                        <p className="flex-[0_1_auto] ss font-[600] whitespace-pre-wrap">
                            {offer?.city}
                        </p>
                        <p className="flex-[0_1_auto] ss">
                            {offer?.voivodeship}
                        </p>
                        <p className="flex-[0_1_auto] ss">{offer?.zip_code}</p>
                        <p className="flex-[0_1_auto] ss">{offer?.street}</p>
                    </div>
                    <div className="flex-[0_0_100%] lg:flex-[0_1_auto] text-center lg:text-left ss p-3 bg-sky-800/80 rounded-2xl f fr fnw justify-center lg:justify-start is ss cs text-sm">
                        {offer?.min_salary} zł - {offer?.max_salary} zł
                    </div>
                </div>
            </div>
        </>
    );
};

export default TitleSection;
