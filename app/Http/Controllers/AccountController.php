<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function __invoke(Request $request)
    {
        return Inertia::render('accounts', [
            'users' => User::whereNot('id', auth()->user()->id)->get(),
        ]);
    }
}