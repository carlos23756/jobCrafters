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
                <div class="pt-2 pb-8">
                    <div class="text-blue-500 font-bold cursor-pointer text-sm">Mehr Informationen Anzeigen</div>
                    <br>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    

                    <div>
                        <label class="block text-gray-800 text-xs " for="email">
                            Website
                        </label>
                        <input class="appearance-none p-3 bg-gray-100  w-full rounded-lg focus:outline-none" id="website"
                            type="text" v-model="website">
                    </div>
                    <div>
                        <label class="block text-gray-800 text-xs " for="phone">
                            linkedin
                        </label>
                        <input class="appearance-none p-3 bg-gray-100  w-full rounded-lg  focus:outline-none" id="phone"
                            type="tel" v-model="linkedin">
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
                        <input class="appearance-none p-3 bg-gray-100  w-full rounded focus:outline-none" id="CompanyName"
                            type="text" v-model="companyName">
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
                        specific job .</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import LsJobInputVue from '../res/form/LsJobInput.vue';
import { useCoverLetterStore } from '../../../stores/coverLetterStore';
import { computed, ref } from 'vue';

export default {
    data() {
    return {
      // Initialize with the initial content
      editorContent: "lorem ipsum",
    };
  },
    components: {
        LsJobInputVue
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
            linkedin
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