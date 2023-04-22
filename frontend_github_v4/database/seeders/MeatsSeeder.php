<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Meats;

class MeatsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Meats::create([
            'name' => 'chicken',
            'image'=>'chicken.png',
            'description'=>'This nutritious chicken offers multiple health benefits. chicken may lower your risk for cancer, diabetes, and heart disease. Research says apples may also help with weight loss, while improving your gut and brain health.',
        ]);

        Meats::create([
            'name' => 'beef',
            'image'=>'beef.png',
            'description'=>'This nutritious beef offers multiple health benefits. beef may lower your risk for cancer, diabetes, and heart disease. Research says apples may also help with weight loss, while improving your gut and brain health.',
        ]);

        Meats::create([
            'name' => 'turkey',
            'image'=>'turkey.png',
            'description'=>'This nutritious turkey offers multiple health benefits. turkey may lower your risk for cancer, diabetes, and heart disease. Research says apples may also help with weight loss, while improving your gut and brain health.',
        ]);

        Meats::create([
            'name' => 'duck',
            'image'=>'duck.png',
            'description'=>'This nutritious duck offers multiple health benefits. duck may lower your risk for cancer, diabetes, and heart disease. Research says apples may also help with weight loss, while improving your gut and brain health.',
        ]);

        Meats::create([
            'name' => 'pork',
            'image'=>'pork.png',
            'description'=>'This nutritious pork offers multiple health benefits. pork may lower your risk for cancer, diabetes, and heart disease. Research says apples may also help with weight loss, while improving your gut and brain health.',
        ]);

        Meats::create([
            'name' => 'lamb',
            'image'=>'lamb.png',
            'description'=>'This nutritious lamb offers multiple health benefits. lamb may lower your risk for cancer, diabetes, and heart disease. Research says apples may also help with weight loss, while improving your gut and brain health.',
        ]);
    }
}
