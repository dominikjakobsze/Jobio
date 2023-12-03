<div
    class="bg-gray-100/90 fixed top-0 left-0 w-[50%] h-[100%] z-[103] overflow-x-hidden overflow-y-auto shadow-2xl drop-shadow-lg">
    @dump($data)
    <h2>Wynagrodzenie</h2>
    <h2>Technologie</h2>
    @foreach ($data['option.option_type.t'] as $item)
        <p class="pl-10 text-gray-500">{{ $item['option_value'] }}</p>
    @endforeach
    <h2>Narzędzia</h2>
    @foreach ($data['option.option_type.d'] as $item)
        <p class="pl-10 text-gray-500">{{ $item['option_value'] }}</p>
    @endforeach
    <h2>Doświadczenie</h2>
    @foreach ($data['option.option_type.s'] as $item)
        <p class="pl-10 text-gray-500">{{ $item['option_value'] }}</p>
    @endforeach
    <h2>Lokalizacja</h2>
    @foreach ($data['offer.city,voivodeship,zip_code'] as $item)
        <p class="pl-10 text-gray-500">{{ $item['city'] }}</p>
    @endforeach
</div>
