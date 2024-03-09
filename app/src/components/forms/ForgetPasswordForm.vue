<template>
    <form @submit="handleSubmit">
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
        </div>
        <div>
            <button type="submit">Reset Password</button>
        </div>
    </form>
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