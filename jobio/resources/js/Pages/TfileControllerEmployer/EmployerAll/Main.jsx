import React from "react";
import UploadFile from "./Components/UploadFile";
import axios from "axios";
import { exceptionBlock, URL as localUrl } from "../../../app";
import ImageBox from "./Components/ImageBox";
import ErrorContainer from "../../Shared/ErrorContainer";

const Main = () => {
    console.log("Main");
    const [images, setImages] = React.useState([]);
    const [errors, setErrors] = React.useState([]);
    const fetchImages = React.useCallback(async () => {
        await exceptionBlock(async () => {
            const response = await axios.get(
                localUrl + "/endpoint/employer/files",
            );
            const data = await response.data;
            console.log(data);
            setImages((prev) => {
                return [...data];
            });
            setErrors([]);
        });
    }, []);
    React.useEffect(() => {
        fetchImages();
    }, []);
    return (
        <div className="flex-[0_0_100%] f fr fw justify-center lg:justify-start is ss cs gap-5">
            {React.useMemo(() => {
                return <ErrorContainer errors={errors} />;
            }, [errors])}
            {React.useMemo(() => {
                return (
                    <UploadFile
                        fetchImages={fetchImages}
                        setErrors={setErrors}
                    />
                );
            }, [])}
            {images.map((image) => {
                return (
                    <ImageBox
                        key={image?.id}
                        image={image}
                        fetchImages={fetchImages}
                    />
                );
            })}
        </div>
    );
};

export default Main;
