<?php

namespace App\Http\Controllers;

use App\Model\Like;
use Illuminate\Http\Request;
use App\Model\Reply;

class LikeController extends Controller
{
    public function likeIt(Reply $reply){
        $reply->like()->create([
        //    'user_id' => auth()->id()
            'user_id' => '1'
        ]);
    }

    public function unkeIt(Reply $reply){
        // $reply->like()->where(['user_id', auth()->id])->first()->delete();
        $reply->like()->where('user_id', '1')->first()->delete();

    }
}
