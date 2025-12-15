<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Country extends Model
{
    protected $fillable = ['name'];

    public function provinces(): HasMany
    {
        return $this->hasMany(Province::class)->chaperone();
    }

    public function provincesStartsWithLetterK()
    {
        return $this->provinces()->whereLike('name', 'K%');

    }

    public function latestProvince(): HasOne
    {
        return $this->provinces()->one()->latestOfMany();
    }

    public function oldestProvince(): HasOne
    {
        return $this->provinces()->one()->oldestOfMany();
    }

    public function districts(): HasManyThrough
    {
        return $this->hasManyThrough(District::class,
            Province::class,
        );
    }

    // public function districts(): HasManyThrough {
    //     return $this->throughProvinces()->hasDistricts();
    // }

    // public function districts(): HasManyThrough {
    //     return $this->through('provinces')->has('provinces');
    // }

    // public function latestProvince(): HasOne
    // {
    //     return $this->hasOne(Province::class)->latestOfMany();
    // }

    // public function oldestProvince(): HasOne
    // {
    //     return $this->hasOne(Province::class)->oldestOfMany();
    // }

    public function withCountWhereRelation($args)
    {
        $country = (new Country)
            ->withCountWhereRelation([
                'provinces as provinces_started_with_a_count' => ['name', 'like', 'K%'],
                'provinces as provinces_ended_with_r_count' => ['name', 'like', '%r'],
            ]);
        $key = array_key_first($args);
        [$column, $operator, $value] = $args[$key];

        $query = $this->withCount([$key => function (Builder $builder) use ($column, $operator, $value) {
            return $builder->where($column, $operator, $value);
        }]
        );

        return $query;
    }
}
