<template>
    <div class="cvl">
        <div>
            <div class="flex flex-nowrap">
                <div class="w-full">
                    <div class="px-6 py-6 border border-gray-800 rounded">
                        <h2 class="capitalize font-bold text-3xl" :class="getThecolor">
                            {{ formData.Fullname }}
                        </h2>
                        <p class="text-gray-600 text-base">{{ formData.position }}</p>
                    </div>

                    <span class="text-gray-500">{{ formData.email }}</span> <br>
                    <span class="text-gray-500">{{ formData.number }}</span> <br>
                    <span class="text-gray-500">{{ formData.address }}</span> <br>
                </div>

            </div>
            <div>
                <h2 class="capitalize font-semibold text-xl" :class="getThecolor">
                    To
                </h2>
                <span class="text-gray-500">{{ formData.companyName }}</span> <br>
                <span class="text-gray-500">{{ formData.hiringManagerName }}</span> <br>
            </div>
            <div v-html="formData.letterDetails" class="leading-6 pt-4">
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
            colors: [
                { id: 0, bgColor: 'bg-gray-500', ringColor: 'ring-gray-500' },
                { id: 1, bgColor: 'bg-yellow-500', ringColor: 'ring-yellow-500' },
                { id: 2, bgColor: 'bg-amber-500', ringColor: 'ring-amber-500' },
                { id: 3, bgColor: 'bg-green-500', ringColor: 'ring-green-500' },
                { id: 4, bgColor: 'bg-red-500', ringColor: 'ring-red-500' },

            ],
            textcolors: [
                { id: 0, textColor: 'text-black' },
                { id: 1, textColor: 'text-yellow-500' },
                { id: 2, textColor: 'text-amber-500' },
                { id: 3, textColor: 'text-green-500' },
                { id: 4, textColor: 'text-red-500' },
            ]
        }
    },
    props: ["formData"],
    computed: {
        getThecolor() {
            return this.textcolors[this.currentColorId].textColor
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

.cvl {
    font-family: "Manrope", sans-serif;
}
</style>