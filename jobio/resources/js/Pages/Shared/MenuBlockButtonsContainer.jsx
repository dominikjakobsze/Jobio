const MenuBlockButtonsContainer = ({ children }) => {
    return (
        <div className="flex flex-row flex-wrap lg:justify-start items-center justify-center content-start self-start flex-[0_0_100%] bg-transparent gap-5">
            {children}
        </div>
    );
};

export default MenuBlockButtonsContainer;
