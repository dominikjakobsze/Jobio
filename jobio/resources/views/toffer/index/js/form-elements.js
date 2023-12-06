export const bindCheckboxBehaviour = async () => {
    [...document.querySelectorAll("[data-checkbox]")].map((checkbox) => {
        checkbox.addEventListener("click", (e) => {
            e.preventDefault();
            const checkbox = e.currentTarget.querySelector(
                'input[type="checkbox"]',
            );
            checkbox.checked = !checkbox.checked;
            e.currentTarget.classList.toggle("bg-gray-900");
            e.currentTarget.classList.toggle("text-gray-100");
        });
    });
};
