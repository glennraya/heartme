<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Like extends Model
{
    protected $fillable = ['user_id', 'like_count'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
