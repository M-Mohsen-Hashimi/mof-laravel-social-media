
<x-admin-layout>
    <div class="pl-68 py-4 pr-4">
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <div class="flex justify-between items-center">
                <h1 class="m-4 text-3xl"> Users list </h1>
                @if (session('message'))
                    <div class="p-4 mb-4 text-sm text-white rounded-base bg-blue-300" role="alert">
                    <span class="font-medium"> {{ session('message') }}</span>
                    </div>
                @endif
                <a href="{{ route('users.create') }}" class="bg-blue-500 mr-4 cursor-pointer text-white px-3 h-10 py-2 rounded"> Create user </a>
            </div>
            <hr>
            <table class="w-full text-sm text-left rtl:text-right text-body">
                <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                    <tr>
                        <th scope="col" class="px-6 py-3 font-medium">
                            id
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            name
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            email
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($users as $user)
                    <tr class="bg-neutral-primary border-b border-default">
                        <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                            {{ $user->id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ $user->name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ $user->email }}
                        </td>
                        <td class="px-6 py-4">
                            <a href="{{ route('users.edit', $user) }}" class="text-white bg-green-400 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                Edit
                            </a>
                            <a  href="{{ route('users.destroy', $user) }}" class="text-white bg-red-500 box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                Delete
                            </a>


                        </td>
                    </tr>
                    @endforeach

                </tbody>
            </table>
            {{ $users->links() }}
        </div>

    </div>
    
</x-admin-layout>

