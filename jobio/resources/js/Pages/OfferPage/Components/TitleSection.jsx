import React from "react";

const TitleSection = ({ offer }) => {
    console.log("TitleSection");

    return (
        <>
            <div className="bg-sky-600 p-5 w-full f fr fw ss js is cs rounded-t-2xl gap-3 text-3xl font-[600] text-gray-100">
                <img
                    src={offer?.company_icon}
                    className="flex-[0_0_200px] h-[200px] f ss object-contain rounded-full"
                />
                <div className="flex-[1_0_0] f fr fw js is self-stretch content-between p-5 gap-3">
                    <p className="flex-[0_0_100%] ss">{offer?.title}</p>
                    <div className="flex-[0_0_100%] f fr fw js ic ss cc font-[400] text-base gap-4">
                        <p className="flex-[0_1_auto] ss font-[600] whitespace-pre-wrap">
                            {offer?.city}
                        </p>
                        <p className="flex-[0_1_auto] ss">
                            {offer?.voivodeship}
                        </p>
                        <p className="flex-[0_1_auto] ss">{offer?.zip_code}</p>
                        <p className="flex-[0_1_auto] ss">{offer?.street}</p>
                    </div>
                    <div className="flex-[0_1_auto] ss p-3 bg-sky-800/80 rounded-2xl f fr fnw js is ss cs text-sm">
                        {offer?.min_salary} zł - {offer?.max_salary} zł
                    </div>
                </div>
            </div>
        </>
    );
};

export default TitleSection;

// {
//     "id": "9aca7cdd-badb-44d8-868b-8a79fc90d875",
//     "min_salary": 6461,
//     "max_salary": 10796,
//     "title": "Nemo labore quam pariatur ut necessitatibus.",
//     "page_offer": "\"fsd\"",
//     "longitude": 18.498106,
//     "latitude": 53.494455,
//     "city": "Jeżewo",
//     "street": "Taszewskie Pole 27B",
//     "zip_code": "86-131",
//     "voivodeship": "kujawsko-pomorskie",
//     "temployer_id": "9aca7c71-8901-4193-b769-f7bd08068d6d",
//     "company_icon": "https://picsum.photos/264",
//     "created_at": "2023-12-07T10:24:49.000000Z",
//     "updated_at": "2023-12-07T11:31:36.000000Z"
// }
