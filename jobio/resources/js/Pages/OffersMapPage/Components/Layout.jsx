const Layout = ({ children }) => {
    return (
        <>
            <div className="w-full h-[100dvh] overflow-hidden relative z-[100]">
                {children}
            </div>
        </>
    );
};

export default Layout;
