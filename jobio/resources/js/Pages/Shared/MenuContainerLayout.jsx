let counter = 0;
const MenuContainerLayout = ({ children }) => {
    console.log("MenuContainerLayout " + counter++);
    return (
        <div className="w-full bg-gray-100 min-h-[100dvh] f fr fw js is cs ss px-10">
            {children}
        </div>
    );
};
export default MenuContainerLayout;
