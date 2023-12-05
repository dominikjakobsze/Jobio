import "leaflet/dist/leaflet.css";
import { URL } from "../../../js/app";
import { initMap, renderMarkers } from "./js/map";
import { formRunner } from "./js/form";

initMap();
renderMarkers(`${URL}/endpoint/toffers`);
formRunner();