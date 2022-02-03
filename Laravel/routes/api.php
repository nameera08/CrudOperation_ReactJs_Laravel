<?php

use App\Http\Controllers\API\EmployeeController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('employees', [EmployeeController::class,'index']);
Route::post('/add-employee',[EmployeeController::class,'store']);
Route::get('/edit-employee/{id}', [EmployeeController::class,'edit']);
Route::put('/update-employee/{id}', [EmployeeController::class,'update']);
Route::delete('delete-employee/{id}', [EmployeeController::class,'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
