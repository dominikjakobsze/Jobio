import { Mark, mergeAttributes } from "@tiptap/core";

const UnderlineTextCustom = Mark.create({
    name: "underlineTextCustom",
    additionalData: "",

    addOptions: function () {
        return {
            HTMLAttributes: {
                class: "underline-offset-2 decoration-2 decoration-solid underline",
                style: "",
            },
        };
    },

    parseHTML: function () {
        return [
            {
                tag: "span",
                getAttrs: function (node) {
                    return this.options.HTMLAttributes;
                },
            },
        ];
    },

    renderHTML: function () {
        return ["span", mergeAttributes(this.options.HTMLAttributes), 0];
    },

    addCommands: function () {
        const that = this;
        return {
            toggleUnderlineTextCustom: ({ tdc }) => {
                that.options.HTMLAttributes.style = `text-decoration-color: ${tdc}`;
                return function ({ commands }) {
                    return commands.toggleMark(that.name);
                };
            },
        };
    },
});

export default UnderlineTextCustom;
