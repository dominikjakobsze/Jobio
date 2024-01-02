import UploadFile from "./Components/UploadFile";

const Main = () => {
    console.log("Main");
    return (
        <div className="w-full min-h-[100dvh] f fr fw cs is js ss bg-gray-100 p-5 overflow-x-hidden gap-4">
            <h1 className="flex-[0_0_100%] text-sky-300 text-xl font-[700] ss">
                Menedżer Plików
            </h1>
            <div className="flex-[0_0_100%] p-5 max-h-[550px] overflow-x-hidden overflow-y-auto border-y-2 border-gray-300 border-solid f fr fw js is ss cs gap-5">
                <UploadFile />
            </div>
        </div>
    );
};

export default Main;
