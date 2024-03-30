<template>
    <div>
        <div class="flex flex-wrap">
            <div v-for="(template, index) in templateList" :key="index" class="w-1/2 pr-1 pl-1 pb-6">
                <component :is="template.component" :selected="template.selected" @click="changeCurrentTemplate(index)" />
            </div>
        </div>
    </div>
</template>

<script>
import { useCoverLetterStyleDoc } from '@/stores/coverLetterStyleDoc';
import { computed, ref } from 'vue'; // Import computed and ref from Vue 3
import Template1 from './coverLetter/preview/Template1.vue'
import Template2 from './coverLetter/preview/Template2.vue'
import Template3 from './coverLetter/preview/Template3.vue'

export default {
    components: {
        Template1,
        Template2,
        Template3,
    },
    setup() {
        const coverLetterStore = useCoverLetterStyleDoc();
        const currentTemplateId = computed({
            get: () => coverLetterStore.currentTemplateId,
            set: (value) => {
                coverLetterStore.currentTemplateId = value;
            }
        });

        // Initialize templateList using currentTemplateId
        const templateList = [
            { component: 'Template1', selected: currentTemplateId.value === 0 },
            { component: 'Template2', selected: currentTemplateId.value === 1 },
            { component: 'Template3', selected: currentTemplateId.value === 2 },
        ];

        const changeCurrentTemplate = (index) => {
            currentTemplateId.value = index;
        };

        return {
            currentTemplateId,
            templateList,
            changeCurrentTemplate
        };
    }
};
</script>

<style></style>
