<template>
    <div class="bg-gray-100 sticky top-0 z-10">
        <br>
        <div class="mx-auto bg-white rounded-lg max-w-7xl  top-0">
            <div>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2 h-screen overflow-y-auto pb-8">
                        <div class="px-12 ">
                            <updateLoadingBarVue />
                            <br>
                            <div class="p-3 sticky top-0 z-10">
                                <div class="pt-2 border-b  border-blue-50 pb-6">
                                    <div class="flex no-wrap">
                                        <div class="w-full lg:w-4/5">
                                            <!-- Generate with AI-->
                                            <GenerateWithAI />

                                            <!-- Generate with AI-->

                                            <span class="text-md font-semibold text-customBlue"
                                                style="font-size: 24px;">Cover Letter Builder
                                                <span class="text-blue-500">.</span></span>
                                            <div class="text-xs pt-3">
                                                Create a professional Resume choose The good options. <br>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="max-w-4xl mx-auto">
                                    <!-- FormCoverLetter.vue-->
                                    <!-- FormCoverLetter.vue-->
                                    <formCoverLetterVue />
                                    <!-- FormCoverLetter.vue-->
                                    <!-- FormCoverLetter.vue-->

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2  bg-pattern bg-customBlue text-white rounded-r-lg ">
                        <div class="px-20 py-4">
                            <br>
                            <div>
                                <div>
                                    <div class="pb-2">
                                        <div class="flex flex-nowrap">
                                            <div class="lg:w-3/6 w-full">
                                                <button type="button" @click="openModal"
                                                    class="rounded-md  border-white px-1 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                                    <span class="isolate inline-flex rounded-md shadow-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="28"
                                                            viewBox="0 0 100 100" fill="none">
                                                            <path
                                                                d="M14.8333 19.9997C14.8333 17.1448 17.1451 14.833 20 14.833H40C42.8549 14.833 45.1667 17.1448 45.1667 19.9997V39.9997C45.1667 42.8546 42.8549 45.1663 40 45.1663H20C17.1451 45.1663 14.8333 42.8546 14.8333 39.9997V19.9997ZM54.8333 19.9997C54.8333 17.1448 57.1451 14.833 60 14.833H80C82.8549 14.833 85.1667 17.1448 85.1667 19.9997V39.9997C85.1667 42.8546 82.8549 45.1663 80 45.1663H60C57.1451 45.1663 54.8333 42.8546 54.8333 39.9997V19.9997ZM14.8333 59.9997C14.8333 57.1448 17.1451 54.833 20 54.833H40C42.8549 54.833 45.1667 57.1448 45.1667 59.9997V79.9997C45.1667 82.8546 42.8549 85.1663 40 85.1663H20C17.1451 85.1663 14.8333 82.8546 14.8333 79.9997V59.9997ZM54.8333 59.9997C54.8333 57.1448 57.1451 54.833 60 54.833H80C82.8549 54.833 85.1667 57.1448 85.1667 59.9997V79.9997C85.1667 82.8546 82.8549 85.1663 80 85.1663H60C57.1451 85.1663 54.8333 82.8546 54.8333 79.9997V59.9997Z"
                                                                stroke="white" stroke-width="7" />
                                                        </svg> &nbsp;
                                                        <div class="pt-1"> Change Template</div>
                                                    </span>
                                                </button>
                                            </div>
                                            <div class="lg:w-3/6 items-end w-full  text-center">
                                                <button type="button" @click="openModal"
                                                    class="rounded-md  border-white px-1 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                                    <span class="isolate inline-flex rounded-md shadow-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="29"
                                                            viewBox="0 0 75 75" fill="none">
                                                            <rect x="2" y="2" width="71" height="71" rx="8"
                                                                stroke="white" stroke-width="4" />
                                                            <path
                                                                d="M15.966 50L26.302 25.86H31.198L41.534 50H35.89L33.748 44.9H23.752L21.61 50H15.966ZM28.75 32.966L25.69 40.208H31.776L28.75 32.966ZM42.69 42.384V37.93H47.62V33H52.04V37.93H56.97V42.384H52.04V47.314H47.62V42.384H42.69Z"
                                                                fill="white" />
                                                        </svg> &nbsp;&nbsp;
                                                        <div class="pt-1"> Customize</div>
                                                    </span>
                                                </button>
                                            </div>
                                            <div class="lg:w-3/6 items-end w-full">
                                                <!-- Download-->

                                                <div class="inline-flex rounded-md">
                                                    <button type="button" @click="generatePdf"
                                                        class="relative inline-flex items-center rounded-l-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white   focus:z-10">
                                                        Download PDF</button>
                                                    <Menu as="div" class="relative -ml-px block">
                                                        <MenuButton
                                                            class="relative inline-flex items-center rounded-r-md border-l border-blue-700 bg-blue-600 px-2 py-2 text-white">
                                                            <span class="sr-only">Open options</span>
                                                            <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
                                                        </MenuButton>
                                                        <transition
                                                            enter-active-class="transition ease-out duration-100"
                                                            enter-from-class="transform opacity-0 scale-95"
                                                            enter-to-class="transform opacity-100 scale-100"
                                                            leave-active-class="transition ease-in duration-75"
                                                            leave-from-class="transform opacity-100 scale-100"
                                                            leave-to-class="transform opacity-0 scale-95">
                                                            <MenuItems
                                                                class="absolute right-0 z-10 -mr-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                <div class="py-1">
                                                                    <MenuItem v-for="item in items" :key="item.name"
                                                                        v-slot="{ active }">
                                                                    <a :href="item.href"
                                                                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">{{
                                                    item.name }}</a>
                                                                    </MenuItem>
                                                                </div>
                                                            </MenuItems>
                                                        </transition>
                                                    </Menu>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <!-- cover letter Prview-->
                                        <!-- cover letter Prview-->

                                        <TransitionRoot appear :show="isOpen" as="template">
                                            <Dialog as="div" @close="closeModal" class="relative z-10  ">
                                                <TransitionChild as="template" enter="duration-300 ease-out"
                                                    enter-from="opacity-0" enter-to="opacity-100"
                                                    leave="duration-200 ease-in" leave-from="opacity-100"
                                                    leave-to="opacity-0">
                                                    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                                                </TransitionChild>

                                                <div class="fixed inset-0 overflow-y-auto">
                                                    <div
                                                        class="flex min-h-80 items-center justify-center  my-8 text-center">
                                                        <TransitionChild as="template" enter="duration-300 ease-out"
                                                            enter-from="opacity-0 scale-95"
                                                            enter-to="opacity-100 scale-100"
                                                            leave="duration-200 ease-in"
                                                            leave-from="opacity-100 scale-100"
                                                            leave-to="opacity-0 scale-95">
                                                            <DialogPanel
                                                                class=" w-full max-w-7xl mt-2 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle  transition-all">
                                                                <DialogTitle as="h3"
                                                                    class="text-lg border-b font-bold p-3 leading-6 text-gray-900">
                                                                    <div class="flex">
                                                                        <div class="w-4/6 text-customBlue">
                                                                            Custom Center .
                                                                        </div>
                                                                        <div class="w-2/6">
                                                                            <div class="flex">
                                                                                <div class="pl-4">
                                                                                    <LsFontsizeVue />
                                                                                </div>
                                                                                <div class="pl-4">
                                                                                    <LsColorPallete />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </DialogTitle>
                                                                <div>
                                                                    <div class="flex flex-wrap">
                                                                        <div class="w-full lg:w-1/3">
                                                                            <div class="p-2">
                                                                                <div class="mt-4 p-2">
                                                                                    <p class="text-xs text-gray-600">
                                                                                        Your payment has been
                                                                                        successfully
                                                                                        submitted. We’ve
                                                                                        sent
                                                                                        you
                                                                                        an email with all of the details
                                                                                        of
                                                                                        your
                                                                                        order.
                                                                                    </p>
                                                                                </div>

                                                                                <div class="mt-4">
                                                                                    <!-- preview of cover letter-->
                                                                                    <ResumePreviewDisplayerVue />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="w-full lg:w-2/3 border-l pt-10 pr-4 pl-4 pb-10 bg-pattern-light bg-gray-100 overflow-auto h-screen ">

                                                                            <div
                                                                                class="a4 bg-white  rounded-lg text-gray-900 ">
                                                                                <!--Cover Letter-->
                                                                                <!--Cover Letter-->

                                                                                <CoverLetter />

                                                                                <!--Cover Letter-->
                                                                                <!--Cover Letter-->
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </DialogPanel>
                                                        </TransitionChild>
                                                    </div>
                                                </div>
                                            </Dialog>
                                        </TransitionRoot>
                                    </div>
                                </div>
                                <div class="bg-white a4  text-gray-900 rounded-lg w-full h-svh h-fit" style="zoom: 61%;"
                                    id="resumePreview">
                                    <!--Cover Letter-->
                                    <!--Cover Letter-->

                                    <CoverLetter />

                                    <!--Cover Letter-->
                                    <!--Cover Letter-->

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>

<script>


import HardSkillCardVue from '../../components/forms/res/HardSkillCard.vue';
import axios from 'axios';
import confetti from 'canvas-confetti';

import {
    ChevronDownIcon
} from '@heroicons/vue/20/solid'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
} from '@headlessui/vue'
import updateLoadingBarVue from '../../components/forms/res/updateLoadingBar.vue';
import SemiCircleProgressBar from "@/components/forms/res/SemiCircleProgressBar.vue";
import LsColorPallete from "@/components/forms/res/form/LsColorPallete.vue";
import LsFontsizeVue from '../../components/forms/res/form/LsFontsize.vue';
import ResumePreviewDisplayerVue from '../../components/templates/ResumePreviewDisplayer.vue';
import CoverLetter from '@/components/templates/CoverLetter.vue';
import formCoverLetterVue from '../../components/forms/coverLetter/formCoverLetter.vue';
import GenerateWithAI from '@/components/forms/coverLetter/generateWithAI.vue';
export default {
    data() {
        return {
            editorContent: 'uitsz',
            isOpen: false,
            score: 85,
            items: [{
                name: 'Save and schedule',
                href: '#'
            },
            {
                name: 'Save and publish',
                href: '#'
            },
            {
                name: 'Export Docx',
                href: '#'
            },
            ],

        }
    },
    components: {
        HardSkillCardVue,
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
        updateLoadingBarVue,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        ChevronDownIcon,
        SemiCircleProgressBar,
        LsColorPallete,
        LsFontsizeVue,
        ResumePreviewDisplayerVue,
        CoverLetter,
        formCoverLetterVue,
        GenerateWithAI

    },
    methods: {
        closeModal() {
            this.isOpen = false
        },
        openModal() {
            this.isOpen = true
        },
        deleteHardSkill(id) {
            this.hardSkills.splice(id, 1);
        },
        generateConfetti() {
            let duration = 2 * 1000; 
            let end = Date.now() + duration;

            let interval = setInterval(() => {
                if (Date.now() > end) {
                    return clearInterval(interval);
                }

                confetti.create(document.getElementById('canvas'), {
                    resize: true,
                    useWorker: true,
                })({ particleCount: 300, spread: 200, origin: { y: 0.7 } });
            }, 250); // adjust this value to fire more or less frequently
        },
        generatePdf() {
            // Get the HTML content and styles
            const cvContent = document.getElementById('resumePreview').innerHTML;
            const cvStyles = `
                <style>
                @font-face{font-family:euclid circular a;font-style:normal;font-weight:400;src:local('Euclid Circular A'),url('https://fonts.cdnfonts.com/s/60248/Euclid Circular A Regular.woff') format('woff')}@font-face{font-family:euclid circular a;font-style:italic;font-weight:400;src:local('Euclid Circular A'),url('https://fonts.cdnfonts.com/s/60248/Euclid Circular A Italic.woff') format('woff')}@font-face{font-family:euclid circular a;font-style:normal;font-weight:300;src:local('Euclid Circular A'),url('https://fonts.cdnfonts.com/s/60248/Euclid Circular A Light.woff') format('woff')}@font-face{font-family:euclid circular a;font-style:italic;font-weight:300;src:local('Euclid Circular A'),url('https://fonts.cdnfonts.com/s/60248/Euclid Circular A Light Italic.woff') format('woff')}@font-face{font-family:euclid circular a;font-style:normal;font-weight:500;src:local('Euclid Circular A'),url('https://fonts.cdnfonts.com/s/60248/Euclid Circular A Medium.woff') format('woff')}@font-face{font-family:euclid circular a;font-style:italic;font-weight:500;src:local('Euclid Circular A'),url('https://fonts.cdnfonts.com/s/60248/Euclid Circular A Medium Italic.woff') format('woff')}@font-face{font-family:euclid circular a;font-style:normal;font-weight:600;src:local('Euclid Circular A'),url('https://fonts.cdnfonts.com/s/60248/Euclid Circular A SemiBold.woff') format('woff')}@font-face{font-family:euclid circular a;font-style:italic;font-weight:600;src:local('Euclid Circular A'),url('https://fonts.cdnfonts.com/s/60248/Euclid Circular A SemiBold Italic.woff') format('woff')}@font-face{font-family:euclid circular a;font-style:normal;font-weight:700;src:local('Euclid Circular A'),url('https://fonts.cdnfonts.com/s/60248/Euclid Circular A Bold.woff') format('woff')}@font-face{font-family:euclid circular a;font-style:italic;font-weight:700;src:local('Euclid Circular A'),url('https://fonts.cdnfonts.com/s/60248/Euclid Circular A Bold Italic.woff') format('woff')}
                body {
                    font-family: 'Euclid Circular A', sans-serif;
                    padding-left: 20mm;
                    padding-right: 20mm;
                    margin: 0 !important;
                }
                h1 { color: #333;}
                .capitalize{text-transform: capitalize;}
                .flex{ display: flex;}
               
                .text-blue-500{color: #3b82f6;}
                lg:w-1/2{
                    width: 50% !important;
                }
                .pt-3{
                    padding-top: 0.75rem;
                }
                .text-3xl{
                    font-size: 1.875rem;
                }
                .text-gray-800{
                    color: #374151;
                }
                .underline{
                    text-decoration: underline;
                }
                .text-sm{
                    font-size: 0.875rem;
                }
                .text-gray-600{
                    color: #6b7280;
                }
                
                .text-xl{
                    font-size: 1.25rem;
                } 
                .font-semibold{
                    font-weight: 600;
                }
                .leading-6{
                    line-height: 1.5rem;
                }
                /* Add more styles as needed */
                </style>
            `;

            // Combine HTML content and styles
            const combinedHtml = `${cvStyles}<div id="cv">${cvContent}</div>`;

            axios.post('https://agile-wildwood-20343-4da5892799b0.herokuapp.com/generatePDFX', {
                cv: combinedHtml
            }, {
                responseType: 'blob'
            }).then((response) => {
                const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
                const pdfUrl = URL.createObjectURL(pdfBlob);
                const link = document.createElement('a');
                link.href = pdfUrl;
                link.setAttribute('download', 'cv.pdf');
                document.body.appendChild(link);
                link.click();

                document.body.removeChild(link);
                this.generateConfetti();
            });
        }
    }
}
</script>

<style scoped>
::-webkit-scrollbar {
    width: 3px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #e9e9e9;
}

::-webkit-scrollbar-thumb:hover {
    background: #67e8f9;
}

.a4 {
    width: 206mm;
    height: 293mm;
    margin: auto;


}
</style>