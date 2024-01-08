import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import React from "react";
import { sanitizeContent } from "../../../app";
import EditorMenu from "./EditorMenu";

let counter = 0;
const OfferEditor = () => {
    console.log("OfferEditor " + counter++);
    const [content, setContent] = React.useState(``);

    const editor = useEditor({
        editorProps: {
            attributes: {
                class: "rounded-xl bg-gray-100 border-transparent focus:border-gray-500 focus:ring-0 whitespace-pre-wrap focus:outline-gray-500 p-5 text-base",
            },
        },
        extensions: [Document, Paragraph, Text],
        content: content,
        onUpdate: ({ editor }) => {
            setContent(sanitizeContent(editor.getHTML()));
        },
    });

    return (
        <>
            {React.useMemo(() => {
                return <EditorMenu editor={editor} />;
            })}
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
                className="flex-[0_0_95%] rounded-xl bg-gray-100 border-transparent focus:border-gray-500 focus:ring-0 whitespace-pre-wrap focus:outline-gray-500 p-5 text-base"
                dangerouslySetInnerHTML={{ __html: content }}
            ></div> */}
        </>
    );
};

export default OfferEditor;
