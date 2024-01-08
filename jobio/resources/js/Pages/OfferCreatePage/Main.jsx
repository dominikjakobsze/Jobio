import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import React from "react";
import DOMPurify from "dompurify";
import { sanitizeContent } from "../../app";

let counter = 0;
const Main = () => {
    console.log("OfferCreatePage " + counter++);
    const editorRef = React.useRef(null);
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
        <div className="f fr fw jc cs is ss gap-5">
            <div
                data-tiptap
                className="flex-[0_0_95%] rounded-xl bg-gray-100 border-transparent focus:border-gray-500 focus:ring-0 whitespace-pre-wrap focus:outline-gray-500 p-5 text-base"
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content),
                }}
            ></div>
            <div data-tiptap className="flex-[0_0_95%] whitespace-pre-wrap">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default Main;
