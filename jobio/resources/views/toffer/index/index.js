import "leaflet/dist/leaflet.css";
import { URL } from "../../../js/app";
import { initMap, renderMarkers } from "./js/map";
import axios from "axios";

initMap();
renderMarkers(`${URL}/endpoint/toffers`);
const optionsForm = document.querySelector("#options");
document.querySelector("#send").addEventListener("click", async () => {
    const formData = new FormData(optionsForm);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    const queryStringRaw = new URLSearchParams(formData);
    const queryString = queryStringRaw.toString();
    console.log(queryString);
    try{
        const response = await axios.get(`${URL}/endpoint/toffers?${queryString}`);
        const data = await response.data;
        console.log(data);
    }catch(error){
        console.log(error);
    }
});