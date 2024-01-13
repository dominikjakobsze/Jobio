import { URL as localUrl } from "../../../app";
import React from "react";
import ButtonCreate from "../../Shared/ButtonCreate";

let counter = 0;
const Main = ({ options }) => {
    console.log("Main " + counter++);
    const [innerOptions, setInnerOptions] = React.useState(options ?? []);
    return (
        <>
            <ButtonCreate />
            {innerOptions?.map((option) => {
                console.log(option);
            })}
        </>
    );
};

export default Main;
