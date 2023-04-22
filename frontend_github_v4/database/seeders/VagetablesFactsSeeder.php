<?php

namespace Database\Seeders;

use App\Models\Vagetables;
use App\Models\VagetablesBenefits;
use App\Models\VagetablesFacts;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class VagetablesFactsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(Vagetables::all() as $vagetable){
            VagetablesFacts::create([
                'vagetable_id'=>$vagetable->id,
                'name'=>'Calories',
                'description'=>'104'
            ]);
            VagetablesFacts::create([
                'vagetable_id'=>$vagetable->id,
                'name'=>'Carbs',
                'description'=>'28 grams'
            ]);
            VagetablesFacts::create([
                'vagetable_id'=>$vagetable->id,
                'name'=>'Vitamin C',
                'description'=>'10% of the Daily Value (DV)'
            ]);
            VagetablesFacts::create([
                'vagetable_id'=>$vagetable->id,
                'name'=>'Copper',
                'description'=>'6% of the DV'
            ]);
            VagetablesFacts::create([
                'vagetable_id'=>$vagetable->id,
                'name'=>'Potassium ',
                'description'=>'5% of the DV'
            ]);
            VagetablesFacts::create([
                'vagetable_id'=>$vagetable->id,
                'name'=>'Vitamin K  ',
                'description'=>'4% of the DV'
            ]);


            VagetablesBenefits::create([
                'vagetable_id'=>$vagetable->id,
                'name'=>'Impressive Health Benefits of '.$vagetable->name,
                'details'=>'With over 7,000 different cultivars available worldwide, it’s no surprise that apples are the most widely consumed fruit globally (1Trusted Source).
                From sweet red varieties, like Red Delicious, Fuji or Gala, to tangy green ones, like Granny Smith — my personal favorite that I enjoy with lime juice and a little salt when I want a savory snack — there sure is an apple for everyone.
                They’re commonly used in recipes, like pies, cookies, muffins, jam, salads, oatmeal, or smoothies. They also make a great snack on their own or wedged and smeared with nut butter.
                In addition to their culinary versatility and numerous colors and flavors to choose from, apples are an exceptionally healthy fruit with many research-backed benefits.
                Here are eight impressive health benefits of apples.
                The same serving also provides 2–5% of the DV for vitamins E, B1, and B6.
                Vitamin E serves as a fat-soluble antioxidant, vitamin B1 — also known as thiamine — is needed for growth and development, and vitamin B6 is essential for protein metabolism (4Trusted Source, 5Trusted Source, 6Trusted Source).
                Apples are also a rich source of polyphenols, an important group of antioxidants. Antioxidants are compounds that protect your cells from free radicals — harmful molecules that contribute to the development of chronic conditions, like heart disease and cancer (4Trusted Source).
                While nutrition labels don’t list these plant compounds, they’re likely responsible for many of apples’ health benefits (1Trusted Source)
                To get the most out of apples, leave the skin on, as it contains half of the fiber and most of the polyphenols'
            ]);

            VagetablesBenefits::create([
                'vagetable_id'=>$vagetable->id,
                'name'=>'May support weight loss of '.$vagetable->name,
                'details'=>'are high in fiber and water, two qualities that make them filling.
                An increasing feeling of fullness works as a weight-loss strategy, as it helps manage your appetite. This, in turn, might lead you to reduce your energy intake (9Trusted Source).
                In one study, eating whole apples increased feelings of fullness for up to 4 hours longer than consuming equal amounts of apple purée or juice. This happened, because whole apples reduce gastric emptying — the rate at which your stomach empties its contents (10Trusted Source).
                Research also suggests apple intake may significantly reduce Body Mass Index (BMI), a weight-related risk factor for heart disease (11Trusted Source).
                Interestingly, apple polyphenols may also have anti-obesity effects '
            ]);

            VagetablesBenefits::create([
                'vagetable_id'=>$vagetable->id,
                'name'=>'Could be good for your heart of '.$vagetable->name,
                'details'=>'have been linked to a lower risk of heart disease (13Trusted Source).
                One reason may be that they contain soluble fiber. This kind of fiber can help lower your blood cholesterol levels.
                Another reason may be that they offer polyphenols. Some of these, namely the flavonoid epicatechin, may lower blood pressure (13Trusted Source).
                Studies have also linked high intakes of flavonoids with a lower risk of stroke (14Trusted Source, 15Trusted Source).
                Plus, flavonoids can help prevent heart disease by lowering blood pressure, reducing LDL cholesterol oxidation, and reducing atherosclerosis, which is the buildup of plaque in your arteries (14Trusted Source).
                Another study has also linked eating white-fleshed fruits and vegetables, like apples and pears, to a reduced risk of stroke. For every 1/5 cup (25 grams) of apple slices consumed per day, the risk of stroke decreased by 9%'
            ]);

            VagetablesBenefits::create([
                'vagetable_id'=>$vagetable->id,
                'name'=>'Linked to a lower risk of diabetes of '.$vagetable->name,
                'details'=>'Eating apples may also reduce your risk of type 2 diabetes.
                A compilation of studies found that eating apples and pears was associated with an 18% reduction in type 2 diabetes risk. In fact, just one serving per week may reduce the risk by 3% (17Trusted Source).
                Their high content of the antioxidant polyphenols quercetin and phloridzin could explain this beneficial effect (18Trusted Source, 19Trusted Source, 20Trusted Source).
                Quercetin’s anti-inflammatory effects may reduce insulin resistance, a big risk factor for the onset of diabetes. Meanwhile, phloridzin is believed to reduce sugar uptake in the intestines, contributing to a reduced blood sugar load and thereby reduced diabetes risk'
            ]);

            VagetablesBenefits::create([
                'vagetable_id'=>$vagetable->id,
                'name'=>'May promote gut health of '.$vagetable->name,
                'details'=>' Apples contain pectin, a type of fiber that acts as a prebiotic. This means it feeds your gut microbiota, which is the good bacteria in your gut.
                Being involved in many functions related to both health and disease, your gut microbiota plays an essential role in your overall well-being. A healthy gut is often key for better health (21Trusted Source, 22Trusted Source, 23Trusted Source).
                Since dietary fiber cannot be digested, pectin reaches your colon intact, promoting the growth of good bacteria. It especially improves the ratio of Bacteriodetes to Firmicutes, the two main types of bacteria in your gut (13Trusted Source, 24Trusted Source, 25Trusted Source).
                New research suggests that, by beneficially altering your gut microbiota, apples may help protect against chronic diseases like obesity, type 2 diabetes, heart disease, and cancer'
            ]);
        }
    }
}
