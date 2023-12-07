import axios from "axios";

export const sendOptionsForm = async () => {
    document
        .querySelector("[data-search-offers]")
        .addEventListener("click", async () => {
            const optionsForm = new FormData(
                document.querySelector("[data-form-options]"),
            );
            const queryStringData = new URLSearchParams(optionsForm).toString();
            try {
                const response = await axios.get(
                    `/endpoint/toffers?${queryStringData}`,
                );
                const result = await response.data;
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        });
};
