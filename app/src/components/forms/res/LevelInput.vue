<template>
    <div class="w-150">
        <div class="text-xs pb-2 text-gray-900">Level - <span style="{ color: colors[`level${currentLevel}`][0] }">{{ litteralLevel[currentLevel - 1] }}</span> </div>
        <div class="grid-container" :style="{ background: colors[`level${currentLevel}`][1] }">
            <div v-for="n in 4" :key="n" class="level-container" :style="[{ borderRight: '1px solid' },{borderColor: colors[`level${currentLevel}`][1]}]">
                <div class="level cursor-pointer"  :style="[levelStyle(n)]"
                    @click="updateLevel(n)"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentLevel: this.level,
            litteralLevel: ["Beginner", "Intermediate", "Advanced", "Expert"],
            colors: {
                level1: ["#fe7d8b", "#ffeaec"],
                level2: ["#f68559", "#feebe3"],
                level3: ["#ec930c", "#fff2cc"],
                level4: ["#48ba75", "#e7f4ed"],
                level5: ["#9ba1fb", "#f1f2ff"]
            }
        };
    },
    methods: {
        updateLevel(n) {
            this.currentLevel = n;
        },
        levelStyle(n) {
            return {
                background: n === this.currentLevel ? this.colors[`level${this.currentLevel}`][0] : this.colors[`level${this.currentLevel}`][1]
            };
        }
    },
    props: ['level'],
}
</script>

<style>
.level-container {
    display: inline-grid;
    padding: 3px;
}

.level {
    width: 38px;
    height: 40px;
     border-radius: 10px;
    margin-right: 2px;
    margin-left: 2px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1px;
    padding: 5px;
    border-radius: 10px;
}

.w-150 {
    width: 220px;
}

.text-xs {
    font-size: 0.75rem;
}

.pb-2 {
    padding-bottom: 0.5rem;
}

.cursor-pointer {
    cursor: pointer;
}
</style>
