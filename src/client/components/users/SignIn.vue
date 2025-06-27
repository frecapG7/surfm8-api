<script setup>
import { Field, Form } from "vee-validate";
import logo from "../../assets/surfm8.svg";
</script>
<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 ">

        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-50 w-50 opacity-0.8 w-auto" :src="logo" alt="Your Company">
            <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Sign in to your account
            </h2>
        </div>


        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form class="space-y-6" @submit="onSubmit">
                <Field name="email" :rules="required">
                    <div>
                        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
                        <div>
                            <input type="email" id="email" v-model="email"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                required autocomplete="email" />
                        </div>
                    </div>
                </Field>


                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                        <div class="text-sm/6">
                            <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
                        </div>
                    </div>
                    <div class="relative">
                        <input :type="passwordFieldType" id="password" v-model="password"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            required>
                        <button type="button" @click="togglePasswordVisibility"
                            class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600">
                            <svg class="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path class="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                <path class="hs-password-active:hidden"
                                    d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68">
                                </path>
                                <path class="hs-password-active:hidden"
                                    d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                <line class="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                                <path class="hidden hs-password-active:block"
                                    d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                <circle class="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
                            </svg>
                        </button>
                        </input>
                    </div>
                </div>

                <div>
                    <button class="flex w-full justify-center rounded-md bg-secondary-200 px-3 py-1.5 " type="submit">
                        Sign In
                    </button>
                </div>

            </Form>

            <div class="mt-10">
                <p class="text-sm/6 text-center text-gray-900">
                    Don't have an account? <a href="/sign-up" class="font-medium text-blue-600 hover:text-blue-500">
                        Sign up
                    </a>
                </p>
            </div>

        </div>

    </div>




</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            passwordFieldType: ' password'
        }
    }, methods: {
        onSubmit() { console.log('Sign In'); },
        togglePasswordVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password'
                ? 'text' : 'password';
        }
    }
} </script>
