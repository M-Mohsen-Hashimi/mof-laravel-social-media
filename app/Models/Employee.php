<?php

namespace App\Models;

use App\Observers\FlightObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

#[ObservedBy([FlightObserver::class])]
class Employee extends Model
{
    use SoftDeletes;

    protected $fillable = ['first_name', 'last_name'];

    // protected $dateFormat = 'U';

    // const CREATED_AT = 'creation_date';
    // const UPDATED_AT = 'updated_date';

    // public $timestamps = false;
    // protected $connection = 'mysql';

    //     public $attributes = [
    //         'first_name' => 'Mr.'
    //     ];

}
