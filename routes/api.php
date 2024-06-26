
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RealtorController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\InvestorController;
use App\Http\Controllers\Paypalcontroller;



Route::post('login', [Api\AuthController::class, 'login']);
Route::post('register', [Api\RegisterController::class, 'register']);
Route::post('profileregister', [ProfileController::class, 'profileregister']);
Route::get('emails', [RealtorController::class, 'emails']);


Route::get('total', [ProfileController::class, 'total']);

Route::get('state', [ProfileController::class, 'State']);
Route::get('getuser', [ProfileController::class, 'getprofile']);


Route::post('forgot', [Api\ForgotController::class, 'forgot']);
Route::post('reset', [Api\ForgotController::class, 'reset']);
Route::get('email/resend/{user}', [Api\VerifyController::class, 'resend'])->name('verification.resend');
Route::get('email/verify/{id}', [Api\VerifyController::class, 'verify'])->name('verification.verify');; // Make sure to keep this as your route name





Route::get('process-transaction', [Paypalcontroller::class, 'processTransaction'])->name('processTransaction');
Route::get('processTransactionpremium', [Paypalcontroller::class, 'processTransactionpremium'])->name('processTransactionpremium');



Route::post('create-transaction', [Paypalcontroller::class, 'createTransaction'])->name('createTransaction');

Route::get('create-transaction', [Paypalcontroller::class, 'createTransaction'])->name('createTransaction');
// Route::get('process-transaction', [Paypalcontroller::class, 'processTransaction'])->name('processTransaction');
Route::get('success-transaction', [Paypalcontroller::class, 'successTransaction'])->name('successTransaction');
Route::get('cancel-transaction', [Paypalcontroller::class, 'cancelTransaction'])->name('cancelTransaction');


Route::group(['middleware' => ['auth:api']], function () {
    Route::get('user', [Api\AuthController::class, 'user']);


    Route::post('posting', [PostController::class, 'posting']);
    Route::post('buyerposting', [PostController::class, 'buyerposting']);
    Route::post('realtorposting', [PostController::class, 'realtorposting']);
    Route::post('postcommit', [PostController::class, 'postcommit']);
    Route::post('poststory', [PostController::class, 'poststory']);
    Route::get('listlocation', [PostController::class, 'listlocation']);





    Route::get('pastpost', [PostController::class, 'pastpost']);
    Route::get('getstory', [PostController::class, 'getstory']);
    Route::get('pastlisting', [PostController::class, 'pastlisting']);
    Route::get('getposts', [PostController::class, 'getposts']);
    Route::get('getlisting', [PostController::class, 'getlisting']);
    Route::get('addfavorite', [PostController::class, 'addfavorite']);
    Route::get('favoritelists', [PostController::class, 'favoritelists']);

    Route::post('filterpost', [PostController::class, 'filterpost']);





    Route::get('toprealtor', [RealtorController::class, 'toprealtor']);
    Route::get('explorerealtor', [RealtorController::class, 'explorerealtor']);

    Route::get('onerealtor', [RealtorController::class, 'onerealtor']);


    Route::get('topinvestor', [InvestorController::class, 'topinvestor']);
    Route::get('exploreinvestor', [InvestorController::class, 'exploreinvestor']);


    Route::get('getchat', [ChatController::class, 'getchat']);

    Route::post('chats', [ChatController::class, 'chats']);
    Route::post('generate_tokan', [ProfileController::class, 'generate_tokan']);


    Route::get('recentchat', [ChatController::class, 'recentchat']);
    Route::get('getprofile', [ProfileController::class, 'getprofile']);



    Route::post('editprofile', [ProfileController::class, 'editprofile']);


    Route::get('getusers', [ProfileController::class, 'getusers']);
    Route::get('allrealtors', [ProfileController::class, 'allrealtors']);
    Route::get('allinvestors', [ProfileController::class, 'allinvestors']);

    Route::get('allbuyers', [ProfileController::class, 'allbuyers']);

    Route::get('getadmin', [ProfileController::class, 'getadmin']);



});
