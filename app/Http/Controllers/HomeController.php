<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function home()
    {
        Schema::dropIfExists('posts3');

        return view('home', [
            'records' => ['ahmad', 'mohammad', 'ali', 'omar', 'shekib', 'maryam'],
            'name' => 'ahmad',
        ]);
    }

    public function store(Request $request)
    {
        $content = $request->string('content');
        dd($content->lower()->kebab());
    }
}
