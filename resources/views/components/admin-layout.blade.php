
<html>
    <head>
        <title>{{ $title ?? 'Social media' }}</title>
    </head>
    <body>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
     <script src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js"></script>

        <x-app-sidebar />

        {{ $slot }}
    </body>
</html>
