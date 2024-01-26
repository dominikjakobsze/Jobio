import React from "react";
import SupportMenu from "../Shared/SupportMenu";
import MenuHeader from "../Shared/MenuHeader";
import HomeCrums from "../Shared/HomeCrums";
import MenuContainerLayout from "../Shared/MenuContainerLayout";
import Spacer from "../Shared/Spacer";

const ProfileSupport = () => {
    return (
        <MenuContainerLayout>
            <Spacer type={"extra-large"} />
            <MenuHeader />
            <Spacer type={"extra-small"} />
            <HomeCrums />
            <Spacer type={"extra-large"} />
            <SupportMenu />
            <Spacer type={"extra-large"} />
            <Spacer type={"medium"} />
        </MenuContainerLayout>
    );
};

export default ProfileSupport;
