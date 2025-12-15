<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class UserRole extends Pivot
{
    protected $table = 'role_user';

    protected function casts(): array
    {
        return [
            // 'created_at' => 'date',
        ];
    }
}
