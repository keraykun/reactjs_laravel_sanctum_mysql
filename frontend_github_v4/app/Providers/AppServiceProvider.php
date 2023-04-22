<?php

namespace App\Providers;
use DateTime;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Storage::disk('local')->buildTemporaryUrlsUsing(
        //     function (string $path, DateTime $expiration, array $options) {
        //         return URL::temporarySignedRoute(
        //             'download',
        //             $expiration,
        //             array_merge($options, ['path' => $path])
        //         );
        //     }
        // );
    }
}
