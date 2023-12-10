import { URL } from "../../../../js/app";

export const addDataToColumnsPanel = async (data) => {
    document
        .querySelector("panel-columns[data-panel-columns] no-results")
        ?.remove();
    [
        ...document.querySelectorAll(
            "panel-columns[data-panel-columns] panel-spacer",
        ),
    ]?.map((element) => {
        element.remove();
    });
    [
        ...document.querySelectorAll(
            "panel-columns[data-panel-columns] panel-columns-item[data-column-item]",
        ),
    ]?.map((element) => {
        element.remove();
    });
    const generateTemplateColumns = async () => {
        return [...data]?.map((offer) => {
            return `
                <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
                <panel-columns-item data-column-item
                    class="overflow-hidden relative p-2 md:p-3 f fr fw cs ic js ss flex-[0_0_100%] gap-1 md:gap-2 text-gray-700 text-lg font-[400] shadow-lg rounded-2xl bg-gray-950/[0.01]">
                    <panel-item-container class="f fr fnw cs ic js ss flex-[0_0_100%] gap-2">
                        <panel-item-icon class="flex-[0_0_auto] overflow-hidden f fr fnw cs ic jc ss rounded-2xl">
                            <img src="${
                                offer["company_icon"]
                            }" class="rounded-2xl object-contain md:flex-[0_0_100px] md:h-[100px] flex-[0_0_70px] h-[70px]" />
                        </panel-item-icon>
                        <panel-item-container-nested class="f fr fw content-stretch ic justify-around self-stretch flex-[1_0_0]">
                            <panel-item-title class="flex-[0_0_100%] b truncate self-end font-[700] text-center text-sm md:text-lg">
                                ${offer["title"]}
                            </panel-item-title>
                            <panel-item-salary
                                class="flex-[0_0_100%] md:flex-[0_0_45%] self-end  b truncate text-center text-[#48BB78] font-[700] text-xs md:text-base">
                                ${offer["min_salary"]} zł - ${
                                    offer["max_salary"]
                                } zł
                            </panel-item-salary>
                            <panel-item-city
                                class="flex-[0_0_100%] md:flex-[0_0_45%] self-end  b truncate text-center text-[#48BB78] font-[700] text-xs md:text-base">
                                ${offer["city"]}
                            </panel-item-city>
                        </panel-item-container-nested>
                    </panel-item-container>
                    <panel-item-container class="hidden md:flex fr fnw cs ic js ss flex-[0_0_100%] gap-2">
                        <panel-item-option
                            class="p-1 flex-[1_0_0] text-gray-500 gap-2 f fr fnw cs ic js self-end overflow-y-hidden overflow-x-scroll md:text-xs font-[600]">
                            ${
                                offer["toftops"]
                                    .map((option) => {
                                        return option["toption"][
                                            "option_type"
                                        ] == "S"
                                            ? `<item-option class="b flex-[0_0_auto] bg-gray-100 md:px-3 md:py-2 px-2 rounded-full md:text-xs text-[10px]">${option["toption"]["option_value"]}</item-option>`
                                            : null;
                                    })
                                    .join("") ||
                                `<item-option class="b flex-[0_0_auto] bg-gray-100 md:px-3 md:py-2 px-2 rounded-full md:text-xs text-[10px]">Brak Informacji</item-option>`
                            }
                        </panel-item-option>
                        <img class="b flex-[0_0_25px] h-[25px] md:flex-[0_0_40px] md:h-[40px] object-contain mb-[8px]"
                            src="${
                                URL + "/endpoint/image/icons-experience.png"
                            }" />
                    </panel-item-container>
                    <panel-item-container class="hidden md:flex fr fnw cs ic js ss flex-[0_0_100%] gap-2">
                        <panel-item-option
                            class="p-1 flex-[1_0_0] text-gray-500 gap-2 f fr fnw cs ic js self-end overflow-y-hidden overflow-x-scroll md:text-xs font-[600]">
                            ${
                                offer["toftops"]
                                    .map((option) => {
                                        return option["toption"][
                                            "option_type"
                                        ] == "T"
                                            ? `<item-option class="b flex-[0_0_auto] bg-gray-100 md:px-3 md:py-2 px-2 rounded-full md:text-xs text-[10px]">${option["toption"]["option_value"]}</item-option>`
                                            : null;
                                    })
                                    .join("") ||
                                `<item-option class="b flex-[0_0_auto] bg-gray-100 md:px-3 md:py-2 px-2 rounded-full md:text-xs text-[10px]">Brak Informacji</item-option>`
                            }
                        </panel-item-option>
                        <img class="b flex-[0_0_25px] h-[25px] md:flex-[0_0_40px] md:h-[40px] object-contain mb-[8px]"
                            src="${
                                URL + "/endpoint/image/icons-technology.png"
                            }" />
                    </panel-item-container>
                    <panel-item-container class="hidden md:flex fr fnw cs ic js ss flex-[0_0_100%] gap-2">
                        <panel-item-option
                            class="p-1 flex-[1_0_0] text-gray-500 gap-2 f fr fnw cs ic js self-end overflow-y-hidden overflow-x-scroll md:text-xs font-[600]">
                            ${
                                offer["toftops"]
                                    .map((option) => {
                                        return option["toption"][
                                            "option_type"
                                        ] == "D"
                                            ? `<item-option class="b flex-[0_0_auto] bg-gray-100 md:px-3 md:py-2 px-2 rounded-full md:text-xs text-[10px]">${option["toption"]["option_value"]}</item-option>`
                                            : null;
                                    })
                                    .join("") ||
                                `<item-option class="b flex-[0_0_auto] bg-gray-100 md:px-3 md:py-2 px-2 rounded-full md:text-xs text-[10px]">Brak Informacji</item-option>`
                            }
                        </panel-item-option>
                        <img class="b flex-[0_0_25px] h-[25px] md:flex-[0_0_40px] md:h-[40px] object-contain mb-[8px]"
                            src="${URL + "/endpoint/image/icons-tools.png"}" />
                    </panel-item-container>
                </panel-columns-item>
            `;
        });
    };
    const result = await generateTemplateColumns();
    document
        .querySelector("panel-columns[data-panel-columns]")
        .insertAdjacentHTML("beforeend", result.join(""));
    if (data.length === 0) {
        document
            .querySelector("panel-columns[data-panel-columns]")
            .insertAdjacentHTML(
                "beforeend",
                `
            <no-results class="f fr fw is ss cs js bg-white flex-[0_0_70%] mx-auto p-10 gap-5 rounded-2xl">
                <img src="${
                    URL + "/endpoint/image/images-nooffer.png"
                }" class="flex-[0_0_100%] max-h-[150px] object-contain">
                <h2 class="flex-[0_0_100%] text-gray-300 text-lg font-[300] text-center">Brak wyników spełniających kryteria
                </h2>
            </no-results>
        `,
            );
    }
};
