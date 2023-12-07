<?php

namespace Database\Factories;

use App\Models\Tperson;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Toffer>
 */
class TofferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        sleep(2);
        $employers = Tperson::where("role","=","employer")->get();
        if(count($employers) == 0){
            abort(500,'there is no user with role "employer"');
        }
        $arrayOfIds = [];
        foreach($employers as $employer){
            $arrayOfIds[] = $employer->getAttribute('id');
        }
        $minSalary = fake()->numberBetween(3600, 17000);
        $maxSalary = fake()->numberBetween($minSalary, 17000);
        $lat_min = 50.550035;
        $lat_max = 53.743635;
        $long_min = 15.558556;
        $long_max = 22.881195;
        $lat = fake()->randomFloat(6, $lat_min, $lat_max);
        $long = fake()->randomFloat(6, $long_min, $long_max);
        $request = Http::get('https://api.jawg.io/places/v1/reverse?access-token=jJNHET49eekqSetNpABgWWUYxS144E1aJeQe7wJHNSU2HSrZFKUzueYBnCtS93nh&size=1&lang=pl-PL&point.lat=' . $lat . '&point.lon=' . $long);
        if ($request->failed()) {
            abort(500,'request to api failed - cannot process factory');
        }
        $request_data = $request->collect()->toArray()['features'][0]['properties'];
        $street = $request_data['name'] ?? null;
        $zip_code = $request_data['postalcode'] ?? null;
        $voivodeship = $request_data['region'] ?? null;
        $city = $request_data['localadmin'] ?? null;
        if($street === null || $zip_code === null || $voivodeship === null || $city === null){
            sleep(2);
            $lat_min = 52.277665;
            $lat_max = 52.279766;
            $long_min = 21.018917;
            $long_max = 21.113962;
            $lat = fake()->randomFloat(6, $lat_min, $lat_max);
            $long = fake()->randomFloat(6, $long_min, $long_max);
            $request = Http::get('https://api.jawg.io/places/v1/reverse?access-token=jJNHET49eekqSetNpABgWWUYxS144E1aJeQe7wJHNSU2HSrZFKUzueYBnCtS93nh&size=1&lang=pl-PL&point.lat=' . $lat . '&point.lon=' . $long);
            if ($request->failed()) {
                abort(500,'request to api failed - cannot process factory');
            }
            $request_data = $request->collect()->toArray()['features'][0]['properties'];
            $street = $request_data['name'];
            $zip_code = $request_data['postalcode'] ?? "00-110";
            $voivodeship = $request_data['region'];
            $city = $request_data['localadmin'];
        }
        return [
            'min_salary' => $minSalary,
            'max_salary' => $maxSalary,
            'title' => fake()->text(45),
            'page_offer' => json_encode('fsd'),
            'longitude' => $long,
            'latitude' => $lat,
            'city' => $city,
            'street' => $street,
            'zip_code' => $zip_code,
            'voivodeship' => $voivodeship,
            'temployer_id' => fake()->randomElement($arrayOfIds),
            'company_icon' => implode('', fake()->words(4)),
        ];
    }
}

// $pageOffer['page'] = '<div class="header">
// <h1>My Website</h1>
// <p>A website created by me.</p>
// </div>

// <div class="navbar">
// <a href="#">Link</a>
// <a href="#">Link</a>
// <a href="#">Link</a>
// <a href="#" class="right">Link</a>
// </div>

// <div class="row">
// <div class="side">
//   <h2>About Me</h2>
//   <h5>Photo of me:</h5>
//   <div class="fakeimg" style="height:200px;">Image</div>
//   <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
//   <h3>More Text</h3>
//   <p>Lorem ipsum dolor sit ame.</p>
//   <div class="fakeimg" style="height:60px;">Image</div><br>
//   <div class="fakeimg" style="height:60px;">Image</div><br>
//   <div class="fakeimg" style="height:60px;">Image</div>
// </div>
// <div class="main">
//   <h2>TITLE HEADING</h2>
//   <h5>Title description, Dec 7, 2017</h5>
//   <div class="fakeimg" style="height:200px;">Image</div>
//   <p>Some text..</p>
//   <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
//   <br>
//   <h2>TITLE HEADING</h2>
//   <h5>Title description, Sep 2, 2017</h5>
//   <div class="fakeimg" style="height:200px;">Image</div>
//   <p>Some text..</p>
//   <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
// </div>
// </div>

// <div class="footer">
// <h2>Footer</h2>
// </div>';
