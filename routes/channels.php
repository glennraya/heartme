<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('like.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
