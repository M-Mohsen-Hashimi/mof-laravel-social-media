<!-- resources/views/components/layout.blade.php -->

<html>
    <head>
        <title>{{ $title ?? 'Todo Manager' }}</title>
    </head>
    <body>
        @inject('str', 'Illuminate\Support\Str')

        <header> Header </header>
        <h1> {{ $str::upper($header) }} </h1>
        <hr/>
        {{ $slot }}

        <footer>
            Footer
        </footer>
    </body>
</html>