import { URL as localUrl } from "../../../app";
import React from "react";
import ButtonCreate from "../../Shared/ButtonCreate";
import ShHeader from "../../Shared/ShHeader";
import SideBySideContainer from "../../Shared/SideBySideContainer";

let counter = 0;
const Main = ({ options }) => {
    console.log("Main " + counter++);
    const [innerOptions, setInnerOptions] = React.useState(options ?? []);
    return (
        <>
            <SideBySideContainer
                LeftComponent={<ButtonCreate />}
                RightComponent={
                    <ShHeader
                        title={"Dodaj nową opcję filtrowania"}
                        textSize={"text-sm"}
                        fontWeight={"font-[600]"}
                    />
                }
                gapNumber={"gap-8"}
                flexAuto={true}
                flexPosition={"js ic cs ss"}
                debug={false}
            />
            {innerOptions?.map((option) => {
                console.log(option);
            })}
        </>
    );
};

export default Main;
