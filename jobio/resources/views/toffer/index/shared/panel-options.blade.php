<form data-form-options
    class="f fr fw cs is js ss gap-3 w-[50%] max-w-[550px] translate-x-[0%] p-2 bg-white z-[201] fixed top-0 left-0 h-[100dvh] overflow-x-hidden overflow-y-auto shadow-lg drop-shadow-lg text-gray-700">
    @dump($items)
    <panel-header-container class="pl-2 flex-[0_0_100%] cc items-end js ss f fr fw gap-5">
        <option-header class="f flex-[0_1_auto] text-xl font-[700]">Wynagrodzenie</option-header>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-salary.png') }}" />
    </panel-header-container>
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    <panel-option-container class="p-2 flex-[0_0_100%] f cs is jc ss fr fw gap-8">
        <input name="offer-min_salary" class="flex-[0_0_45%] text-gray-700 text-sm font-[400] rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" type="number" placeholder="{{ $items['salary']['offer-min_salary'] }}" />
        <input name="offer-max_salary" class="flex-[0_0_45%] text-gray-700 text-sm font-[400] rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" type="number" placeholder="{{ $items['salary']['offer-max_salary'] }}" />
    </panel-option-container>
    {{--  --}}
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    <panel-header-container class="pl-2 flex-[0_0_100%] cc items-end js ss f fr fw gap-5">
        <option-header class="f flex-[0_1_auto] text-xl font-[700]">Doświadczenie</option-header>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-experience.png') }}" />
    </panel-header-container>
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    <panel-option-container class="p-2 flex-[0_0_100%] f cs is js ss fr fw gap-2">
        @foreach ($items['options']['option-option_type-s'] as $item)
            <label data-checkbox
                class="f fr fnw cc js ic ss flex-[0_1_auto] font-[400] text-sm gap-1 bg-gray-100 py-0 px-2 cup rounded-lg">
                <input name="option-option_type-s[]" class="hidden" type="checkbox"
                    value="{{ $item['option_value'] }}" />
                <panel-label-header
                    class="flex-[0_0_auto] py-2 font-[400] f">{{ $item['option_value'] }}</panel-label-header>
            </label>
        @endforeach
    </panel-option-container>
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    {{--  --}}
    <panel-header-container class="pl-2 flex-[0_0_100%] cc items-end js ss f fr fw gap-5">
        <option-header class="f flex-[0_1_auto] text-xl font-[700]">Technologie</option-header>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-technology.png') }}" />
    </panel-header-container>
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    <panel-option-container class="p-2 flex-[0_0_100%] f cs is js ss fr fw gap-2">
        @foreach ($items['options']['option-option_type-t'] as $item)
            <label data-checkbox
                class="f fr fnw cc js ic ss flex-[0_1_auto] font-[400] text-sm gap-1 bg-gray-100 py-0 px-2 cup rounded-lg">
                <input name="option-option_type-t[]" class="hidden" type="checkbox"
                    value="{{ $item['option_value'] }}" />
                <panel-label-header
                    class="flex-[0_0_auto] py-2 font-[400] f">{{ $item['option_value'] }}</panel-label-header>
            </label>
        @endforeach
    </panel-option-container>
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    {{--  --}}
    <panel-header-container class="pl-2 flex-[0_0_100%] cc items-end js ss f fr fw gap-5">
        <option-header class="f flex-[0_1_auto] text-xl font-[700]">Narzędzia I Inne</option-header>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-tools.png') }}" />
    </panel-header-container>
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    <panel-option-container class="p-2 flex-[0_0_100%] f cs is js ss fr fw gap-2">
        @foreach ($items['options']['option-option_type-d'] as $item)
            <label data-checkbox
                class="f fr fnw cc js ic ss flex-[0_1_auto] font-[400] text-sm gap-1 bg-gray-100 py-0 px-2 cup rounded-lg">
                <input name="option-option_type-d[]" class="hidden" type="checkbox"
                    value="{{ $item['option_value'] }}" />
                <panel-label-header
                    class="flex-[0_0_auto] py-2 font-[400] f">{{ $item['option_value'] }}</panel-label-header>
            </label>
        @endforeach
    </panel-option-container>
    {{--  --}}
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    <panel-header-container class="pl-2 flex-[0_0_100%] cc items-end js ss f fr fw gap-5">
        <option-header class="f flex-[0_1_auto] text-xl font-[700]">Lokalizacja</option-header>
        <img class="flex-[0_0_40px] h-[40px] object-contain"
            src="{{ url('/endpoint/image/icons-localisation.png') }}" />
    </panel-header-container>
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    <panel-option-container class="p-2 flex-[0_0_100%] f cs is js ss fr fw gap-2">
        @foreach ($items['options']['offer-city'] as $item)
            <label data-checkbox
                class="f fr fnw cc js ic ss flex-[0_1_auto] font-[400] text-sm gap-1 bg-gray-100 py-0 px-2 cup rounded-lg">
                <input name="offer-city[]" class="hidden" type="checkbox" value="{{ $item['city'] }}" />
                <panel-label-header class="flex-[0_0_auto] py-2 font-[400] f">{{ $item['city'] }}</panel-label-header>
            </label>
        @endforeach
    </panel-option-container>
</form>
