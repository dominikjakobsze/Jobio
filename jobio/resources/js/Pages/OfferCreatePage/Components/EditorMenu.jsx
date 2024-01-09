import React from "react";

let counter = 0;
//https://chat.openai.com/share/ccb12be5-b5a2-47d0-bc1f-06783281d8e4
const EditorMenu = ({ editor }) => {
    console.log("EditorMenu " + counter++);
    return (
        <div className="flex-[0_0_95%] mx-auto f fr fnw js is cs ss bg-gray-100 py-1 px-5 overflow-x-auto text-lg font-[700] text-gray-700 gap-2 border-y-2 border-solid border-gray-500 sticky top-1 z-[800] overflow-y-hidden">
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
            <button
                type="button"
                className="rounded-md px-3 py-1 flex-[0_0_auto] cursor-pointer"
                onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 1 }).run()
                }
                style={
                    editor?.isActive("heading", { level: 1 })
                        ? { backgroundColor: "rgb(209,213,219)" }
                        : {}
                }
            >
                H1
            </button>
            <button
                type="button"
                className="rounded-md px-3 py-1 flex-[0_0_auto] cursor-pointer"
                onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 2 }).run()
                }
                style={
                    editor?.isActive("heading", { level: 2 })
                        ? { backgroundColor: "rgb(209,213,219)" }
                        : {}
                }
            >
                H2
            </button>
            <button
                type="button"
                className="rounded-md px-3 py-1 flex-[0_0_auto] cursor-pointer"
                onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 3 }).run()
                }
                style={
                    editor?.isActive("heading", { level: 3 })
                        ? { backgroundColor: "rgb(209,213,219)" }
                        : {}
                }
            >
                H3
            </button>
            <button
                type="button"
                className="rounded-md px-3 py-1 flex-[0_0_auto] cursor-pointer"
                onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 4 }).run()
                }
                style={
                    editor?.isActive("heading", { level: 4 })
                        ? { backgroundColor: "rgb(209,213,219)" }
                        : {}
                }
            >
                H4
            </button>
            <button
                type="button"
                className="rounded-md px-3 py-1 flex-[0_0_auto] cursor-pointer"
                onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 5 }).run()
                }
                style={
                    editor?.isActive("heading", { level: 5 })
                        ? { backgroundColor: "rgb(209,213,219)" }
                        : {}
                }
            >
                SM
            </button>
            <button
                type="button"
                className="rounded-md px-3 py-1 flex-[0_0_auto] cursor-pointer"
                onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 6 }).run()
                }
                style={
                    editor?.isActive("heading", { level: 6 })
                        ? { backgroundColor: "rgb(209,213,219)" }
                        : {}
                }
            >
                XS
            </button>
            <button
                type="button"
                className="rounded-md px-3 py-1 flex-[0_0_auto] cursor-pointer text-sky-700"
                onClick={() =>
                    editor?.chain().focus().setColor("#0369A1").run()
                }
                style={
                    editor?.isActive("textStyle", { color: "#0369A1" })
                        ? { backgroundColor: "rgb(209,213,219)" }
                        : {}
                }
            >
                T
            </button>
            <button
                type="button"
                className="rounded-md px-3 py-1 flex-[0_0_auto] cursor-pointer"
                onClick={() =>
                    editor?.chain().focus().toggleOrderedList().run()
                }
                style={
                    editor?.isActive("orderedList")
                        ? { backgroundColor: "rgb(209,213,219)" }
                        : {}
                }
            >
                L
            </button>
            <button
                type="button"
                className="rounded-md px-3 py-1 flex-[0_0_auto] cursor-pointer text-lime-700"
                onClick={() =>
                    editor?.chain().focus().setColor("#4D7C0F").run()
                }
                style={
                    editor?.isActive("textStyle", { color: "#4D7C0F" })
                        ? { backgroundColor: "rgb(209,213,219)" }
                        : {}
                }
            >
                T
            </button>
            <button
                type="button"
                className="rounded-md px-3 py-1 flex-[0_0_auto] cursor-pointer"
                onClick={() => editor?.chain().focus().unsetColor().run()}
            >
                UC
            </button>
            <button
                type="button"
                className="rounded-md px-3 py-1 flex-[0_0_auto] cursor-pointer bg-lime-300/30"
                onClick={() =>
                    editor
                        ?.chain()
                        .focus()
                        .toggleHighlight({ color: "#bef264" })
                        .run()
                }
                style={
                    editor?.isActive("highlight", { color: "#bef264" })
                        ? { backgroundColor: "rgb(190,242,100)", opacity: 1 }
                        : {}
                }
            >
                H
            </button>
            <button
                type="button"
                className="rounded-md px-3 py-1 flex-[0_0_auto] cursor-pointer bg-sky-300/30"
                onClick={() =>
                    editor
                        ?.chain()
                        .focus()
                        .toggleHighlight({ color: "#7DD3FC" })
                        .run()
                }
                style={
                    editor?.isActive("highlight", { color: "#7DD3FC" })
                        ? { backgroundColor: "rgb(125,211,252)", opacity: 1 }
                        : {}
                }
            >
                H
            </button>
        </div>
    );
};

export default EditorMenu;
