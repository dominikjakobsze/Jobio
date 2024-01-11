import React from "react";

let counter = 0;
const TitleField = ({ title }) => {
    console.log("TitleField " + counter++);
    return (
        <>
            <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Wymyśl jakiś kreatywny tytuł"
                className="placeholder:text-gray-300 flex-[0_0_95%] text-center text-gray-700 text-lg font-[700] mx-auto rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
        </>
    );
};

export default TitleField;
