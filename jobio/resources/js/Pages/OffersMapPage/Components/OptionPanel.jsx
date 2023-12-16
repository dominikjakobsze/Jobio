import React from "react";
import OptionSection from "./OptionSection";
import axios from "axios";
import SalaryOptionSection from "./SalaryOptionSection";
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
import { AnimationContext } from "./AnimationContextProvider";
const OptionPanel = ({ items, setOffers }) => {
    console.log("OptionPanel");
    const { getOptionPanelTl, bindOptionPanel } =
        React.useContext(AnimationContext);

    const formRef = React.useRef();

    React.useEffect(() => {
        bindOptionPanel(formRef.current);
    }, []);

    const sendForm = React.useCallback(async () => {
        const formData = new FormData(formRef.current);
        const queryString = new URLSearchParams(formData).toString();
        console.log(queryString);
        const response = await axios.get(`/endpoint/toffers?${queryString}`);
        const result = await response.data;
        setOffers((prev) => {
            return [...result?.offers];
        });
    });

    return React.useMemo(() => {
        return (
            <>
                <form
                    ref={formRef}
                    className="w-full max-w-[500px] h-full absolute z-[102] top-0 left-0 translate-x-[-120%] bg-white/80 backdrop-blur shadow-2xl overflow-x-hidden overflow-y-auto f fr fw js is cs ss py-3 p-[5px] md:p-3 gap-2 md:gap-5"
                >
                    <div className="flex-[0_0_100%] f fr fnw justify-end is cs ss gap-2 md:gap-4">
                        <div
                            className="flex-[0_0_auto] f fr fw js is cs ss p-3 bg-gray-100 rounded-full hover:contrast-[80%] cup"
                            onClick={() => sendForm()}
                        >
                            <IoSearchSharp className=" w-[25px] h-[25px] text-gray-700" />
                        </div>
                        <div
                            className="flex-[0_0_auto] f fr fw js is cs ss p-3 bg-gray-100 rounded-full hover:contrast-[80%] cup"
                            onClick={() => getOptionPanelTl().reverse()}
                        >
                            <IoCloseSharp className=" w-[25px] h-[25px] text-gray-700" />
                        </div>
                    </div>
                    <div className="flex-[0_0_100%] p-[0.5px] bg-gray-200"></div>
                    {items?.options?.map((item) => {
                        return (
                            <OptionSection
                                key={item?.keyName + item?.displayName}
                                item={item}
                            />
                        );
                    })}
                </form>
            </>
        );
    }, []);
    // return React.useMemo(() => {
    //     return (
    //         <>
    //             <form
    //                 ref={formRef}
    //                 className="w-full max-w-[500px] h-full absolute z-[102] top-0 left-0 translate-x-[0%] bg-white/80 backdrop-blur shadow-2xl overflow-x-hidden overflow-y-auto f fr fw js is cs ss py-3 p-[5px] md:p-3 gap-2 md:gap-5"
    //             >
    //                 <div className="flex-[0_0_100%] f fr fnw justify-end is cs ss gap-2 md:gap-4">
    //                     <div className="flex-[0_0_auto] f fr fw js is cs ss p-3 bg-gray-100 rounded-full hover:contrast-[80%] cup">
    //                         <IoSearchSharp
    //                             onClick={() => sendForm()}
    //                             className=" w-[25px] h-[25px] text-gray-700"
    //                         />
    //                     </div>
    //                     <div className="flex-[0_0_auto] f fr fw js is cs ss p-3 bg-gray-100 rounded-full hover:contrast-[80%] cup">
    //                         <IoCloseSharp
    //                             onClick={() => getOptionPanelTl().reverse()}
    //                             className=" w-[25px] h-[25px] text-gray-700"
    //                         />
    //                     </div>
    //                 </div>
    //                 <div className="flex-[0_0_100%] p-[0.5px] bg-gray-200"></div>
    //                 {items?.options?.map((item) => {
    //                     return <OptionSection key={uuid()} item={item} />;
    //                 })}
    //             </form>
    //         </>
    //     );
    // }, []);
};

export default OptionPanel;
