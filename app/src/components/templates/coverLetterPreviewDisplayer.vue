<template>
    <div>
        <div class="flex flex-wrap">
            <div class="w-1/2 pr-1 pl-1 pb-6">
                <Template1/>
            </div>
            <div class="w-1/2 pr-1 pl-1 pb-6">
                <Template2/>
            </div>
            <div class="w-1/2 pr-1 pl-1 pb-6">
                <Template3/>
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
        Template3
    }
}
</script>

<style></style>