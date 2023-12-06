import "leaflet/dist/leaflet.css";
import { bindCheckboxBehaviour } from "./js/form-elements";
import axios from "axios";

bindCheckboxBehaviour();

setTimeout(() => {
    const optionsForm = new FormData(
        document.querySelector("[data-form-options]"),
    );
    console.log([...optionsForm]);
    const queryStringData = new URLSearchParams(optionsForm).toString();
    axios
        .get(`/endpoint/toffers?${queryStringData}`)
        .catch(function (error) {
            console.log(error);
        });
    console.log('do not next');
}, 5000);
