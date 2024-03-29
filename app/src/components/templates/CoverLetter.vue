<template>
    <div>
        <component :is="Components[0]" :formData="formData" :textColor="textColors"></component>
    </div>
</template>

<script>
import { useCoverLetterStore } from '@/stores/coverLetterStore';
import Template1Vue from './coverLetter/reel/Template1.vue';
import Template2Vue from './coverLetter/reel/Template2.vue';
import Template3Vue from './coverLetter/reel/Template3.vue';

export default {
    data() {
        return {
            templateIdx: 0,
            formData: {},
            fillColors: "",
            textColors: "",
            colorText: null,
            currentColorid: 0,
            Components: [
                Template1Vue,
                Template2Vue,
                Template3Vue,
            ],
        }
    },
    mounted() {
        const storeInfo = useCoverLetterStore();
        this.formData = storeInfo.formData;

        const store = this.$coverLetterStyleStore;
        store.generateColors();
        store.coverLetterTemplates;

        // Get the initial value of currentColor
        const color = store.getCurrentTextColors;
        this.currentColorid = store.currentColorId;
        this.colorText = color[this.currentColorid];
        const colorObj = Object.assign({}, this.colorText);
        this.textColors = colorObj.textColor;

        // Watch for changes in currentColor
        this.$watch(
            function () {
                return store.currentColorId;
            },
            (newVal, oldVal) => {
                // Do something when currentColor changes
                this.currentColorid = newVal;
                this.colorText = color[newVal];
                const colorObj = Object.assign({}, this.colorText);
                this.textColors = colorObj.textColor;
            }
        );
    },
}
</script>

<style></style>
