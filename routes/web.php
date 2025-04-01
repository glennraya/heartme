<?php

use App\Http\Controllers\LikeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('accounts', function () {
        return Inertia::render('accounts');
    })->name('accounts');

    Route::post('like', LikeController::class);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
