<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Relation::enforceMorphMap([
        //     'post' => 'App\Models\NewPost',
        //     'video' => 'App\Models\Video',
        // ]);

        // Model::automaticallyEagerLoadRelationships();
        // Model::preventLazyLoading();


    }
}
