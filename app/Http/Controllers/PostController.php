<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\NewComment;
use App\Models\NewPost;
use App\Models\Profile;
use App\Models\Province;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
use PHPUnit\Framework\Constraint\Count;

class PostController extends Controller
{
    public function index(Request $request)
    {

        // $profiles = Profile::factory()->count(2)->create();
        User::factory()->create();
        
    }

    public function create(string $id): View
    {
        return view('user.profile', [
            'user' => User::findOrFail($id),
        ]);
    }

    public function store(string $id): View
    {

        return view('user.profile', [
            'user' => User::findOrFail($id),
        ]);
    }
}
