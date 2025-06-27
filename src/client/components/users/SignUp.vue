<script setup>
import { ErrorMessage, Field, Form } from "vee-validate";
import logo from "../../assets/surfm8.svg";
import { useVerifyUsernameUnicity } from "../../hooks/useUsers";
import PasswordField from "../form/PasswordField.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


const { mutate } = useVerifyUsernameUnicity();

function validateUsername(value) {
    if (!value)
        return 'This field is required';


    mutate(value, {
        onSuccess: () => {
            return true;
        },
        onError: (error) => {
            return error.message;
        }
    });

}


</script>


<template>

    <div class="flex min-h-full flex-col justify-center px-6 py-12 ">

        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-50 w-50 opacity-0.8 w-auto" :src="logo" alt="Your Company">
            <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Create your account
            </h2>
        </div>

        <div>
            <FontAwesomeIcon :icon="['far', 'check']" class="text-6xl text-center text-primary-500" />
            <FontAwesomeIcon :icon="faHouse" />
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form class="space-y-6" @submit="onSubmit">
                <div>
                    <label for="username" class="block text-sm/6 font-medium text-gray-900">Username</label>
                    <Field name="username" type="text" :rules="validateUsername"
                        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />

                    <ErrorMessage name="email" class="text-red-500" />
                </div>

                <div>
                    <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
                    <Field name="email" type="email" :rules="validateEmail"
                        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />

                    <ErrorMessage name="email" class="text-red-500" />
                </div>

                <div>
                    <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                    <!-- <Field name="password" type="password"
                        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" /> -->
                    <PasswordField name="password" />

                </div>
                <button type="submit" class="flex w-full round-md text-center justify-center py-2 bg-secondary-200">
                    Sign Up
                </button>
            </Form>
        </div>

    </div>

</template>


<script scoped>
export default {
    data() {
        return {
            email: "",
        };
    },
    methods: {



        onSubmit(data) {
            console.log(JSON.stringify(data));
        },

        validateEmail(value) {
            // if the field is empty
            if (!value) {
                return 'This field is required';
            }

            // if the field is not a valid email
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'This field must be a valid email';
            }
            return true;
        }
    },
};
</script>
