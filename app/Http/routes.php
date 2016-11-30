<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/**
 * website
 */
Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'IndexController@index');


});

//Route::group(['middleware' => ['api']], function ($api) {
////    Route::get('/', 'IndexController@index');
//    $api->get('/api/informs/dtinforms', 'InformController@getDtinforms');
//});

Route::group(['middleware' => ['service']], function ($api) {
//    $api->controller('informs', 'InformController');
    $api->get('/service/informs/dtinforms', 'InformController@getDtinforms');
    $api->get('/service/informs/inform-show/{id}', 'InformController@getDtinformsShow');
    $api->get('/service/informs/teaknowledges', 'InformController@getTeaknowledges');
    $api->get('/service/informs/teacultures', 'InformController@getTeacultures');
    $api->get('/service/informs/teacollections', 'InformController@getTeacollections');
    $api->get('/service/informs/tradeannouncements', 'InformController@getTradeannouncements');
    $api->get('/service/informs/traderules', 'InformController@getTraderules');
});

//$api->group(['middleware' => ['web']], function ($api) {
////    $api->controller('informs', 'InformController');
//    $api->get('/informs/dtinforms', 'InformController@getDtinforms');
//});
