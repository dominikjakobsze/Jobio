import React from "react";
import { URL as localUrl } from "../../../app";
import gsap from "gsap";
import { FaTrash } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const ImageBox = ({ image }) => {
    console.log("ImageBox");
    const timelineRef = React.useRef(null);
    const menuRef = React.useRef(null);
    const imgRef = React.useRef(null);

    React.useEffect(() => {
        if (timelineRef.current === null || timelineRef.current === undefined) {
            timelineRef.current = gsap
                .timeline({
                    paused: true,
                    defaults: {
                        duration: 0.5,
                        ease: "power3",
                    },
                })
                .to(
                    menuRef.current,
                    {
                        scaleX: 1,
                        scaleY: 1,
                    },
                    ">",
                );
        }
        return () => {
            timelineRef.current = timelineRef.current.kill();
        };
    }, []);
    return (
        <div className="flex-[0_0_250px] h-[325px] bg-gray-200 rounded-lg shadow-lg relative overflow-hidden">
            <img
                onClick={() => {
                    if (imgRef.current?.dataset?.status === "not-animated") {
                        imgRef.current.dataset.status = "animated";
                        timelineRef.current.play();
                        return;
                    }
                    if (imgRef.current?.dataset?.status === "animated") {
                        imgRef.current.dataset.status = "not-animated";
                        timelineRef.current.reverse();
                        return;
                    }
                }}
                src={localUrl + image?.url}
                key={image?.id}
                className="w-full h-full object-cover rounded-lg cup"
                ref={imgRef}
                data-status="not-animated"
            />
            <div
                ref={menuRef}
                className="w-[60%] px-4 py-2 bg-gray-100 shadow-2xl rounded-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] f fr fw jc is cs ss gap-4 text-xl scale-y-[0] scale-x-[0] origin-top-right"
            >
                <FaTrash className="flex-[0_1_auto] text-red-500 cup hover:text-red-600" />
                <FaShareNodes className="flex-[0_1_auto] text-sky-600 cup hover:text-sky-700" />
                <IoCloseSharp className="flex-[0_1_auto] text-gray-600 cup hover:text-gray-400" />
            </div>
        </div>
    );
};

export default ImageBox;
