<template>
    <div>
        <div class="bg-customBlue ">
            <div class="mx-auto px-6 lg:px-8  px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 justify-between">
                    <div class="flex">
                        <div class="flex flex-shrink-0 items-center">
                            <router-link to="/">
                                <img class="h-8 w-auto" src="@/assets/svg/logo_Wht.svg" alt="JobCrafters logo" />
                            </router-link>
                        </div>
                        <div class="hidden sm:ml-6 sm:flex sm:space-x-8 capitalize">
                        </div>
                    </div>
                    <div class="pt-2">
                        <img class="inline-block h-10 w-10 rounded-full"
                            src="../assets/img/alice.png"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
        
        <slot />
    </div>
</template>

<script>
export default {

}
</script>

<style></style>