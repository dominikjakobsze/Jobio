<form
    id="options"
    class="bg-white text-gray-700 text-lg font-[600] p-3 gap-3 fixed top-0 left-0 w-[60%] h-[100%] z-[103] overflow-x-hidden overflow-y-auto shadow-2xl drop-shadow-lg f fr fw cs is js ss">
    @dump($data)
    <p id="send">test</p>
    <div class="flex-[0_0_100%] f fnw fr ic cs js ss gap-5">
        <h2 class="flex-[0_0_auto]">Wynagrodzenie</h2>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-salary.png') }}">
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <label class="mx-auto f fr fw cs is ss js justify-around flex-[0_0_40%] text-gray-700 font-normal text-lg">
        <input data-input-number="min" name="offer-min_salary" value="{{ $data['offer-min_salary'] }}"
            class="flex-[0_0_100%] text-center placeholder:text-gray-500 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            type="number" />
    </label>
    <label class="mx-auto f fr fw cs is ss js flex-[0_0_40%] text-gray-700 font-normal text-lg">
        <input data-input-number="max" name="offer-max_salary" value="{{ $data['offer-max_salary'] }}"
            class="flex-[0_0_100%] text-center placeholder:text-gray-500 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            type="number" />
    </label>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <div class="flex-[0_0_100%] f fnw fr ic cs js ss gap-5">
        <h2 class="flex-[0_0_auto]">Technologie</h2>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-technology.png') }}">
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <div class="flex-[0_0_100%] f fw fr ic cs js ss gap-5 font-[400] text-sm p-3">
        @foreach ($data['option-option_type-t'] as $item)
            <label
                class="f fr fnw cc js ic ss flex-[0_1_auto] text-gray-700 relative gap-3 font-normal text-xs cursor-pointer bg-gray-100 pl-4 pr-5 rounded-xl overflow-hidden">
                <input name="option-option_type-t[]"
                    class="flex-[0_0_20px] h-[20px] text-gray-900 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    type="checkbox" value="{{ $item['option_value'] }}" />
                <p class="flex-[0_0_auto] py-2 font-medium">{{ $item['option_value'] }}</p>
            </label>
        @endforeach
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <div class="flex-[0_0_100%] f fnw fr ic cs js ss gap-5">
        <h2 class="flex-[0_0_auto]">Narzędzia</h2>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-tools.png') }}">
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <div class="flex-[0_0_100%] f fw fr ic cs js ss gap-5 font-[400] text-sm p-3">
        @foreach ($data['option-option_type-d'] as $item)
            <label
                class="f fr fnw cc js ic ss flex-[0_1_auto] text-gray-700 relative gap-3 font-normal text-xs cursor-pointer bg-gray-100 pl-4 pr-5 rounded-xl overflow-hidden">
                <input name="option-option_type-d[]"
                    class="flex-[0_0_20px] h-[20px] text-gray-900 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    type="checkbox" value="{{ $item['option_value'] }}" />
                <p class="flex-[0_0_auto] py-2 font-medium">{{ $item['option_value'] }}</p>
            </label>
        @endforeach
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <div class="flex-[0_0_100%] f fnw fr ic cs js ss gap-5">
        <h2 class="flex-[0_0_auto]">Doświadczenie</h2>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-experience.png') }}">
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <div class="flex-[0_0_100%] f fw fr ic cs js ss gap-5 font-[400] text-sm p-3">
        @foreach ($data['option-option_type-s'] as $item)
            <label
                class="f fr fnw cc js ic ss flex-[0_1_auto] text-gray-700 relative gap-3 font-normal text-xs cursor-pointer bg-gray-100 pl-4 pr-5 rounded-xl overflow-hidden">
                <input name="option-option_type-s[]"
                    class="flex-[0_0_20px] h-[20px] text-gray-900 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    type="checkbox" value="{{ $item['option_value'] }}" />
                <p class="flex-[0_0_auto] py-2 font-medium">{{ $item['option_value'] }}</p>
            </label>
        @endforeach
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <div class="flex-[0_0_100%] f fnw fr ic cs js ss gap-5">
        <h2 class="flex-[0_0_auto]">Lokalizacja</h2>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-localisation.png') }}">
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <div class="flex-[0_0_100%] f fw fr ic cs js ss gap-5 font-[400] text-sm p-3">
        @foreach ($data['offer-city,voivodeship,zip_code'] as $item)
            <label
                class="f fr fnw cc js ic ss flex-[0_0_100%] text-gray-700 relative gap-3 font-normal text-xs cursor-pointer bg-gray-100 pl-4 pr-5 rounded-xl overflow-hidden">
                <input name="offer-city,voivodeship,zip_code[]"
                    class="flex-[0_0_20px] h-[20px] text-gray-900 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    type="checkbox"
                    value="{{ $item['city'] }},{{ $item['voivodeship'] }},{{ $item['zip_code'] }}" />
                <p class="flex-[0_0_auto] py-2 font-medium">{{ $item['city'] }} {{ $item['zip_code'] }}
                    {{ Str::ucfirst($item['voivodeship']) }}</p>
            </label>
        @endforeach
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
</form>
