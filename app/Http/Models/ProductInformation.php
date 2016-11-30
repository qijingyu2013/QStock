<?php
/**
 * Created by PhpStorm.
 * User: 123
 * Date: 2016-09-27
 * Time: 17:22
 */

namespace CangDianPuEr\app\Http\Models;

use Illuminate\Database\Eloquent\Model;

class ProductInformation extends Model
{
    protected $table = 'product_information';
    protected $fillable = ['title', 'content'];
    protected $dates = ['created_at', 'updated_at'];
}