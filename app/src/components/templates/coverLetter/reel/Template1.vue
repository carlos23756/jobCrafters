<template>
    <div class="cvl a4">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="108" class="relative" style="left: 95%;" height="124"
                viewBox="0 0 108 124" fill="none">
                <path d="M0 -39H108V70C108 99.8234 83.8234 124 54 124C24.1766 124 0 99.8234 0 70V-39Z" />
            </svg>
            <div>
                <div class="flex">
                    <div class="w-1/2">
                        <div class="user_info">
                            <h2 class="capitalize font-semibold text-3xl">
                                {{ formData.Fullname }}
                            </h2>
                            <span class="text-gray-600 text-xl font-semibold">{{ formData.position }}</span>
                        </div>
                        <div class="pt-3">
                            <span class="capitalize">
                                To :
                            </span> <br>
                            <span class="text-gray-800">{{ formData.companyName }}</span> <br>
                            <span class="text-gray-800">{{ formData.hiringManagerName }}</span> <br>
                            <span class="text-sm capitalize" :class="getThecolor">November 29 , 2024</span>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div class="float-end">
                            <span class="text-gray-800">{{ formData.email }}</span> <br>
                            <span class="text-gray-800">{{ formData.number }}</span> <br>
                            <span class="text-gray-800">{{ formData.address }}</span> <br>
                            <span class="text-gray-800 underline">{{ formData.website }}</span> <br>
                            <span class="text-gray-800">{{ formData.linkedin }}</span>

                        </div>
                    </div>
                </div>
            </div>
            <div v-html="formData.letterDetails" class="leading-6 pt-6" style="font-weight: lighter;">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Template1",
    data() {
        return {
            templateName: 'Dakar',
            currentColorId: 0,
            colors: [],
            textcolors: [],
            fillColors: []
        }
    },
    props: ["formData"],
    computed: {

    },
    mounted() {

    }
}
</script>

<style scoped>
.a4 {
    padding-left: 22mm;
    padding-right: 22mm;
    color: #000;
}
</style>