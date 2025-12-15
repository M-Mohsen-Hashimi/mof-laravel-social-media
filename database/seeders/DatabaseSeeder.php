<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // $tag1 = DB::table('tags')->insertGetId(['name' => 'Tech']);
        // $tag2 = DB::table('tags')->insertGetId(['name' => 'Science']);
        // $tag3 = DB::table('tags')->insertGetId(['name' => 'Education']);

        // $tag1 = 1;
        // $tag2 = 2;
        // $tag3 = 3;
        // DB::table('taggables')->insert([
        //     ['tag_id' => $tag1, 'taggable_id' => 1, 'taggable_type' => 'App\\Models\\NewPost'],
        //     ['tag_id' => $tag2, 'taggable_id' => 1, 'taggable_type' => 'App\\Models\\NewPost'],
        // ]);

        // DB::table('taggables')->insert([
        //     ['tag_id' => $tag2, 'taggable_id' => 2, 'taggable_type' => 'App\\Models\\NewPost'],
        //     ['tag_id' => $tag3, 'taggable_id' => 2, 'taggable_type' => 'App\\Models\\NewPost'],
        // ]);

        // DB::table('taggables')->insert([
        //     ['tag_id' => $tag1, 'taggable_id' => 1, 'taggable_type' => 'App\\Models\\Video'],
        //     ['tag_id' => $tag3, 'taggable_id' => 1, 'taggable_type' => 'App\\Models\\Video'],
        // ]);

        DB::table('taggables')->insert([
            ['tag_id' => 1, 'taggable_id' => 2, 'taggable_type' => 'video'],
        ]);

    }
}
