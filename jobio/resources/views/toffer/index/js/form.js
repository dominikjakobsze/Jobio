import axios from "axios";
import { URL } from "../../../../js/app";
import { renderMarkers } from "./map";
import gsap from "gsap";

export const formRunner = async () => {
    const optionsForm = document.querySelector("#optionsForm");
    const optionsFormTimeline = gsap
        .timeline({
            paused: true,
            smoothChildTiming: true,
            defaults: {
                duration: 0.5,
                ease: "power4.inout",
            },
        })
        .to(
            optionsForm,
            {
                x: 0,
            },
            ">"
        );
    document
        .querySelector("#searchOptionsButton")
        .addEventListener("click", async () => {
            const formData = new FormData(optionsForm);
            console.log([...formData]);
            const queryStringRaw = new URLSearchParams(formData);
            const queryString = queryStringRaw.toString();
            await renderMarkers(`${URL}/endpoint/toffers?${queryString}`);
        });
    document
        .querySelector("#optionsButton")
        .addEventListener("click", async (e) => {
            optionsFormTimeline.play();
        });
    document
        .querySelector("#closeOptionsButton")
        .addEventListener("click", async (e) => {
            optionsFormTimeline.reverse();
        });
};
// [
//     [
//         "offer-min_salary",
//         "3800"
//     ],
//     [
//         "offer-max_salary",
//         "16865"
//     ]
// ]