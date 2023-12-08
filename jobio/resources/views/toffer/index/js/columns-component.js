import { URL } from "../../../../js/app";

export const addDataToColumnsPanel = async (data) => {
    data = [];
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
                    class="overflow-hidden relative p-3 f fr fw cs ic js ss flex-[0_0_100%] gap-2 text-gray-700 text-lg font-[400] shadow-lg rounded-2xl bg-gray-950/[0.01]">
                    <panel-item-container class="f fr fnw cs ic js ss flex-[0_0_100%] gap-2 ">
                        <panel-item-icon class="flex-[0_0_auto] overflow-hidden f fr fnw cs ic jc ss rounded-2xl">
                            <img src="${
                                offer["company_icon"]
                            }" class="rounded-2xl object-contain flex-[0_0_100px] h-[100px]" />
                        </panel-item-icon>
                        <panel-item-container-nested class="f fr fw content-stretch ic justify-around self-stretch flex-[1_0_0]">
                            <panel-item-title class="flex-[0_0_100%] b truncate self-end font-[700] text-center">
                                ${offer["title"]}
                            </panel-item-title>
                            <panel-item-salary
                                class="flex-[0_0_45%] self-end  b truncate text-center text-[#48BB78] font-[700] text-base">
                                ${offer["min_salary"]} zł - ${
                                    offer["max_salary"]
                                } zł
                            </panel-item-salary>
                            <panel-item-city
                                class="flex-[0_0_45%] self-end  b truncate text-center text-[#48BB78] font-[700] text-base">
                                ${offer["city"]}
                            </panel-item-city>
                        </panel-item-container-nested>
                    </panel-item-container>
                    <panel-item-container class="f fr fnw cs ic js ss flex-[0_0_100%] gap-2">
                        <panel-item-option
                            class="p-1 flex-[1_0_0] text-gray-500 gap-2 f fr fnw cs ic js self-end overflow-y-hidden overflow-x-scroll text-xs font-[600]">
                            ${
                                offer["toftops"]
                                    .map((option) => {
                                        return option["toption"][
                                            "option_type"
                                        ] == "S"
                                            ? `<item-option class="b flex-[0_0_auto] bg-gray-100 px-3 py-2 rounded-full">${option["toption"]["option_value"]}</item-option>`
                                            : null;
                                    })
                                    .join("") ||
                                `<item-option class="b flex-[0_0_auto] bg-gray-100 px-3 py-2 rounded-full">Brak Informacji</item-option>`
                            }
                        </panel-item-option>
                        <img class="b flex-[0_0_40px] h-[40px] object-contain mb-[8px]"
                            src="${
                                URL + "/endpoint/image/icons-experience.png"
                            }" />
                    </panel-item-container>
                    <panel-item-container class="f fr fnw cs ic js ss flex-[0_0_100%] gap-2">
                        <panel-item-option
                            class="p-1 flex-[1_0_0] text-gray-500 gap-2 f fr fnw cs ic js self-end overflow-y-hidden overflow-x-scroll text-xs font-[600]">
                            ${
                                offer["toftops"]
                                    .map((option) => {
                                        return option["toption"][
                                            "option_type"
                                        ] == "T"
                                            ? `<item-option class="b flex-[0_0_auto] bg-gray-100 px-3 py-2 rounded-full">${option["toption"]["option_value"]}</item-option>`
                                            : null;
                                    })
                                    .join("") ||
                                `<item-option class="b flex-[0_0_auto] bg-gray-100 px-3 py-2 rounded-full">Brak Informacji</item-option>`
                            }
                        </panel-item-option>
                        <img class="b flex-[0_0_40px] h-[40px] object-contain mb-[8px]"
                            src="${
                                URL + "/endpoint/image/icons-technology.png"
                            }" />
                    </panel-item-container>
                    <panel-item-container class="f fr fnw cs ic js ss flex-[0_0_100%] gap-2">
                        <panel-item-option
                            class="p-1 flex-[1_0_0] text-gray-500 gap-2 f fr fnw cs ic js self-end overflow-y-hidden overflow-x-scroll text-xs font-[600]">
                            ${
                                offer["toftops"]
                                    .map((option) => {
                                        return option["toption"][
                                            "option_type"
                                        ] == "D"
                                            ? `<item-option class="b flex-[0_0_auto] bg-gray-100 px-3 py-2 rounded-full">${option["toption"]["option_value"]}</item-option>`
                                            : null;
                                    })
                                    .join("") ||
                                `<item-option class="b flex-[0_0_auto] bg-gray-100 px-3 py-2 rounded-full">Brak Informacji</item-option>`
                            }
                        </panel-item-option>
                        <img class="b flex-[0_0_40px] h-[40px] object-contain mb-[8px]"
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
    console.log(data.length === 0);
};
