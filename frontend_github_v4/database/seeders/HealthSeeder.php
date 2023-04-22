<?php

namespace Database\Seeders;

use App\Models\HealthIssue;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HealthSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        HealthIssue::create([
            'name' => 'Pregnant',
        ]);
        HealthIssue::create([
            'name' => 'Injury',
        ]);
        HealthIssue::create([
            'name' => 'Anxiety',
        ]);
        HealthIssue::create([
            'name' => 'Depressed',
        ]);
        HealthIssue::create([
            'name' => 'Allergy',
        ]);

        HealthIssue::create([
            'name' => 'None',
        ]);
    }
}
