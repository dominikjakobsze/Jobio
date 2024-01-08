import { Mark, mergeAttributes } from "@tiptap/core";

const SmallTextCustom = Mark.create({
    name: "smallTextCustom",

    addOptions: function () {
        return {
            HTMLAttributes: {
                class: "text-xs",
                // "data-small-text-custom-id": "", dziala
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
            toggleSmallTextCustom: () => {
                return function ({ commands }) {
                    return commands.toggleMark(that.name);
                };
            },
        };
    },
});

//editor.commands.toggleMark("smallTextCustom")
//editor.chain().focus().toggleSmallTextCustom().run();

export default SmallTextCustom;
