<template>
    <div>
        <div class="flex flex-wrap">
            <div v-for="(template, index) in templateList" :key="index" class="w-1/2 pr-1 pl-1 pb-6">
                <component :is="template.component" :selected="template.selected"
                    @click="changeCurrentTemplate(index)" />
            </div>
        </div>
    </div>
</template>

<script>

import Template1 from './coverLetter/preview/Template1.vue'
import Template2 from './coverLetter/preview/Template2.vue'
import Template3 from './coverLetter/preview/Template3.vue'

export default {
    components: {
        Template1,
        Template2,
        Template3,
    },
    data() {
        return {
            currentTemplate: 0,
            templateList: [
                { component: 'Template1', selected: this.currentTemplate === 0 },
                { component: 'Template2', selected: this.currentTemplate === 1 },
                { component: 'Template3', selected: this.currentTemplate === 2 },
            ],
        };
    },
    methods: {
        changeCurrentTemplate(index) {
            this.currentTemplate = index;
            const coverLetterStyleStore = this.$coverLetterStyleStore;
           
        },
    },
    mounted() {
        const coverLetterStyleStore = this.$coverLetterStyleStore;
        this.currentTemplate = coverLetterStyleStore.getCurrentTemplateId;
    },
};
</script>

<style></style>