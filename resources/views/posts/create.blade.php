<div>
    Posts <br>

    @foreach ($posts as $post)
        {{ $post->name }} <br>
        &nbsp &nbsp &nbsp Comments

        @foreach ($post->comments as $comment)
        &nbsp &nbsp &nbsp   {{ $comment->body }}
        @endforeach

        <br>
    @endforeach
</div>
