<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\User;
use App\Events\LikeEvent;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function __invoke(Request $request)
    {
        $like = Like::firstOrNew([
            'user_id' => $request->user_id,
        ]);

        $like->like_count = ($like->exists) ? $like->like_count + 1 : 1;
        $like->save();

        $likedUser = User::find($request->user_id);

        broadcast(new LikeEvent($likedUser));
    }
}