const SendFormButton = ({ handleSendForm, formRef }) => {
    return (
        <>
            <div
                onClick={() => handleSendForm(formRef)}
                className="bg-sky-300/20 text-base font-[600] text-sky-300 py-1 px-4 border-2 border-solid border-sky-500/20 rounded-xl hover:brightness-110 flex-[0_1_auto] cursor-pointer"
            >
                Prześlij Formularz
            </div>
        </>
    );
};

export default SendFormButton;
