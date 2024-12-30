<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;

use App\Http\Middleware\CorsMiddleware;

Route::middleware(CorsMiddleware::class)->group(function () {
    Route::get('/courses', [CourseController::class, 'index']);
    Route::get('/courses/{id}', [CourseController::class, 'show']);
    Route::post('/courses', [CourseController::class, 'store']);
    Route::get('/courses/categories', [CourseController::class, 'getCategories']);
});
