const ErrorContainer = ({ errors }) => {
    if (errors.length === 0) {
        return;
    }

    return (
        <>
            <div className="flex-[0_0_100%] flex flex-wrap flex-row items-start justify-start content-start self-start font-[600] text-red-300 bg-red-200/50 border-2 border-solid border-red-400/50 py-1 px-5 text-sm">
                {errors?.map((error) => {
                    return <p key={error}>{error}</p>;
                })}
            </div>
        </>
    );
};

export default ErrorContainer;
