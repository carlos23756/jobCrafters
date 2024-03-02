<template>
    <div class="cvl a4">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="108" class="relative" style="left: 95%;" height="124"
                viewBox="0 0 108 124" fill="none">
                <path d="M0 -39H108V70C108 99.8234 83.8234 124 54 124C24.1766 124 0 99.8234 0 70V-39Z" :class="getFillColor" />
            </svg>
            <div>
                <div class="flex">
                    <div class="w-1/2">
                        <div class="user_info">
                            <h2 class="capitalize font-semibold text-3xl" :class="getThecolor">
                                {{ formData.Fullname }}
                            </h2>
                            <span class="text-gray-600 text-xl">{{ formData.position }}</span>
                        </div>
                        <div class="pt-3">
                            <span class="capitalize">
                                To :
                            </span> <br>
                            <span class="text-gray-800">{{ formData.companyName }}</span> <br>
                            <span class="text-gray-800">{{ formData.hiringManagerName }}</span> <br>
                            <span :class="getThecolor" class="text-sm capitalize">November 29 , 2024</span>
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
            <div v-html="formData.letterDetails" class="leading-6 pt-6">
            </div>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Template2",
    data() {
        return {
            templateName: 'Luanda',
            currentColorId: 0,
            colors: [
                { id: 0, bgColor: 'bg-yellow-500', ringColor: 'ring-yellow-500' },
                { id: 1, bgColor: 'bg-blue-500', ringColor: 'ring-blue-500' },
                { id: 2, bgColor: 'bg-amber-500', ringColor: 'ring-amber-500' },
                { id: 4, bgColor: 'bg-red-500', ringColor: 'ring-red-500' },

            ],
            textcolors: [
                { id: 0, textColor: 'text-yellow-500' },
                { id: 1, textColor: 'text-blue-500' },
                { id: 2, textColor: 'text-amber-500' },
                { id: 4, textColor: 'text-red-500' },
            ],
            fillColors: [
                { id: 0, fill: 'fill-yellow-600' },
                { id: 1, fill: 'fill-blue-600' },
                { id: 2, fill: 'fill-amber-500' },
                { id: 4, fill: 'fill-red-500' },
            ]
        }
    },
    props: ["formData"],
    computed: {
        getThecolor() {
            return this.textcolors[this.currentColorId].textColor
        },
        getFillColor(){
            return this.fillColors[this.currentColorId].fill
        }
    }
}
</script>

<style scoped>
.a4 {
    padding-left: 22mm;
    padding-right: 22mm;
}
</style>