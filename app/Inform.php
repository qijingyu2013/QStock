<?php

// use Illuminate\Foundation\Auth\User as Authenticatable;

namespace App;

use Bican\Roles\Traits\Slugable;
use Illuminate\Database\Eloquent\Model;
use Bican\Roles\Traits\RoleHasRelations;
use Bican\Roles\Contracts\RoleHasRelations as RoleHasRelationsContract;

class Inform extends Model implements RoleHasRelationsContract
{
    use Slugable, RoleHasRelations;
//    protected $table = 'news';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'content', 'columnId'
//id
//title
//content
//columnId
//level
//reveal
//created_at
//updated_at
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
//    protected $hidden = [
//        'updated_at'
//        'password', 'remember_token', 'oauth_provider_id', 'oauth_provider',
//    ];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if ($connection = config('roles.connection')) {
            $this->connection = $connection;
        }
    }

    public function getDtNewsLists()
    {
        return $this->where('columnId','=',1)->get();
    }
}
