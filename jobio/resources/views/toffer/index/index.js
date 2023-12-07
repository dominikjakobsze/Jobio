import { bindCheckboxBehaviour } from "./js/form-elements";
import { closeColumnsPanel, closeOptionsPanel, openColumnsPanel, openOptionsPanel, sendOptionsForm } from "./js/form-component";
import { bindLeafletMapToElement } from "./js/map-component";

bindCheckboxBehaviour();
sendOptionsForm();
closeOptionsPanel();
openOptionsPanel();
bindLeafletMapToElement();
closeColumnsPanel();
openColumnsPanel();
