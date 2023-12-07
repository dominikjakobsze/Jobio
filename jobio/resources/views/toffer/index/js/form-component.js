import { animationOptionsPanel } from "./animations";
import { addMarkersToMap } from "./map-component";

export const sendOptionsForm = async () => {
    document
        .querySelector("[data-search-offers]")
        .addEventListener("click", async () => {
            const optionsForm = new FormData(
                document.querySelector("[data-form-options]"),
            );
            const queryStringData = new URLSearchParams(optionsForm).toString();
            await addMarkersToMap(queryStringData);
        });
};

export const closeOptionsPanel = async () => {
    document
        .querySelector("[data-close-panel]")
        .addEventListener("click", async () => {
            animationOptionsPanel.play();
        });
};
