import React from "react";
import { sanitizeContent } from "../../../../app";

let counter = 0;
const PageSection = ({ offer }) => {
    console.log("PageSection " + counter++);
    const [page, setPage] = React.useState(
        JSON.parse(offer?.page_offer)?.page ?? "",
    );
    const [staticMap, setStaticMap] = React.useState(
        `https://api.jawg.io/static?marker=color:012a4b,size:medium,label:O%7C${offer?.latitude},${offer?.longitude}&zoom=15&center=${offer?.latitude},${offer?.longitude}&size=1000x350&layer=jawg-streets&access-token=jJNHET49eekqSetNpABgWWUYxS144E1aJeQe7wJHNSU2HSrZFKUzueYBnCtS93nh`,
    );
    console.log(page.length);
    return (
        <>
            <img
                src={staticMap}
                className="my-10 w-full h-[350px] object-cover "
            />
            <div
                dangerouslySetInnerHTML={{ __html: sanitizeContent(page) }}
                data-tiptap
                className={`w-full p-5 mx-auto my-10 bg-white rounded-xl whitespace-pre-wrap text-base text-gray-700 font-[400] ${
                    page?.length > 40 ? "min-h-[300px]" : "min-h-[50px]"
                }`}
            ></div>
        </>
    );
};

export default PageSection;
