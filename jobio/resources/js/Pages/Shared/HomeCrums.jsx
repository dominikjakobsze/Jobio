import { URL as localUrl } from "../../app";
import { FaArrowLeftLong } from "react-icons/fa6";

const HomeCrums = () => {
    return (
        <div className="px-10 flex-[0_0_100%] f fr fw js ic cs ss text-xs font-[700] text-gray-700">
            <div className="flex-[0_0_100%]"></div>
            <div
                onClick={() => {
                    window.location.href = `${localUrl}/`;
                }}
                className="flex-[0_1_auto] pr-10 py-3 f fr fw js ic cs ss gap-2 hover:text-gray-400 cursor-pointer"
            >
                <FaArrowLeftLong className="flex-[0_1_auto]" />
                <p className="flex-[0_1_auto]">Strona Główna</p>
            </div>
            <div className="flex-[0_0_100%]"></div>
        </div>
    );
};

export default HomeCrums;
