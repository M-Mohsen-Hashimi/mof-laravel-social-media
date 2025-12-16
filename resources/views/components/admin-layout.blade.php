
<html>
    <head>
        <title>{{ $title ?? 'Social media' }}</title>
    </head>
    <body>
    @vite(['resources/css/app.css', 'resources/js/app.js'])

        <x-app-sidebar />

        {{ $slot }}
    </body>
</html>