import { IoAddSharp } from "react-icons/io5";
import React from "react";

const UploadFile = () => {
    console.log("UploadFile");
    const formRef = React.useRef(null);
    const [preview, setPreview] = React.useState({
        objectUrl: null,
        file: null,
    });
    const displayPreview = React.useCallback((e) => {
        if (e?.target?.files?.length !== 0) {
            const fileType = e.target.files[0].type;
            const allowedImageTypes = ["image/png", "image/jpg", "image/jpeg"];
            if (!allowedImageTypes.includes(fileType)) {
                return;
            }
            setPreview
        }
    }, []);

    return (
        <>
            <form
                ref={formRef}
                className="flex-[0_0_250px] bg-sky-300 h-[325px] rounded-lg overflow-hidden cursor-pointer shadow-lg"
                action=""
                method="post"
            >
                <label className="f fr fw w-full h-full is jc cc ss overflow-hidden cursor-pointer">
                    <input
                        onChange={(e) => displayPreview(e)}
                        type="file"
                        className="hidden"
                    />
                    <IoAddSharp className="flex-[0_1_auto] sc text-5xl text-gray-100 text-center font-[900]" />
                </label>
            </form>
            <img
                src={preview?.objectUrl === null ? null : preview?.objectUrl}
                className="flex-[0_0_250px] h-[325px] bg-gray-200 rounded-lg shadow-lg"
            />
        </>
    );
};

export default UploadFile;
