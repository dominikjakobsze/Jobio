import React from "react";

let counter = 0;
const AllOptions = ({ options }) => {
    console.log("AllOptions " + counter++);
    const [innerOptions, setInnerOptions] = React.useState(options ?? []);

    return (
        <>
            {innerOptions?.map((option) => {
                console.log(option);
            })}
        </>
    );
};

export default AllOptions;
