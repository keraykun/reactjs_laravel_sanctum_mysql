<?php

namespace Database\Seeders;

use App\Models\Goals;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GoalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Goals::create([
            'name' => 'Gain weight',
        ]);
        Goals::create([
            'name' => 'Lose Weight',
        ]);
        Goals::create([
            'name' => 'Get Health',
        ]);
    }
}
