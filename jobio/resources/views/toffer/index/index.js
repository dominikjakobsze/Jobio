import "leaflet/dist/leaflet.css";
import { bindCheckboxBehaviour } from "./js/form-elements";
import { closeOptionsPanel, sendOptionsForm } from "./js/form-component";

bindCheckboxBehaviour();
sendOptionsForm();
closeOptionsPanel();
