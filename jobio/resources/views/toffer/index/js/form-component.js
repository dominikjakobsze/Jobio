import { animationColumnsPanel, animationOptionsPanel } from "./animations";
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
            animationOptionsPanel.reverse();
        });
};

export const openOptionsPanel = async () => {
    document
        .querySelector("[data-open-panel-options]")
        .addEventListener("click", async () => {
            animationOptionsPanel.play();
        });
};

export const closeColumnsPanel = async () => {
    document
        .querySelector("[data-close-panel-columns]")
        .addEventListener("click", async () => {
            animationColumnsPanel.reverse();
        });
};

export const openColumnsPanel = async () => {
    document
        .querySelector("[data-open-panel-columns]")
        .addEventListener("click", async () => {
            animationColumnsPanel.play();
        });
};
