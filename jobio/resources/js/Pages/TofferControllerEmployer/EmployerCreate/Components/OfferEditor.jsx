import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import { EditorContent, useEditor } from "@tiptap/react";
import React from "react";
import { sanitizeContent } from "../../../../app";
import EditorMenu from "./EditorMenu";

let counter = 0;
const OfferEditor = () => {
    console.log("OfferEditor " + counter++);
    const [content, setContent] = React.useState(``);

    const editor = useEditor({
        editorProps: {
            attributes: {
                class: "rounded-xl bg-gray-100 border-transparent focus:border-gray-500 focus:ring-0 whitespace-pre-wrap focus:outline-gray-500 p-5 text-base text-gray-700 font-[400] min-h-[300px]",
            },
        },
        extensions: [
            Document,
            Paragraph,
            Text,
            Heading.configure({
                HTMLAttributes: {
                    class: "",
                },
                levels: [1, 2, 3, 4, 5, 6],
            }),
            Bold.configure({
                HTMLAttributes: {
                    class: "",
                },
            }),
            TextStyle,
            Color.configure({
                types: ["textStyle"],
            }),
            Highlight.configure({
                HTMLAttributes: {
                    class: "rounded-lg px-1",
                },
                multicolor: true,
            }),
            OrderedList.configure({
                HTMLAttributes: {
                    class: "",
                },
            }),
            ListItem,
        ],
        content: content,
        onUpdate: ({ editor }) => {
            setContent(sanitizeContent(editor.getHTML()));
        },
    });

    return (
        <>
            <EditorMenu editor={editor} />
            <textarea
                className="hidden"
                name="page_offer"
                defaultValue={content}
            ></textarea>
            <div
                data-tiptap
                className="flex-[0_0_95%] whitespace-pre-wrap mx-auto"
            >
                <EditorContent editor={editor} />
            </div>
            {/* <div
                data-tiptap
                className="flex-[0_0_95%] rounded-xl bg-gray-100 border-transparent focus:border-gray-500 focus:ring-0 whitespace-pre-wrap focus:outline-gray-500 p-5 text-base text-gray-700 font-[400]"
                dangerouslySetInnerHTML={{ __html: content }}
            ></div> */}
        </>
    );
};

export default OfferEditor;
