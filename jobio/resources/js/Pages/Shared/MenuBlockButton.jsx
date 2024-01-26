const MenuBlockButton = ({ IconComponent, actionTitle, link }) => {
    return (
        <div
            onClick={() => {
                window.location.href = link;
            }}
            className="flex-[0_0_100%] max-w-[240px]  lg:max-w-none lg:flex-[0_1_auto] f fr fw jc is ss cs rounded-xl bg-gray-200/50 p-5 hover:brightness-110 cursor-pointer gap-1"
        >
            {IconComponent}
            <h1 className="text-gray-700 text-lg font-[700] flex-[0_0_100%] text-center">
                {actionTitle}
            </h1>
        </div>
    );
};

export default MenuBlockButton;
