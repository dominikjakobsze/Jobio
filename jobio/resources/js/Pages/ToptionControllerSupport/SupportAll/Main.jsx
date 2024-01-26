import { URL as localUrl } from "../../../app";
import React from "react";
import ButtonCreate from "../../Shared/ButtonCreate";
import ShHeader from "../../Shared/ShHeader";
import SideBySideContainer from "../../Shared/SideBySideContainer";
import Spacer from "../../Shared/Spacer";
import ShSubHeader from "../../Shared/ShSubHeader";
import AllOptions from "./Components/AllOptions";

let counter = 0;
const Main = ({ options }) => {
    console.log("Main " + counter++);
    return (
        <>
            <SideBySideContainer
                LeftComponent={<ButtonCreate link={"/support/option-create"} />}
                RightComponent={
                    <ShHeader
                        title={"Dodaj nową opcję filtrowania"}
                        textSize={"text-sm"}
                        fontWeight={"font-[600]"}
                    />
                }
                gapNumber={"gap-8"}
                flexAuto={true}
                flexPosition={
                    "items-center content-start justify-center lg:justify-start self-start"
                }
                debug={false}
            />
            <Spacer type={"extra-large"} />
            <ShHeader
                title={"Lista wszystkich filtrów"}
                textSize={"text-2xl"}
            />
            <Spacer type={"small"} />
            <ShSubHeader>
                Lista wszystkich aktywnych filtrów w systemie.
                <br /> S - oznacza filtr dotyczący doświadczenia,
                <br /> D - oznacza filtr dotyczący narzędzii i innych,
                <br /> T - oznacza filtr dotyczący technologii
            </ShSubHeader>
            <Spacer type={"extra-large"} />
            <Spacer type={"medium"} />
            <AllOptions options={options} />
        </>
    );
};

export default Main;
