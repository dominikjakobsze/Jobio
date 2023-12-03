<form
    class="bg-white text-gray-700 text-lg font-[600] p-3 gap-3 fixed top-0 left-0 w-[60%] h-[100%] z-[103] overflow-x-hidden overflow-y-auto shadow-2xl drop-shadow-lg f fr fw cs is js ss">
    @dump($data)
    <div class="flex-[0_0_100%] f fnw fr ic cs js ss gap-5">
        <h2 class="flex-[0_0_auto]">Wynagrodzenie</h2>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-salary.png') }}">
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <div class="flex-[0_0_100%] f fnw fr ic cs js ss gap-5">
        <h2 class="flex-[0_0_auto]">Technologie</h2>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-salary.png') }}">
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <div class="flex-[0_0_100%] f fw fr ic cs js ss gap-5 font-[400] text-sm p-3">
        @foreach ($data['option.option_type.t'] as $item)
            <label class="f fr fnw cc js ic ss flex-[0_1_auto] text-gray-700 relative gap-3 font-normal text-sm cursor-pointer bg-gray-100 pl-4 pr-5 rounded-xl overflow-hidden">
                <input name="kit[]"
                    class="flex-[0_0_20px] h-[20px] text-gray-900 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    type="checkbox" value="MC Chicken" />
                <p class="flex-[0_0_auto] py-2 font-medium">{{ $item['option_value'] }}</p>
            </label>
        @endforeach
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <div class="flex-[0_0_100%] f fnw fr ic cs js ss gap-5">
        <h2 class="flex-[0_0_auto]">Narzędzia</h2>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-salary.png') }}">
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    @foreach ($data['option.option_type.d'] as $item)
        <p class="pl-10 text-gray-500">{{ $item['option_value'] }}</p>
    @endforeach
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <div class="flex-[0_0_100%] f fnw fr ic cs js ss gap-5">
        <h2 class="flex-[0_0_auto]">Doświadczenie</h2>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-salary.png') }}">
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    @foreach ($data['option.option_type.s'] as $item)
        <p class="pl-10 text-gray-500">{{ $item['option_value'] }}</p>
    @endforeach
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    <div class="flex-[0_0_100%] f fnw fr ic cs js ss gap-5">
        <h2 class="flex-[0_0_auto]">Lokalizacja</h2>
        <img class="flex-[0_0_40px] h-[40px] object-contain" src="{{ url('/endpoint/image/icons-salary.png') }}">
    </div>
    <div class="flex-[0_0_100%] h-[1px] bg-gray-200"></div>
    @foreach ($data['offer.city,voivodeship,zip_code'] as $item)
        <p class="pl-10 text-gray-500">{{ $item['city'] }}</p>
    @endforeach
</form>
