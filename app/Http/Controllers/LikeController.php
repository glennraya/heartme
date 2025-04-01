<?php

namespace App\Http\Controllers;

use App\Events\Like;
use App\Models\User;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function __invoke(Request $request)
    {
        // return $request;
        $user = User::where('id', 1)->first();
        broadcast(new Like(auth()->user(), $user));
    }
}
