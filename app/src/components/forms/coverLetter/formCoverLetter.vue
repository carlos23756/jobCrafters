<template>
    <div>
        <div class="rounded-lg p-0">
            <br>
            <div>
                <div class="text-xl text-gray-800 font-semibold  pb-3">Personal Details</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label class="block text-gray-800 text-xs  mb-2" for="wanted-job-title">
                            Wanted Job Title
                        </label>
                        <LsJobInputVue />
                    </div>
                    <div>
                        <label class="block text-gray-800 text-xs mb-2" for="FullName">
                            Full Name
                        </label>
                        <input class="appearance-none p-3 bg-gray-100 text-sm w-full rounded-lg  focus:outline-none"
                            id="FullName" type="text" v-model="fullName">
                    </div>
                    <div>
                        <label class="block text-gray-800 text-xs " for="email">
                            Email
                        </label>
                        <input class="appearance-none p-3 bg-gray-100  w-full rounded-lg  focus:outline-none" id="email"
                            type="email" v-model="email">
                    </div>
                    <div>
                        <label class="block text-gray-800 text-xs " for="phone">
                            Phone
                        </label>
                        <input class="appearance-none p-3 bg-gray-100  w-full rounded-lg  focus:outline-none" id="phone"
                            type="tel" v-model="phoneNumber">
                    </div>
                    <div>
                        <label class="block text-gray-800 text-xs   mb-2" for="adress">
                            Adress
                        </label>
                        <input class="appearance-none p-3 bg-gray-100  w-full rounded  focus:outline-none" id="adress"
                            type="text" v-model="address">
                    </div>

                </div>
                <div class="pt-2">
                    <div class="text-blue-500 font-bold cursor-pointer text-sm" @click="showMoreinfo">

                        <div class="flex flex-row">
                            <div>
                                Show more information
                            </div>
                            <div v-show="!moreinformation" class="pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor" class="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <div v-show="moreinformation" class="pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor" class="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" v-show="moreinformation">


                        <div>
                            <label class="block text-gray-800 text-xs " for="email">
                                Website
                            </label>
                            <input class="appearance-none p-3 bg-gray-100  w-full rounded-lg focus:outline-none"
                                id="website" type="text" v-model="website">
                        </div>
                        <div>
                            <label class="block text-gray-800 text-xs " for="phone">
                                linkedin
                            </label>
                            <input class="appearance-none p-3 bg-gray-100  w-full rounded-lg  focus:outline-none"
                                id="phone" type="tel" v-model="linkedin">
                        </div>
                        <div>
                            <label class="block text-gray-800 text-xs " for="phone">
                                Date
                            </label>
                            <Switch v-model="enabled"
                                :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2']">
                                <span class="sr-only">Use setting</span>
                                <span aria-hidden="true"
                                    :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                            </Switch>


                        </div>


                    </div>
                </div>
            </div>
            <div>
                <div class="text-xl text-gray-800 font-semibold pt-1 pb-2">Employer Details</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label class="block text-gray-800 text-xs   mb-2" for="CompanyName">
                            Company Name
                        </label>
                        <input class="appearance-none p-3 bg-gray-100  w-full rounded focus:outline-none"
                            id="CompanyName" type="text" v-model="companyName">
                    </div>
                    <div>
                        <label class="block text-gray-800 text-xs mb-2" for="HiringManagerName">
                            Hiring Manager Name
                        </label>
                        <input class="appearance-none p-3 bg-gray-100  w-full rounded  focus:outline-none"
                            id="HiringManagerName" type="text" v-model="hiringManagerName">
                    </div>
                </div>
            </div>

            <div>
                <div class="pb-2">
                    <div class="text-xl text-gray-800 font-semibold">Letter Details</div>
                    <span class="text-xs text-gray-500">3–4 paragraphs explaining why you're the perfect candidate for a
                        specific job .</span> <br>

                    <EditorLetterVue />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import LsJobInputVue from '../res/form/LsJobInput.vue';
import { useCoverLetterStore } from '../../../stores/coverLetterStore';
import { computed, ref } from 'vue';

import Editor from 'primevue/editor';
import { Switch } from '@headlessui/vue'
import EditorLetterVue from './EditorLetter.vue';

export default {
    data() {
        return {
            enabled: false,
            moreinformation: false
        };
    },
    components: {
        LsJobInputVue,

        EditorLetterVue

    },
    methods: {
        showMoreinfo() {
            this.moreinformation = !this.moreinformation;
        }
    },
    setup() {

        const coverLetterStore = useCoverLetterStore();


        const fullName = computed({
            get: () => coverLetterStore.formData.Fullname,
            set: (value) => {
                coverLetterStore.formData.Fullname = value;
            }
        });

        const position = computed({
            get: () => coverLetterStore.formData.position,
            set: (value) => {
                coverLetterStore.formData.position = value;
            }
        });

        const companyName = computed({
            get: () => coverLetterStore.formData.companyName,
            set: (value) => {
                coverLetterStore.formData.companyName = value;
            }
        });

        const hiringManagerName = computed({
            get: () => coverLetterStore.formData.hiringManagerName,
            set: (value) => {
                coverLetterStore.formData.hiringManagerName = value;
            }
        });

        const email = computed({
            get: () => coverLetterStore.formData.email,
            set: (value) => {
                coverLetterStore.formData.email = value;
            }
        });

        const phoneNumber = computed({
            get: () => coverLetterStore.formData.number,
            set: (value) => {
                coverLetterStore.formData.number = value;
            }
        });

        const address = computed({
            get: () => coverLetterStore.formData.address,
            set: (value) => {
                coverLetterStore.formData.address = value;
            }
        });
        const website = computed({
            get: () => coverLetterStore.formData.website,
            set: (value) => {
                coverLetterStore.formData.website = value;
            }
        });

        const linkedin = computed({
            get: () => coverLetterStore.formData.linkedin,
            set: (value) => {
                coverLetterStore.formData.linkedin = value;
            }
        });

        const editorContent = computed({
            get: () => coverLetterStore.formData.letterDetails,
            set: (value) => {
                coverLetterStore.formData.letterDetails = value;
            }
        });

        return {
            fullName,
            position,
            companyName,
            hiringManagerName,
            email,
            phoneNumber,
            address,
            website,
            linkedin,
            editorContent
        };
    }

}
</script>
<style scoped>
input {
    height: 50px;
    font-size: 14px;
}
</style>