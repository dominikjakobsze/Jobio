import React from "react";
import SupportMenu from "../Shared/SupportMenu";
import MenuHeader from "../Shared/MenuHeader";
import HomeCrums from "../Shared/HomeCrums";

const ProfileEmployer = () => {
    return (
        <div className="f fr fw js is cs ss w-full min-h-[100dvh] bg-gray-100">
            <MenuHeader />
            <HomeCrums />
            <SupportMenu />
        </div>
    );
};

export default ProfileEmployer;
