import React from "react";
import gsap from "gsap";

export const AnimationContext = React.createContext();

export const AnimationContextProvider = ({ children }) => {
    // refs
    const tlOptionPanel = React.useRef();
    const isOptionPanelBinded = React.useRef(false);

    // effects
    React.useEffect(() => {
        console.log("AnimationContextProvider");
    }, []);

    // functions
    const bindOptionPanel = React.useCallback((element) => {
        if (isOptionPanelBinded.current === false) {
            console.log("jest false - contextprovider");
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
    const getOptionPanelTl = React.useCallback(() => {
        return tlOptionPanel.current;
    });
    // return
    return (
        <>
            <AnimationContext.Provider
                value={{
                    getOptionPanelTl: getOptionPanelTl,
                    bindOptionPanel: bindOptionPanel,
                }}
            >
                {children}
            </AnimationContext.Provider>
        </>
    );
};
