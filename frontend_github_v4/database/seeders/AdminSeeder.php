<?php

namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Faker\Factory as Faker;
use App\Models\User;
use App\Models\Role;
use App\Models\Details;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Faker::create();
        $admin = User::create([
            'name'=>'Admin Leonard',
            'email' => 'admin@test.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'created_at'=>now(),
            'remember_token' => Str::random(10),
        ]);

        Details::create([
            'user_id'=>$admin->id,
            'contact'=>$this->faker->phoneNumber(),
            'birthdate'=>$this->faker->dateTimeBetween('-18 years','now'),
            'gender'=>$this->faker->randomElement(['male']),
        ]);

        Role::create([
            'user_id'=>$admin->id,
            'name'=>'admin',
        ]);
    }
}
