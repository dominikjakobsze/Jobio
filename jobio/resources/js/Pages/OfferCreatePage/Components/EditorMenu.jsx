import React from "react";

let counter = 0;
const EditorMenu = ({ editor }) => {
    console.log("EditorMenu " + counter++);
    return (
        <div className="flex-[0_0_95%] mx-auto f fr fnw js is cs ss bg-gray-100 py-1 px-5 rounded-xl overflow-x-hidden text-lg font-[700] text-gray-700 shadow-md">
            <button
                type="button"
                className="rounded-md px-3 py-1 flex-[0_0_auto] cursor-pointer"
                onClick={() => editor?.chain().focus().toggleBold().run()}
                style={
                    editor?.isActive("bold")
                        ? { backgroundColor: "rgb(209,213,219)" }
                        : {}
                }
            >
                B
            </button>
        </div>
    );
};

export default EditorMenu;
