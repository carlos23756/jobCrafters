<template>
    <div class="text-capitalize">
        <div class="text-center pb-1">
            <span class="text-sm font-semibold text-gray-700">{{ templateName }}</span>

        </div>
        <div  :class="{'border-blue-500': selected}" class="border border-gray-200 hover:border-blue-500 cursor-pointer border-2 rounded-lg w-fit rounded"
            style="height: 295px;"  @click="selection">
            <div class="p-0">
                <img src="./assets/Template1.png" class="rounded-lg" alt="">
                <div class="flex bg-gray-100 relative h-10 rounded-b-lg" style="top: -23px;" >
                    <div class="w-5/6 pt-2">
                        <span 
                            class="inline-flex items-center relative rounded-md bg-blue-600 px-2 py-1 ml-2 mb-2 text-xs font-bold text-white">PDF</span>
                    </div>

                    <div>
                        <div v-if="selected" class="pt-2" >
                            <svg id="fi_4315445" enable-background="new 0 0 512 512"  viewBox="0 0 512 512"
                                width="20" xmlns="http://www.w3.org/2000/svg"  class="relative">
                                <path clip-rule="evenodd"
                                    d="m256 0c-141.2 0-256 114.8-256 256s114.8 256 256 256 256-114.8 256-256-114.8-256-256-256z"
                                    fill="#2563eb" fill-rule="evenodd"></path>
                                <path
                                    d="m206.7 373.1c-32.7-32.7-65.2-65.7-98-98.4-3.6-3.6-3.6-9.6 0-13.2l37.7-37.7c3.6-3.6 9.6-3.6 13.2 0l53.9 53.9 138.6-138.7c3.7-3.6 9.6-3.6 13.3 0l37.8 37.8c3.7 3.7 3.7 9.6 0 13.2l-183.3 183.1c-3.6 3.7-9.5 3.7-13.2 0z"
                                    fill="#fff"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Template1",
    data() {
        return {
            templateName: "Luanda",
            selected: false
        }
    },
    methods:{
        selection(){
            this.selected = true
        }
    }
}
</script>

<style></style>