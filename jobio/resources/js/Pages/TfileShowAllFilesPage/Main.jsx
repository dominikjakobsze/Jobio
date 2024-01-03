import React from "react";
import UploadFile from "./Components/UploadFile";
import axios from "axios";
import { URL as localUrl } from "../../app";

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
            <div className="flex-[0_0_100%] p-5 max-h-[550px] overflow-x-hidden overflow-y-auto border-y border-gray-300 border-solid f fr fw jc is ss cs gap-5">
                {React.useMemo(() => {
                    return <UploadFile />;
                }, [])}
            </div>
        </div>
    );
};

export default Main;
