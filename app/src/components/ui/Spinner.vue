<template>
    <div>
        <span class="loader"></span>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.loader {
    width: 35px;
    height: 35px;
    border: 5px solid #fbbf24;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 0.35s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
</style>