import React from "react";

const ImageFields = ({ company_icon }) => {
    const [image, setImage] = React.useState(company_icon ?? "");
    return (
        <>
            <input
                type="text"
                name="company_icon"
                placeholder="Wklej link do swojego zdjęcia"
                defaultValue={image}
                onChange={(e) => {
                    setImage(e.currentTarget.value);
                }}
                className="placeholder:text-gray-300 flex-[0_0_75%] text-center text-gray-400 text-sm font-[500] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
            <img
                src={image}
                data-object="cover"
                onClick={(e) => {
                    const status = e?.currentTarget?.dataset?.object ?? "";
                    if (status === "cover") {
                        e.currentTarget.style.objectFit = "contain";
                        e.currentTarget.dataset.object = "contain";
                    }
                    if (status === "contain") {
                        e.currentTarget.style.objectFit = "fill";
                        e.currentTarget.dataset.object = "fill";
                    }
                    if (status === "fill") {
                        e.currentTarget.style.objectFit = "cover";
                        e.currentTarget.dataset.object = "cover";
                    }
                }}
                className="flex-[0_0_95%] object-cover cursor-pointer h-[350px] rounded-md bg-gray-200 mx-auto"
            />
        </>
    );
};

export default ImageFields;
