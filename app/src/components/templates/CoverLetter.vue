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
            color: "",
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
        //-----------------------------------------------------
        const store = this.$coverLetterStyleStore;
        store.generateColors();
        store.coverLetterTemplates;

        //-----------------------------------------------------
        const color = store.getCurrentTextColors[store.getCurrentColorId]
        const colorObj = Object.assign({}, color);
        this.textColors = colorObj.textColor;
    },
    watch: {

    },
}
</script>

<style></style>
