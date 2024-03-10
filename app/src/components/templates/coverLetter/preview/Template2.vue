<template>
    <defaultTemplateVue :templateName="templateName" :formattype="formattype" :selected="selected" />
</template>

<script>
import defaultTemplateVue from './defaultTemplate.vue'
export default {
    name: "Template2",
    data() {
        return {
            templateName: 'Luanda',
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