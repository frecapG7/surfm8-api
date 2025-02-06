<script>
const onSubmit = () => {
    console.log('Sign In');
}
</script>

<template>

    <div class="bg-yellow-200 w-screen h-screen flex flex-col  justify-center items-center">
        <h2 class="text-2xl text-green-500 font-bold mb-10 text-center">Sign In</h2>
        <div class="form-group">
            <form>
                <div class="mb-4">
                    <label for="email" class="block text-green-500">Email</label>
                    <input type="email" id="email" v-model="email"
                        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        required />
                </div>

                <div class="mb-4">
                    <label for="password" class=" block text-gray-700">Password</label>
                    <input type="password" id="password" v-model="password"
                        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        required />
                </div>
                <button class="btn-contained bg-amber-900 margin-y-30" type="submit">Sign In</button>
            </form>

        </div>

    </div>






</template>