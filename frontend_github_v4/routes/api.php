<?php


use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::controller(App\Http\Controllers\Api\FruitController::class)->group(function(){
    Route::get('/guest/fruit/index','index');
    Route::get('/guest/fruit/show/{fruit}','show');
});

Route::controller(App\Http\Controllers\Api\VagetablesController::class)->group(function(){
    Route::get('/guest/vagetable/index','index');
    Route::get('/guest/vagetable/show/{vagetable}','show');
});

Route::controller(App\Http\Controllers\Api\MeatsController::class)->group(function(){
    Route::get('/guest/meat/index','index');
    Route::get('/guest/meat/show/{meat}','show');
});

Route::controller(App\Http\Controllers\Api\SignUpController::class)->group(function(){
    Route::get('/healthissue','healthissue');
    Route::get('/goals','goals');
});

Route::controller(App\Http\Controllers\Api\GuestController::class)->group(function(){
    Route::post('/logout','logout');
    Route::get('/users','users');
    Route::post('/login','login');
    Route::post('/signup','signup');
});

Route::middleware('auth:sanctum')->group(function(){


    Route::middleware('ability:server:admin')->prefix('admin')->group(function(){

        Route::controller(App\Http\Controllers\Api\Admin\HomeController::class)->group(function(){
            Route::get('/doughnut','doughnut');
        });

        Route::controller(App\Http\Controllers\Api\Admin\AdminController::class)->group(function(){
            Route::get('/profile','profile');
        });
        Route::controller(App\Http\Controllers\Api\Admin\ProductController::class)->group(function(){
            Route::get('/product','index');
            Route::post('/product/create','create');
            Route::get('/product/edit/{product}','edit');
            Route::delete('/product/delete/{product}','destroy');
            Route::put('/product/update/{product}','update');
        });

        Route::controller(App\Http\Controllers\Api\Admin\FruitController::class)->group(function(){
            Route::get('/fruit','index');
            Route::post('/fruit/create','create');
            Route::get('/fruit/edit/{fruit}','edit');
            Route::post('/fruit/update/{fruit}','update');
            Route::delete('/fruit/delete/{fruit}','destroy');
        });

        Route::controller(App\Http\Controllers\Api\Admin\VagetablesController::class)->group(function(){
            Route::get('/vagetable','index');
            Route::post('/vagetable/create','create');
            Route::get('/vagetable/edit/{vagetable}','edit');
            Route::post('/vagetable/update/{vagetable}','update');
            Route::delete('/vagetable/delete/{vagetable}','destroy');
        });

        Route::controller(App\Http\Controllers\Api\Admin\MeatController::class)->group(function(){
            Route::get('/meat','index');
            Route::post('/meat/create','create');
            Route::get('/meat/edit/{meat}','edit');
            Route::post('/meat/update/{meat}','update');
            Route::delete('/meat/delete/{meat}','destroy');
        });

    });

    Route::middleware('ability:server:user')->prefix('user')->group(function(){
        Route::controller(App\Http\Controllers\Api\User\UserController::class)->group(function(){
            Route::get('/profile','profile');
        });
        Route::controller(App\Http\Controllers\Api\User\HomeController::class)->group(function(){
            Route::get('/dashboard','dashboard');
        });
        Route::controller(App\Http\Controllers\Api\User\BMIController::class)->group(function(){
            Route::post('/bmi-calculator','bmiCalculator');
        });
        Route::controller(App\Http\Controllers\Api\User\FatburnerController::class)->group(function(){
            Route::post('/bmi-fatburner','fatBurner');
        });
        Route::controller(App\Http\Controllers\Api\User\RecordController::class)->group(function(){
            Route::get('/record','record');
        });
    });
});


