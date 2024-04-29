<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RealtorController;
use App\Http\Controllers\ChatController;

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

Route::post('login', [Api\AuthController::class, 'login']);
Route::post('register', [Api\RegisterController::class, 'register']);
Route::post('profileregister', [ProfileController::class, 'profileregister']);
Route::get('emails', [RealtorController::class, 'emails']);

Route::post('forgot', [Api\ForgotController::class, 'forgot']);
Route::post('reset', [Api\ForgotController::class, 'reset']);
Route::get('email/resend/{user}', [Api\VerifyController::class, 'resend'])->name('verification.resend');
Route::get('email/verify/{id}', [Api\VerifyController::class, 'verify'])->name('verification.verify');; // Make sure to keep this as your route name
    
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('user', [Api\AuthController::class, 'user']);


    Route::post('posting', [PostController::class, 'posting']);
    Route::post('buyerposting', [PostController::class, 'buyerposting']);

    Route::get('pastpost', [PostController::class, 'pastpost']);
    Route::get('toprealtor', [RealtorController::class, 'toprealtor']);
    Route::get('onerealtor', [RealtorController::class, 'onerealtor']);


    Route::get('getchat', [ChatController::class, 'getchat']);

    Route::post('chats', [ChatController::class, 'chats']);

    Route::get('recentchat', [ChatController::class, 'recentchat']);
    Route::get('getprofile', [ProfileController::class, 'getprofile']);






});
