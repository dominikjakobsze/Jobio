import React from "react";

const OptionPanel = ({items}) => {
    const { options, salary } = items;
    const formRef = React.useRef(null);
    console.log(options, salary);
    return (
        <>
            <div className="w-full max-w-[500px] h-full overflow-hidden absolute z-[102] top-0 left-0 bg-white shadow-2xl overflow-x-hidden overflow-y-auto f fr fw js is cs ss">
                <form>
                    gd
                </form>
            </div>
        </>
    );
};

export default OptionPanel;
