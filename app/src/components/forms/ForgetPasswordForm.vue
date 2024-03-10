<template>
    <div>
        <form class="space-y-4" action="#" method="POST">
            <div>

                <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" placeholder="Email Adress"
                        class="block w-full rounded-lg focus:outline-none border border-gray-150  placeholder:text-gray-500  placeholder:text-sm p-5" />
                </div>
            </div>

            <div>
                <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required
                        placeholder="Password"
                        class="block w-full focus:outline-none rounded-lg p-5  border border-gray-150  placeholder:text-gray-500  placeholder:text-sm " />
                </div>
            </div>

         

            <div>
                <button type="submit"
                    class="flex w-full justify-center rounded-md bg-blue-600 p-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                    in</button>
            </div>
           
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: ''
        };
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();

        }
    }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>