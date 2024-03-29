<template>
    <div class="cvl a4">
        <div>
            <div class="pt-28">
                <div  :class="transformClass(textColor)" class="rounded-lg p-4">
                    <table>
                    <thead>
                        <tr>
                            <th class="w-1/2"></th>
                            <th class="w-1/2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="width: 42vh;">
                                <div >
                                    <div class="user_info">
                                        <h2 class="capitalize font-semibold text-3xl" :class="textColor">
                                            {{ formData.Fullname }}
                                        </h2>
                                        <span class="text-gray-600 capitalize text-xl font-semibold">{{
                                            formData.position }}</span>
                                    </div>
                                    <div class="pt-3">
                                        <span class="capitalize">
                                            To u:
                                        </span> <br>
                                        <span class="text-gray-800">{{ formData.companyName }}</span> <br>
                                        <span class="text-gray-800">{{ formData.hiringManagerName }}</span> <br>
                                        <span class="text-sm capitalize" :class="textColor">November 29 , 2024</span>
                                    </div>
                                </div>
                            </td>
                            <td class="w-1/2">
                                <div class="float-end">
                                    <span class="text-gray-800">{{ formData.email }}</span> <br>
                                    <span class="text-gray-800">{{ formData.number }}</span> <br>
                                    <span class="text-gray-800">{{ formData.address }}</span> <br>
                                    <span class="text-gray-800 underline">{{ formData.website }}</span> <br>
                                    <span class="text-gray-800">{{ formData.linkedin }}</span>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
                </div>
               

            </div>
            <div v-html="formData.letterDetails" class="leading-6 pt-6" style="font-weight: lighter;font-family: 'archiaregular', sans-serif !important;">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Template1",
    data() {
        return {
            templateName: 'Luanda',
            currentColorId: 0,
            colors: [],
            textcolors: [],
            fillColors: []
        }
    },
    props: ["formData", "textColor"],
    methods: {
        transformClass(originalClass) {
            const classes = originalClass.split('-');
            classes[0] = 'bg';
            classes[2] = '100';
           
            return classes.join('-');
        }
    },
    computed: {
     
    },
    mounted() {

    }
}
</script>

<style scoped>
@import url('https://assetsjobcrafters.store/fonts/Archia/stylesheet.css');
.a4 {
    
    padding-left: 22mm;
    padding-right: 22mm;
    color: #000;
    
}
</style>