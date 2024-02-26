<template>
    <div class="bg-gray-100">
        <LoginFormVue />
        <div class="flex flex-wrap">
            <div class="w-full lg:w-1/3"></div>
            <div class="w-full lg:w-1/3">
                <span class="text-xs text-gray-400 tracking-wide pb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit corporis sint
                    assumenda repellendus culpa sapiente iusto natus exercitationem doloremque fuga delectus voluptatem
                    maiores,
                    iste voluptates aut obcaecati quae! Rerum!
                    <br> <br>
                </span>
            </div>
            <div class="w-full lg:w-1/3"></div>
        </div>
    </div>
</template>

<script>
import LoginFormVue from '../../components/forms/LoginForm.vue'

export default {
    components: { LoginFormVue }
}
</script>

<style></style>