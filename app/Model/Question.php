<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Question extends Model
{
    public function getRouteKeyName(){
        return 'slug';
    }

    protected $guarded = [];
    
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function replies()
    {
        return $this->hasMany('App\Model\Reply');
    }

    public function category()
    {
        return $this->belongsTo('App\Model\Category');
    }

    public function getPathAttribute()
    {
        return asset("api/question/$this->slug");
    }

}
