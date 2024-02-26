<template>
    <div>
        <div class="horizontal-bar-wrap">
            <div class="bar1 bar"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "updateLoading"
}
</script>

<style scoped>
@keyframes barWidth {
    0% {
        width: 0%;
    }

    25% {
        width: 50%;
    }

    50% {
        width: 100%;
    }

    75% {
        width: 50%;
    }

    100% {
        width: 0%;
    }
}

@keyframes barWidth2 {
    0% {
        width: 0%;
    }

    50% {
        width: 50%;
    }

    100% {
        width: 100%;
    }
}

.horizontal-bar-wrap {
    height: 2px;
    width: 100%;
}

.bar {
    position: relative;
    width: 0%;
    height: 100%;
    margin: 0 auto;
    animation: barWidth;
    animation-duration: 0.3s;
    animation-iteration-count: 2;
    animation-timing-function: linear;
}

.bar1 {
    animation-delay: 0s;
    background: #bfdbfe;
    top: 0;
    z-index: 1;
}
</style>