import "leaflet/dist/leaflet.css";
import { bindCheckboxBehaviour } from "./js/form-elements";
import axios from "axios";

bindCheckboxBehaviour();

setTimeout(async () => {
    const optionsForm = new FormData(
        document.querySelector("[data-form-options]"),
    );
    console.log([...optionsForm]);
    const queryStringData = new URLSearchParams(optionsForm).toString();
    console.log(queryStringData);
    try{
        const response = await axios.get(`/endpoint/toffers?${queryStringData}`);
        const result = await response.data;
        console.log(result);
    }catch(error){
        console.log(error)
    }
}, 8000);
