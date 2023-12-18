import React from "react";

const Layout = ({ children }) => {
    return (
        <>
            <div className="w-full min-h-[100dvh] overflow-x-hidden overflow-y-auto bg-gray-100 p-2">
                {children}
            </div>
        </>
    );
};

export default Layout;
