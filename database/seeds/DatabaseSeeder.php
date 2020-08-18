<?php

use App\Model\Category;
use App\Model\Like;
use App\Model\Question;
use App\Model\Reply;
use App\User;
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
        factory(User::class, 10)->create();
        factory(Category::class, 10)->create();
        factory(Question::class, 30)->create();
        factory(Reply::class, 150)->create()->each(function ($reply) {
            return $reply->like()->save(factory(Like::class)->make());
        });

    }
}
