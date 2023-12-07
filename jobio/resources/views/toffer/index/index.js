import { bindCheckboxBehaviour } from "./js/form-elements";
import { closeOptionsPanel, sendOptionsForm } from "./js/form-component";
import { bindLeafletMapToElement } from "./js/map-component";

bindCheckboxBehaviour();
sendOptionsForm();
closeOptionsPanel();
bindLeafletMapToElement();
