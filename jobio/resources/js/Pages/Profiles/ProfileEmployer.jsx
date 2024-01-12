import React from "react";
import MenuHeader from "../Shared/MenuHeader";
import HomeCrums from "../Shared/HomeCrums";
import EmployerMenu from "../Shared/EmployerMenu";

const ProfileEmployer = () => {
    return (
        <div className="f fr fw js is cs ss w-full min-h-[100dvh] bg-gray-100">
            <MenuHeader />
            <HomeCrums />
            <EmployerMenu />
        </div>
    );
};

export default ProfileEmployer;
