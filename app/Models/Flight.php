<?php

namespace App\Models;

use App\Models\Scopes\AncientScope;
use App\Observers\FlightObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Prunable;
use Illuminate\Database\Eloquent\SoftDeletes;

// #[ScopedBy([AncientScope::class])]
#[ObservedBy([FlightObserver::class])]
class Flight extends Model
{
    /** @use HasFactory<\Database\Factories\FlightFactory> */
    use HasFactory, Prunable, SoftDeletes;

    protected $fillable = ['destination'];

    public function prunable(): Builder
    {
        return static::where('created_at', '<=', now()->subHour());
    }
}
