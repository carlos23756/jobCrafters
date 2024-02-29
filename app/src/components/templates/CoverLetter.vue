<template>
    <div>
        <component :is="Components[1]" :formData="formData"></component>
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
            Components: [
                Template1Vue,
                Template2Vue,
                Template3Vue,
            ],
        }
    },
    mounted() {
        const store = useCoverLetterStore();
        this.templateIdx = store.templateId; 
        this.formData = store.formData; 
    },
}
</script>

<style></style>
