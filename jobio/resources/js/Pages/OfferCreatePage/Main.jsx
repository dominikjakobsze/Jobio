import React from "react";

let counter = 0;
const Main = () => {
    console.log("Main" + counter++);
    return <div>test</div>;
};

export default Main;
