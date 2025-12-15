<?php

use App\Http\Controllers\Class1Controller;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;

Route::get('/', [HomeController::class, 'home']);

// Route::get('home', function (Request $request) {
//     return View::first(['users.custom-create', 'users.create'], ['name' => 'Ahmad ali', 'age' => 25]);
// });

// Route::get('test', function (Request $request) {

//     return view('users.create')
//         ->with('name', 'Ali')
//         ->with('age', 24);
// });

// Route::get('dashboard', DashboardController::class);

// Route::get('posts', [PostController::class, 'index']);

// Route::resource('comments', CommentController::class)
//     ->names([
//         'create' => 'comments.create-comment',
//     ]);

// Route::resource('industrial-development-bank-properties', CommentController::class)
//     ->parameters([
//         'industrial-development-bank-properties' => 'bank_property',
//     ]);

// Route::apiResource('classes', Class1Controller::class);

// Route::post('home', [HomeController::class, 'store'])->name('home.store');


Route::prefix('admin')->group(function () {

    Route::resource('users', UserController::class);
});

