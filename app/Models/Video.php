<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Video extends Model
{
    protected $guarded = [];

    public function comments(): MorphMany
    {
        return $this->morphMany(NewComment::class, 'commentable');
    }

    public function latestComment(): MorphOne
    {
        return $this->morphOne(NewComment::class, 'commentable')->latestOfMany();
    }

    public function oldestComment(): MorphOne
    {
        return $this->morphOne(NewComment::class, 'commentable')->latestOfMany();
    }

    public function tags(): MorphToMany
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}
