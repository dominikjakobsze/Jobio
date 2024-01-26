import React from "react";
import EmployerMenu from "../Shared/EmployerMenu";
import MenuHeader from "../Shared/MenuHeader";
import HomeCrums from "../Shared/HomeCrums";
import MenuContainerLayout from "../Shared/MenuContainerLayout";
import Spacer from "../Shared/Spacer";

const ProfileEmployer = () => {
    return (
        <MenuContainerLayout>
            <Spacer type={"extra-large"} />
            <MenuHeader />
            <Spacer type={"extra-small"} />
            <HomeCrums />
            <Spacer type={"extra-large"} />
            <EmployerMenu />
            <Spacer type={"extra-large"} />
            <Spacer type={"medium"} />
        </MenuContainerLayout>
    );
};

export default ProfileEmployer;
