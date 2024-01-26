import { IoAddSharp } from "react-icons/io5";
import React from "react";
import axios from "axios";
import { exceptionBlock, URL as localUrl } from "../../../../app";

const UploadFile = ({ fetchImages, setErrors }) => {
    console.log("UploadFile");
    const formRef = React.useRef(null);
    const fileRef = React.useRef(null);
    const [preview, setPreview] = React.useState({
        objectUrl: null,
    });
    const displayPreview = React.useCallback((e) => {
        if (e?.target?.files?.length !== 0) {
            const fileType = e.target.files[0].type;
            const allowedImageTypes = ["image/png", "image/jpg", "image/jpeg"];
            if (!allowedImageTypes.includes(fileType)) {
                return;
            }
            if (preview?.objectUrl !== null) {
                URL.revokeObjectURL(preview?.objectUrl);
            }
            setPreview((prev) => {
                return {
                    objectUrl: URL.createObjectURL(e?.target?.files[0]),
                };
            });
            setErrors([]);
        }
    }, []);
    const uploadFile = React.useCallback(async () => {
        const result = await exceptionBlock(async () => {
            const formData = new FormData(formRef?.current);
            const response = await axios.post(
                localUrl + "/endpoint/employer/file",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );
            const data = await response.data;
            formRef.current.reset();
            fileRef.current.value = null;
            await fetchImages();
            setPreview((prev) => {
                return { objectUrl: null };
            });
            setErrors([]);
            return null;
        });
        if (result !== null) {
            setErrors(result);
        }
    }, []);

    return (
        <>
            <form
                ref={formRef}
                className="flex-[0_0_250px] border-sky-300 border-2 border-solid h-[325px] rounded-lg overflow-hidden cursor-pointer"
                action="/endpoint/file"
                encType="multipart/form-data"
                method="post"
            >
                <label className="f fr fw w-full h-full is jc cc ss overflow-hidden cursor-pointer">
                    <input
                        name="fileMenager"
                        onChange={(e) => displayPreview(e)}
                        type="file"
                        className="hidden"
                        ref={fileRef}
                    />
                    <IoAddSharp className="flex-[0_1_auto] sc text-5xl text-sky-300 text-center font-[900]" />
                </label>
            </form>
            <img
                onClick={() => uploadFile()}
                src={preview?.objectUrl === null ? null : preview?.objectUrl}
                className="flex-[0_0_250px] cursor-pointer h-[325px] bg-gray-200 rounded-lg shadow-lg object-cover"
            />
        </>
    );
};

export default UploadFile;
