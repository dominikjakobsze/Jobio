import React from "react";
import ShHeader from "../../Shared/ShHeader";
import Spacer from "../../Shared/Spacer";
import ShSubHeader from "../../Shared/ShSubHeader";
import AllUsers from "./Components/AllUsers";

const Main = ({ users }) => {
    return (
        <>
            <ShHeader
                title={"Lista wszystkich użytkowników"}
                textSize={"text-2xl"}
            />
            <Spacer type={"small"} />
            <ShSubHeader>Lista wszystkich użytkowników w systemie.</ShSubHeader>
            <Spacer type={"extra-large"} />
            <AllUsers users={users} />
            <Spacer type={"medium"} />
        </>
    );
};

export default Main;
