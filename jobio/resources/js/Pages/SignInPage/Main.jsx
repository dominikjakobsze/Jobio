import React from "react";
import axios from "axios";

const Main = () => {
    const formRef = React.useRef(null);
    const emailRef = React.useRef(null);
    const sendForm = React.useCallback(async (e) => {
        e.preventDefault();
        emailRef.current.placeholder = "Adres Email";
        try {
            const response = await axios.post(
                "/endpoint/sign-in",
                new FormData(formRef.current),
            );
            const result = await response.data;
            console.log(result?.url);
        } catch (exception) {
            console.log(exception);
            emailRef.current.placeholder = exception.response.data.message;
        }
    }, []);

    return (
        <form
            method="post"
            action="/endpoint/sign-in"
            ref={formRef}
            className="w-full min-h-[100dvh] bg-gray-100 f fr fw jc ic cc ss gap-5"
        >
            <input
                ref={emailRef}
                placeholder="Adres Email"
                className="text-center text-gray-700 text-xl font-[700] flex-[0_0_90%] max-w-[350px] ss px-0.5 border-0 border-b-2 bg-transparent border-gray-200 focus:ring-0 focus:border-black"
                type="text"
                name="email"
            />
            <div className="flex-[0_0_100%]"></div>
            <input
                type="submit"
                value="Wyślij kod"
                onClick={(e) => sendForm(e)}
                className="text-center text-gray-700 text-lg cup hover:text-gray-400 font-[600] flex-[0_0_90%] max-w-[350px] ss"
            />
        </form>
    );
};

export default Main;
