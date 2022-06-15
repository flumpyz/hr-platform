<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MentorsController;
use App\Http\Controllers\StudyDirectionsController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/registration', [AuthController::class, 'registration']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::post('/me', [AuthController::class, 'me']);
});

Route::group([
    'prefix' => 'studyDirections'
], function () {
    Route::post('/', [StudyDirectionsController::class, 'createStudyDirection']);
    Route::get('/', [StudyDirectionsController::class, 'getStudyDirections']);
    Route::get('/{id}', [StudyDirectionsController::class, 'getStudyDirection']);
});

Route::group([
    'prefix' => 'mentors'
], function () {
    Route::post('/', [MentorsController::class, 'createMentor']);
    Route::get('/', [MentorsController::class, 'getMentors']);
    Route::get('/{id}', [MentorsController::class, 'getMentor']);
    Route::post('/add-study-direction', [MentorsController::class, 'addStudyDirection']);
});
