import DOMPurify from "dompurify";

export const URL = "http://127.0.0.1:7150";

export const exceptionBlock = async (functionToCheck) => {
    try {
        return await functionToCheck();
    } catch (exception) {
        //console.log(exception);
        if (
            exception?.response?.status === 409 ||
            exception?.response?.status === "409"
        ) {
            return await Object?.values(
                JSON?.parse(exception?.response?.data?.message)[0],
            );
        }
        window.location.href =
            URL +
            `/general/error/${exception?.response?.status}/${exception?.response?.data?.message}`;
    }
};

export const sanitizeContent = (content) => {
    const result = DOMPurify.sanitize(content);
    return result;
};

export const stringToUpperCase = (value, fallback = null) => {
    try {
        return value.toUpperCase();
    } catch (exception) {
        if (fallback !== null) {
            return fallback;
        }
        return value;
    }
};
