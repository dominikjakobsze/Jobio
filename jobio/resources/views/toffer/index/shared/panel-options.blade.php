<form data-form-options
    class="f fr fw cs is js ss gap-3 w-[50%] max-w-[550px] translate-x-[0%] p-2 bg-white z-[201] fixed top-0 left-0 h-[100dvh] overflow-x-hidden overflow-y-auto shadow-lg drop-shadow-lg text-gray-700">
    @dump($items)
    <option-header class="pl-2 f flex-[0_1_auto] text-xl font-[700]">Doświadczenie</option-header>
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    <panel-option-container class="p-2 flex-[0_0_100%] f cs is js ss fr fw gap-2">
        @foreach ($items['options']['option-option_type-s'] as $item)
            <label data-checkbox
                class="f fr fnw cc js ic ss flex-[0_1_auto] font-[400] text-sm gap-1 bg-gray-100 py-0 px-2 cup rounded-lg">
                <input name="option-option_type-s[]" class="hidden" type="checkbox" value="{{ $item['option_value'] }}" />
                <panel-label-header
                    class="flex-[0_0_auto] py-2 font-[500] f">{{ $item['option_value'] }}</panel-label-header>
            </label>
        @endforeach
    </panel-option-container>
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    {{--  --}}
    <option-header class="pl-2 f flex-[0_1_auto] text-xl font-[700]">Technologie</option-header>
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    <panel-option-container class="p-2 flex-[0_0_100%] f cs is js ss fr fw gap-2">
        @foreach ($items['options']['option-option_type-t'] as $item)
            <label data-checkbox
                class="f fr fnw cc js ic ss flex-[0_1_auto] font-[400] text-sm gap-1 bg-gray-100 py-0 px-2 cup rounded-lg">
                <input name="option-option_type-t[]" class="hidden" type="checkbox"
                    value="{{ $item['option_value'] }}" />
                <panel-label-header
                    class="flex-[0_0_auto] py-2 font-[500] f">{{ $item['option_value'] }}</panel-label-header>
            </label>
        @endforeach
    </panel-option-container>
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    {{--  --}}
    <option-header class="pl-2 f flex-[0_1_auto] text-xl font-[700]">Narzędzia I Inne</option-header>
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    <panel-option-container class="p-2 flex-[0_0_100%] f cs is js ss fr fw gap-2">
        @foreach ($items['options']['option-option_type-d'] as $item)
            <label data-checkbox
                class="f fr fnw cc js ic ss flex-[0_1_auto] font-[400] text-sm gap-1 bg-gray-100 py-0 px-2 cup rounded-lg">
                <input name="option-option_type-d[]" class="hidden" type="checkbox"
                    value="{{ $item['option_value'] }}" />
                <panel-label-header
                    class="flex-[0_0_auto] py-2 font-[500] f">{{ $item['option_value'] }}</panel-label-header>
            </label>
        @endforeach
    </panel-option-container>
    {{--  --}}
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    <option-header class="pl-2 f flex-[0_1_auto] text-xl font-[700]">Lokalizacja</option-header>
    <panel-spacer class="f flex-[0_0_100%] h-[1px] bg-gray-200"></panel-spacer>
    <panel-option-container class="p-2 flex-[0_0_100%] f cs is js ss fr fw gap-2">
        @foreach ($items['options']['offer-city'] as $item)
            <label data-checkbox
                class="f fr fnw cc js ic ss flex-[0_1_auto] font-[400] text-sm gap-1 bg-gray-100 py-0 px-2 cup rounded-lg">
                <input name="offer-city[]" class="hidden" type="checkbox" value="{{ $item['city'] }}" />
                <panel-label-header class="flex-[0_0_auto] py-2 font-[500] f">{{ $item['city'] }}</panel-label-header>
            </label>
        @endforeach
    </panel-option-container>
    {{--  --}}
</form>
