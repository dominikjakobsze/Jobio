import React from "react";

let counter = 0;
const ErrorBlock = ({ errors }) => {
    console.log("ErrorBlock " + counter++);
    return errors?.length > 0 ? (
        <div className="flex-[0_0_95%] text-sm f fr fw js is cs ss bg-red-300/20 p-5 border-red-400/20 border-2 border-solid mx-auto rounded-lg">
            {errors?.map((error) => {
                return (
                    <div
                        key={error}
                        className="flex-[0_0_100%] f fr fw js is cs ss p-[2px]"
                    >
                        <p className="flex-[0_1_auto] text-red-300">{error}</p>
                    </div>
                );
            })}
        </div>
    ) : null;
};

export default ErrorBlock;
