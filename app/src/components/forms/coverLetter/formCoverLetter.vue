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
                            id=" FullName" type="text" v-model="fullName">
                    </div>
                    <div>
                        <label class="block text-gray-800 text-xs   mb-2" for="email">
                            Email
                        </label>
                        <input class="appearance-none p-3 bg-gray-100  w-full rounded-lg  focus:outline-none" id="email"
                            type="email" v-model="email">
                    </div>
                    <div>
                        <label class="block text-gray-800 text-xs   mb-2" for="phone">
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
                            type="text" v-model="adress">
                    </div>

                </div>
            </div>
            <div>
                <div class="text-xl text-gray-800 font-semibold pt-1 pb-1">Employer Details</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label class="block text-gray-800 text-xs   mb-2" for="CompanyName">
                            Company Name
                        </label>
                        <input class="appearance-none p-3 bg-gray-100  w-full rounded focus:outline-none" id="CompanyName"
                            type="text" v-model="companyName">
                    </div>
                    <div>
                        <label class="block text-gray-800 text-xs   mb-2" for="HiringManagerName">
                            Hiring Manager Name
                        </label>
                        <input class="appearance-none p-3 bg-gray-100  w-full rounded  focus:outline-none"
                            id="HiringManagerName" type="text" v-model="hiringManagerName">
                    </div>
                </div>
            </div>
            <div>
                <div class="pb-4">
                    <div class="text-xl text-gray-800 font-semibold">Letter Details</div>
                    <span class="text-xs text-gray-500">3–4 paragraphs explaining why you're the perfect candidate for a
                        specific job</span>
                </div>
                <QuillEditor v-model="editorContent" theme="snow" />
            </div>
        </div>
    </div>
</template>

<script>
import {
    QuillEditor
} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import LsJobInputVue from '../res/form/LsJobInput.vue';
import { useCoverLetterStore } from '../../../stores/coverLetterStore';
import { computed, ref } from 'vue';

export default {
    components: {
        QuillEditor,
        LsJobInputVue
    },
    setup() {

        const coverLetterStore = useCoverLetterStore();
        const editorContent = computed({
            get: () => coverLetterStore.formData.letterDetails,
            set: (value) => {
                coverLetterStore.formData.letterDetails = value;
            }
        });

        const fullName = computed({
            get: () => coverLetterStore.formData.Fullname,
            set: (value) => {
                coverLetterStore.formData.Fullname = value;
            }
        });

        // Répétez le processus pour les autres champs du formulaire
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

        const adress = computed({
            get: () => coverLetterStore.formData.adress,
            set: (value) => {
                coverLetterStore.formData.adress = value;
            }
        });

        // Retournez toutes les propriétés réactives pour les utiliser dans le template
        return {
            editorContent,
            fullName,
            position,
            companyName,
            hiringManagerName,
            email,
            phoneNumber,
            adress
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