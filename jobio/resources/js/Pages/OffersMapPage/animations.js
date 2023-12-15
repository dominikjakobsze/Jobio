import gsap from "gsap";

export const animateOptionPanel = gsap.timeline({
    paused: true,
    defaults: {
        duration: 1,
        ease: "power2.inout",
    },
});

export const bindElementToAnimateOptionPanel = (element) => {
    animateOptionPanel.to(
        element,
        {
            x: 0,
        },
        ">",
    );
};
