import "leaflet/dist/leaflet.css";

[...document.querySelectorAll('[data-checkbox]')].map((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
    });
});

setTimeout(() => {
    const optionsForm = new FormData(document.querySelector('[data-form-options]'));
    console.log([...optionsForm]);
}, 5000);
