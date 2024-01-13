import { FaPlus } from "react-icons/fa6";

const ButtonCreate = () => {
    return (
        <>
            <div className="flex-[0_0_100%] f fr fw js is cs ss py-2">
                <div className="flex-[0_1_auto] f fr fw jc is cs ss p-3 bg-sky-200/50 border-2 border-solid border-sky-400/50 rounded-xl hover:border-sky-600/50 hover:bg-transparent group cursor-pointer">
                    <FaPlus className="text-4xl text-sky-300 font-[700] group-hover:text-sky-400" />
                </div>
            </div>
        </>
    );
};

export default ButtonCreate;
