import axios from "axios";
import { URL } from "../../../../js/app";
import { renderMarkers } from "./map";

export const formRunner = async () => {
    const optionsForm = document.querySelector("#options");
    document.querySelector("#send").addEventListener("click", async () => {
        const formData = new FormData(optionsForm);
        // formData.forEach((value, key) => {
        //     console.log(`${key}: ${value}`);
        // });
        const queryStringRaw = new URLSearchParams(formData);
        const queryString = queryStringRaw.toString();
        //console.log(queryString);
        await renderMarkers(`${URL}/endpoint/toffers?${queryString}`);
    });
};
