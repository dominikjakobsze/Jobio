import React from "react";
import MenuHeader from "../Shared/MenuHeader";
import HomeCrums from "../Shared/HomeCrums";
import EmployeeMenu from "../Shared/EmployeeMenu";
import MenuContainerLayout from "../Shared/MenuContainerLayout";
import Spacer from "../Shared/Spacer";

const ProfileEmployee = () => {
    return (
        <MenuContainerLayout>
            <Spacer type={"extra-large"} />
            <MenuHeader />
            <Spacer type={"extra-small"} />
            <HomeCrums />
            <Spacer type={"extra-large"} />
            <EmployeeMenu />
            <Spacer type={"extra-large"} />
            <Spacer type={"medium"} />
        </MenuContainerLayout>
    );
};

export default ProfileEmployee;
