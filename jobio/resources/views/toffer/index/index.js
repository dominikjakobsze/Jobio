import "leaflet/dist/leaflet.css";
import { URL } from "../../../js/app";
import { initMap, renderMarkers } from "./js/map";

initMap();
renderMarkers(`${URL}/endpoint/toffers`);