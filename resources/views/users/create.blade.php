<x-admin-layout>
        <div class="pl-68 py-4 pr-4">
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <div class="flex justify-between items-center">
                <h1 class="m-4 text-3xl"> User create </h1>
                <a href="{{ route('users.index') }}" class="bg-blue-500 mr-4 cursor-pointer text-white px-3 h-10 py-2 rounded"> Go to all users </a>
            </div>
            <hr>
            <div>
                {{-- @if ($errors->any())
                    <div class="bg-red-400">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif --}}

                <form action="{{ route('users.store') }}" method="post">
                    @csrf
                    <div class="grid gap-6 mb-6 md:grid-cols-2 p-4">
                        <div>
                            <label for="name" class="block mb-2.5 text-sm font-medium text-heading">Name</label>
                            <input type="text" id="name" value="{{ old('name') }}" name="name" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" />
                            @error('name')
                                <span class="text-red-500 text-sm">{{ $message }}</span>
                            @enderror
                        </div>
                        <div>
                            <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Email</label>
                            <input type="email" id="email" value="{{ old('email') }}" name="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Doe" />
                             @error('email')
                                <span class="text-red-500 text-sm">{{ $message }}</span>
                            @enderror
                        </div>
                        <div>
                            <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Password</label>
                            <input type="password" id="password" name="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Flowbite" />
                             @error('password')
                                <span class="text-red-500 text-sm">{{ $message }}</span>
                            @enderror
                        </div>  
                    </div>
                    <button type="submit" class="text-white ml-4 mb-4 rounded-md cursor-pointer bg-blue-500  box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
                </form>
            </div>
        </div>

    </div>
</x-admin-layout>