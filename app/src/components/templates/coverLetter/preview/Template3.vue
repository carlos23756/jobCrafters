<template>
    <defaultTemplateVue :templateName="templateName" :formattype="formattype" :selected="selected" />
</template>

<script>
import defaultTemplateVue from './defaultTemplate.vue'
export default {
    name: "Template3",
    data() {
        return {
            templateName: 'johannesburg',
            formattype: "PDF"
        }
    },
    components: {
        defaultTemplateVue
    },
    props: {
        selected: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style></style>