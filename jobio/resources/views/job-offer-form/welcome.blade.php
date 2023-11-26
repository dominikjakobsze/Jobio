@extends('base.base')

@section('title')
    Jobio
@endsection

@section('content')
    <?php $items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; ?>
    <form id="solid" class="f fr fw cs jc is ss flex-[0_0_100%] w-[100%] [&>*]:max-w-[750px] p-5 overflow-x-hidden">
        @csrf
        <label class="f fr fw cs js is ss flex-[0_0_100%] text-gray-700 font-normal text-lg">
            <h2 class="flex-[0_1_auto] py-2 font-medium">Nazwa Oferty Pracy</h2>
            <p class="flex-[0_0_100%] pb-2 text-xs text-gray-300 font-normal">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis nec porttitor augue. Nam tempor neque et elementum pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Etiam a luctus orci.</p>
            <div data-spacer class="flex-[0_0_100%]"></div>
            <input name="full_name"
                class="flex-[0_0_100%] rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                type="text" />
        </label>
        <div data-spacer class="flex-[0_0_100%] my-2"></div>
        <h2 class="flex-[0_0_100%] py-2 font-medium text-lg">Technologie</h2>
        <p class="flex-[0_0_100%] pb-2 text-xs text-gray-300 font-normal">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis nec porttitor augue. Nam tempor neque et elementum pellentesque. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam a luctus orci.</p>
        <div class="flex-[0_0_100%] fr fw f gap-2">
            @foreach ($items as $item)
                <label
                    class="f fr fnw cc js ic ss flex-[0_0_20%] min-w-[130px] max-w-[160px] text-gray-700 font-normal text-sm gap-2">
                    <input name="kit[]"
                        class="flex-[0_0_20px] h-[20px] text-gray-900 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                        type="checkbox" value="MC Chicken" />
                    <h2 class="flex-[0_0_auto] py-2 font-medium">MC Chicken</h2>
                </label>
            @endforeach
        </div>
        <div data-spacer class="flex-[0_0_100%] my-2"></div>
        <h2 class="flex-[0_0_100%] py-2 font-medium text-lg">Narzędzia, Frameworki i Inne</h2>
        <p class="flex-[0_0_100%] pb-2 text-xs text-gray-300 font-normal">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis nec porttitor augue. Nam tempor neque et elementum pellentesque. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam a luctus orci.</p>
        <div class="flex-[0_0_100%] fr fw f gap-2 max-h-[200px] overflow-x-hidden overflow-y-auto">
            @foreach ($items as $item)
                <label
                    class="f fr fnw cc js ic ss flex-[0_0_20%] min-w-[130px] max-w-[160px] text-gray-700 font-normal text-sm gap-2">
                    <input name="kit[]"
                        class="flex-[0_0_20px] h-[20px] text-gray-900 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                        type="checkbox" value="MC Chicken" />
                    <h2 class="flex-[0_0_auto] py-2 font-medium">MC Chicken</h2>
                </label>
            @endforeach
        </div>
        <div data-spacer class="flex-[0_0_100%] my-2"></div>
        <h2 class="flex-[0_0_100%] py-2 font-medium text-lg">Poziom doświadczenia</h2>
        <p class="flex-[0_0_100%] pb-2 text-xs text-gray-300 font-normal">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis nec porttitor augue. Nam tempor neque et elementum pellentesque. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam a luctus orci.</p>
        <div class="flex-[0_0_100%] fr fw f gap-2">
            @foreach (['trainee/intern', 'junior', 'junior+', 'mid', 'mid+', 'senior', 'expert'] as $item)
                <label
                    class="f fr fnw cc js ic ss flex-[0_0_20%] min-w-[130px] max-w-[160px] text-gray-700 font-normal text-sm gap-2">
                    <input name="kit[]"
                        class="flex-[0_0_20px] h-[20px] text-gray-900 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                        type="checkbox" value="MC Chicken" />
                    <h2 class="flex-[0_0_auto] py-2 font-medium">{{ ucfirst($item) }}</h2>
                </label>
            @endforeach
        </div>
        <div data-spacer class="flex-[0_0_100%] my-2"></div>
        <label class="f fr fw cs js is ss flex-[0_0_100%] text-gray-700 font-normal text-lg">
            <h2 class="flex-[0_1_auto] py-2 font-medium">Widełki Płacowe</h2>
            <p class="flex-[0_0_100%] pb-2 text-xs text-gray-300 font-normal">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis nec porttitor augue. Nam tempor neque et elementum pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Etiam a luctus orci.</p>
            <div data-spacer class="flex-[0_0_100%]"></div>
            <div class="f fr fw cs jb is ss flex-[0_0_100%] gap-5">
                <input name="full_name"
                    class="flex-[0_0_45%] rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    type="number" />
                <input name="full_name"
                    class="flex-[0_0_45%] rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    type="number" />
            </div>
        </label>
        <div data-spacer class="flex-[0_0_100%] my-2"></div>
        <label class="f fr fw cs js is ss flex-[0_0_100%] text-gray-700 font-normal text-lg">
            <h2 class="flex-[0_1_auto] py-2 font-medium">Liczba Potrzebnych Osób</h2>
            <p class="flex-[0_0_100%] pb-2 text-xs text-gray-300 font-normal">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis nec porttitor augue. Nam tempor neque et elementum pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Etiam a luctus orci.</p>
            <div data-spacer class="flex-[0_0_100%]"></div>
            <input name="full_name"
                class="flex-[0_0_100%] rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                type="number" />
        </label>
        <div data-spacer class="flex-[0_0_100%] my-2"></div>
        <label class="f fr fw cs js is ss flex-[0_0_100%] text-gray-700 font-normal text-lg">
            <h2 class="flex-[0_1_auto] py-2 font-medium">Delivery</h2>
            <div data-spacer class="flex-[0_0_100%]"></div>
            <select name="delivery"
                class="flex-[0_0_100%] rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                type="text">
                <option value="Glovo">Glovo</option>
                <option value="Uber Eats">Uber Eats</option>
                <option value="Bolt Food">Bolt Food</option>
            </select>
        </label>
        <div data-spacer class="flex-[0_0_100%] my-2"></div>
        <label class="f fr fw cs js is ss flex-[0_0_100%] text-gray-700 font-normal text-lg">
            <h2 class="flex-[0_1_auto] py-2 font-medium">Do Kiedy Ogłoszenie Ma Być Ważne</h2>
            <p class="flex-[0_0_100%] pb-2 text-xs text-gray-300 font-normal">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis nec porttitor augue. Nam tempor neque et elementum pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Etiam a luctus orci.</p>
            <div data-spacer class="flex-[0_0_100%]"></div>
            <input name="delivery_date"
                class="flex-[0_0_100%] rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                type="date" />
        </label>
        <div data-spacer class="flex-[0_0_100%] my-2"></div>
        <div data-spacer class="flex-[0_0_100%] my-2"></div>
        <input type="submit" name="" id="solidSubmit">
    </form>
@endsection

@push('css')
@endpush

@push('js')
@endpush
