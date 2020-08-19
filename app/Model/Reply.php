<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Reply extends Model
{
    protected $guarded = [];

    public function question()
    {
        return $this->belongsTo('App\Model\Question');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function like()
    {
        return $this->hasMany('App\Model\Like');
    }
}
