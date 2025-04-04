<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(2)->create();

        User::factory()->create([
            'name' => fake()->name(),
            'email' => 'glenn@example.com',
            'avatar' => 'coopsy.jpg',
        ]);

        User::factory()->create([
            'name' => fake()->name(),
            'email' => 'bean@example.com',
            'avatar' => 'bean.jpg',
        ]);
    }
}