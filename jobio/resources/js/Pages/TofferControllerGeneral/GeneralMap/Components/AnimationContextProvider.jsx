import React from "react";
import gsap from "gsap";

export const AnimationContext = React.createContext();

export const AnimationContextProvider = ({ children }) => {
    console.log("AnimationContextProvider");
    // refs
    const tlOptionPanel = React.useRef();
    const isOptionPanelBinded = React.useRef(false);
    const tlOffersPanel = React.useRef();
    const isOffersPanelBinded = React.useRef(false);

    // functions
    const bindOptionPanel = React.useCallback((element) => {
        if (isOptionPanelBinded.current === false) {
            isOptionPanelBinded.current = true;
            tlOptionPanel.current = gsap
                .timeline({
                    paused: true,
                    defaults: {
                        duration: 1,
                        ease: "power2.inout",
                    },
                    onStart: function () {
                        console.log(gsap.globalTimeline.getChildren());
                    },
                })
                .to(
                    element,
                    {
                        x: 0,
                    },
                    "<",
                );
        }
    }, []);
    const bindOffersPanel = React.useCallback((element) => {
        if (isOffersPanelBinded.current === false) {
            isOffersPanelBinded.current = true;
            tlOffersPanel.current = gsap
                .timeline({
                    paused: true,
                    defaults: {
                        duration: 1,
                        ease: "power2.inout",
                    },
                    onStart: function () {
                        console.log(gsap.globalTimeline.getChildren());
                    },
                })
                .to(
                    element,
                    {
                        x: 0,
                    },
                    "<",
                );
        }
    }, []);
    const getOptionPanelTl = React.useCallback(() => {
        return tlOptionPanel.current;
    });
    const getOffersPanelTl = React.useCallback(() => {
        return tlOffersPanel.current;
    });
    // return
    return (
        <>
            <AnimationContext.Provider
                value={{
                    getOptionPanelTl: getOptionPanelTl,
                    bindOptionPanel: bindOptionPanel,
                    getOffersPanelTl: getOffersPanelTl,
                    bindOffersPanel: bindOffersPanel,
                }}
            >
                {children}
            </AnimationContext.Provider>
        </>
    );
};
