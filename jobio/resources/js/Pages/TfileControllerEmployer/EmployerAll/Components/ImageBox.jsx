import React from "react";
import { exceptionBlock, URL as localUrl } from "../../../../app";
import gsap from "gsap";
import { FaTrash } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";
import axios from "axios";

const ImageBox = ({ image, fetchImages }) => {
    console.log("ImageBox");
    const timelineRef = React.useRef(null);
    const menuRef = React.useRef(null);
    const imgRef = React.useRef(null);
    const deleteFormRef = React.useRef(null);

    const animateTimeline = React.useCallback(() => {
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
    }, []);

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
                onClick={() => animateTimeline()}
                src={localUrl + image?.url}
                key={image?.id}
                className="w-full h-full object-cover rounded-lg cup"
                ref={imgRef}
                data-status="not-animated"
            />
            <div
                ref={menuRef}
                className="w-auto px-4 py-2 bg-gray-100 shadow-2xl rounded-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] f fr fw jc is cs ss gap-4 text-xl scale-y-[0] scale-x-[0] origin-top-right"
            >
                <FaTrash
                    onClick={async () => {
                        //deleteFormRef.current.submit();
                        await exceptionBlock(async () => {
                            const formData = new FormData(
                                deleteFormRef?.current,
                            );
                            const response = await axios.post(
                                localUrl +
                                    `/endpoint/employer/file/${image?.id}`,
                                formData,
                                {
                                    headers: {
                                        "Content-Type": "multipart/form-data",
                                    },
                                },
                            );
                            animateTimeline();
                            setTimeout(async () => {
                                await fetchImages();
                            }, 1500);
                        });
                    }}
                    className="flex-[0_1_auto] text-red-500 cup hover:text-red-600"
                />
                <FaShareNodes
                    onClick={async () => {
                        await exceptionBlock(async () => {
                            const response = await axios.get(
                                localUrl +
                                    `/endpoint/employer/copy-file/${image?.id}`,
                            );
                            const data = await response.data;
                            console.log(data);
                            animateTimeline();
                        });
                    }}
                    className="flex-[0_1_auto] text-sky-600 cup hover:text-sky-700"
                />
                <form
                    ref={deleteFormRef}
                    action={`/endpoint/file/${image?.id}`}
                    encType="multipart/form-data"
                    method="post"
                    className="hidden"
                >
                    <input type="hidden" name="_method" value="DELETE"></input>
                </form>
            </div>
        </div>
    );
};

export default ImageBox;
