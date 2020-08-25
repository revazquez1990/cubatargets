<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;
use Illuminate\Support\Str;

class Question extends Model
{
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($question) {
            $question->slug = Str::slug($question->title, '-');
        });
    }

    public function getRouteKeyName(){
        return 'slug';
    }

    // protected $guarded = [];
    protected $fillable = ['title', 'slug', 'body', 'user_id', 'category_id'];

    protected $with = ['replies'];
    
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function replies()
    {
        return $this->hasMany('App\Model\Reply')->latest();
    }

    public function category()
    {
        return $this->belongsTo('App\Model\Category');
    }

    public function getPathAttribute()
    {
        return "/question/$this->slug";
    }

}
