<?php

namespace Database\Seeders;

use App\Models\Meats;
use App\Models\MeatsBenefits;
use App\Models\MeatsFacts;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MeatsFactsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(Meats::all() as $meat){
            MeatsFacts::create([
                'meat_id'=>$meat->id,
                'name'=>'Calories',
                'description'=>'98'
            ]);

            MeatsFacts::create([
                'meat_id'=>$meat->id,
                'name'=>'Carbs',
                'description'=>'28 grams'
            ]);

            MeatsFacts::create([
                'meat_id'=>$meat->id,
                'name'=>'Copper',
                'description'=>'6% of the DV'
            ]);
            MeatsFacts::create([
                'meat_id'=>$meat->id,
                'name'=>'Potassium ',
                'description'=>'5% of the DV'
            ]);
            MeatsFacts::create([
                'meat_id'=>$meat->id,
                'name'=>'Vitamin K  ',
                'description'=>'4% of the DV'
            ]);

            MeatsBenefits::create([
                'meat_id'=>$meat->id,
                'name'=>'Lamb refers to the meat obtained from a less-than-one-year-old animal, while mutton is the name of meat from a sheep. '.$meat->name,
                'details'=>'I think that lamb shanks might be the most delicious way to prepare lamb meat. The meat gets to fall off the bone and is packed with flavor.
                Leg of lamb roasts are also quite common, as are cuts from the shoulder, rack, loin, and breast.
                Lamb is also great barbecued and pairs great with sides like blue cheese and grilled asparagus.'
            ]);
        }
    }
}
