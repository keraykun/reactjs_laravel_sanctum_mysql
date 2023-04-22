<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Faker\Factory as Faker;
use App\Models\User;
use App\Models\Role;
use App\Models\Details;
use App\Models\Goals;
use App\Models\HealthIssue;
use App\Models\UsersChoices;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Faker::create();
        foreach(User::all() as $user){
            Details::create([
            'user_id'=>$user->id,
            'contact'=>$this->faker->randomElement(['09111312341','09998812341','09171231234','09171231234','09612312335','09672312377','09712312333','09133312344','09912312346','09999312347','09314512347','09882312345','09312312341','09698312341','09314747341']),
            'birthdate'=>$this->faker->randomElement([Carbon::create('2008', '01', '01'),Carbon::create('2009', '02', '05'),Carbon::create('2010', '03', '04'),Carbon::create('2011', '08', '11'),Carbon::create('2012', '01', '22')]),
            'gender'=>$this->faker->randomElement(['male','female']),
        ]);

            Role::create([
                'user_id'=>$user->id,
                'name'=>'user',
            ]);

            UsersChoices::create([
                'user_id'=>$user->id,
                'health_issues_id'=>HealthIssue::all()->random()->id,
                'goals_id'=>Goals::all()->random()->id,
                'status'=>1
            ]);
        }

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
