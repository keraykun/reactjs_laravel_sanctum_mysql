<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;


use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {


       \App\Models\User::factory(10)->create();

        $this->call([
            FruitSeeder::class,
            FruitFactsSeeder::class,
            VagetablesSeeder::class,
            VagetablesFactsSeeder::class,
            MeatsSeeder::class,
            MeatsFactsSeeder::class,
            GoalSeeder::class,
            HealthSeeder::class,
            UserSeeder::class,
        ]);
    }
}
