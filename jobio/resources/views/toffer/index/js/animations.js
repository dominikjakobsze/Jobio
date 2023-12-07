import gsap from "gsap";

export const animationOptionsPanel = gsap
    .timeline({
        paused: true,
        defaults: {
            duration: 0.8,
            ease: "power1.in",
        },
        smoothChildTiming: true,
    })
    .to(
        document.querySelector("[data-form-options]"),
        {
            x: "0",
        },
        ">",
    );
// > insert at the END of the previous animation
// ">-0.5" - 0.5 seconds before the end of the previous animation. It's like saying "the end of the previous animation plus -0.5"
