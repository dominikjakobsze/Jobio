import React from "react";
import UploadFile from "./Components/UploadFile";
import axios from "axios";
import { URL as localUrl } from "../../app";
import ImageBox from "./Components/ImageBox";

const Main = () => {
    console.log("Main");
    const [images, setImages] = React.useState([]);
    const fetchImages = React.useCallback(async () => {
        try {
            const response = await axios.get(localUrl + "/endpoint/files");
            const data = await response.data;
            console.log(data);
            setImages((prev) => {
                return [...data];
            });
        } catch (exception) {
            window.location.href =
                localUrl +
                `/general/error/${exception?.response?.status}/${exception?.response?.data?.message}`;
        }
    }, []);
    React.useEffect(() => {
        fetchImages();
    }, []);
    return (
        <div className="w-full min-h-[100dvh] f fr fw cs is js ss bg-gray-100 p-5 overflow-x-hidden gap-4">
            <h1 className="flex-[0_0_100%] text-sky-300 text-xl font-[700] ss">
                Menedżer Plików
            </h1>
            <p className="bg-gray-300 h-[1px] flex-[0_0_100%]"></p>
            <div className="flex-[0_0_100%] p-5 max-h-[550px] overflow-x-hidden overflow-y-auto f fr fw jc is ss cs gap-5">
                {React.useMemo(() => {
                    return <UploadFile fetchImages={fetchImages} />;
                }, [])}
                {images.map((image) => {
                    return <ImageBox key={image?.id} image={image} />;
                })}
            </div>
            <p className="bg-gray-300 h-[1px] flex-[0_0_100%]"></p>
        </div>
    );
};

export default Main;
