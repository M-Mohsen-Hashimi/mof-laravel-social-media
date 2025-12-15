@props(['type' => 'info', 'message'])

<button type="submit">
    Type: {{ $type }}
    <br>
    Submit {{ $message }}
</button>