<template>
    <defaultTemplateVue :templateName="templateName" :formattype="formattype" />
</template>

<script>
import defaultTemplateVue from './defaultTemplate.vue'
export default {
    name: "Template1",
    data() {
        return {
            templateName: 'Dakar',
            formattype: "PDF"
        }
    },
    components: {
        defaultTemplateVue
    },
}
</script>

<style></style>