import DOMPurify from "dompurify";

export const URL = "http://127.0.0.1:7150";

export const exceptionBlock = async (functionToCheck) => {
    try {
        return await functionToCheck();
    } catch (exception) {
        //console.log(exception);
        window.location.href =
            URL +
            `/general/error/${exception?.response?.status}/${exception?.response?.data?.message}`;
    }
};

export const sanitizeContent = (content) => {
    const result = DOMPurify.sanitize(content);
    return result;
};
