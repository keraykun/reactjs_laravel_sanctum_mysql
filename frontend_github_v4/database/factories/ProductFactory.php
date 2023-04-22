<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
             'name'=>$this->faker->firstName(),
             'price'=>$this->faker->unique()->numberBetween(100,500),
             'quantity'=>$this->faker->numberBetween(10,50),
        ];
    }
}
