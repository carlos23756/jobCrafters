<template>
    <div class="bg-gray-100">
        <br>
        <div class="mx-auto bg-white rounded-lg max-w-7xl">
            <div>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2 h-screen overflow-y-auto pb-8">
                        <div class="px-12 ">
                            <updateLoadingBarVue />
                            <br>
                            <div class="p-3">
                                <div class="pt-2 border-b  border-blue-50 pb-6">
                                    <div class="flex no-wrap">
                                        <div class="w-full lg:w-4/5">
                                            <div class="text-xs">
                                                <span class="isolate inline-flex rounded-md">
                                                    <button type="button"
                                                        class="relative inline-flex items-center gap-x-1.5   py-2">
                                                        <svg fill="none" width="20" viewBox="0 0 32 32"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink" id="fi_6142849">
                                                            <linearGradient id="paint0_linear_364_995"
                                                                gradientUnits="userSpaceOnUse" x1="27.097" x2="1.308"
                                                                y1="29.141" y2="9.187">
                                                                <stop offset="0" stop-color="#3B82F6"></stop>
                                                                <stop offset="1" stop-color="#6DA2F8"></stop>
                                                            </linearGradient>
                                                            <path clip-rule="evenodd"
                                                                d="m17.5943 4.87146c-.0725-.71631-1.1162-.71631-1.1887 0-.0286.28234-.2519.50561-.5342.5342-.7163.07251-.7163 1.11621 0 1.18872.2823.02858.5056.25185.5342.53419.0725.71631 1.1162.71631 1.1887 0 .0286-.28234.2519-.50561.5342-.53419.7163-.07251.7163-1.11621 0-1.18872-.2823-.02859-.5056-.25186-.5342-.5342zm4.9429 2.55795c.2731-.97294 1.6524-.97294 1.9255 0l.7487 2.66669c.0942.3358.3567.5982.6925.6925l2.6666.7486c.973.2732.973 1.6524 0 1.9256l-2.6666.7486c-.3358.0943-.5983.3567-.6925.6925l-.7487 2.6667c-.2731.973-1.6524.973-1.9255 0l-.7487-2.6667c-.0943-.3358-.3567-.5982-.6925-.6925l-2.6667-.7486c-.9729-.2732-.9729-1.6524 0-1.9256l2.6667-.7486c.3358-.0943.5982-.3567.6925-.6925zm-12.36 4.60629c.7087-1.569 2.9368-1.569 3.6455 0l1.5998 3.5423c.2004.4437.5558.7991.9995.9995l3.5422 1.5998c1.5691.7086 1.5691 2.9368 0 3.6454l-3.5422 1.5999c-.4437.2004-.7991.5558-.9995.9995l-1.5998 3.5422c-.7087 1.569-2.9368 1.569-3.6455 0l-1.59981-3.5422c-.2004-.4437-.55578-.7991-.99949-.9995l-3.54224-1.5999c-1.56903-.7086-1.56903-2.9368 0-3.6454l3.54224-1.5998c.44371-.2004.79909-.5558.99949-.9995z"
                                                                fill="url(#paint0_linear_364_995)" fill-rule="evenodd">
                                                            </path>
                                                        </svg>
                                                        <span class="uppercase tracking-widest font-bold"
                                                            style="color: #3B82F6;">
                                                            Generate
                                                            With AI</span>
                                                    </button>

                                                </span>
                                            </div>
                                            <span class="text-md font-semibold text-customBlue"
                                                style="font-size: 24px;">Resume Builder
                                                <span class="text-blue-500">.</span></span>
                                            <div class="text-xs pt-3">
                                                Create a professional Resume choose The good options. <br>
                                            </div>
                                        </div>
                                        <div class="w-full  p-1 text lg:w-1/5" style="line-height: 4px;">
                                            <div class="pt-1 text-center ">
                                                <span class="text-xs text-customBlue font-bold uppercase">ATS Score</span>
                                                <br>
                                                <SemiCircleProgressBar :progress="55" />
                                                <span style="font-size: 10px;" class="font-bold text-blue-400">22
                                                    Issiues</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="max-w-4xl mx-auto">
                                    <div class="rounded-lg p-0">
                                        <div class="pb-4 pt-4">
                                            <span
                                                class="text-customBlue text-xs font-bold uppercase tracking-widest">Personal
                                                Information <span class="text-blue-500">.</span></span>
                                        </div>
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label class="block text-gray-800 text-xs  mb-2" for="wanted-job-title">
                                                    Wanted Job Title
                                                </label>
                                                <LsjobInput />
                                            </div>

                                            <div>
                                                <label class="block text-gray-800 text-xs  mb-2" for="first-name">
                                                    First Name
                                                </label>
                                                <input
                                                    class=" appearance-none p-3 bg-gray-100  w-full rounded text-gray-700 focus:outline-none  "
                                                    id="first-name" type="text">
                                            </div>
                                            <div>
                                                <label class="block text-gray-800 text-xs  mb-2" for="last-name">
                                                    Last Name
                                                </label>
                                                <input
                                                    class="appearance-none p-3 bg-gray-100  w-full rounded text-gray-700 focus:outline-none"
                                                    id="last-name" type="text">
                                            </div>
                                            <div>
                                                <label class="block text-gray-800 text-xs   mb-2" for="email">
                                                    Email
                                                </label>
                                                <input
                                                    class="appearance-none p-3 bg-gray-100  w-full rounded text-gray-700 focus:outline-none"
                                                    id="email" type="email">
                                            </div>
                                            <div>
                                                <label class="block text-gray-800 text-xs   mb-2" for="phone">
                                                    Phone
                                                </label>
                                                <input
                                                    class="appearance-none p-3 bg-gray-100  w-full rounded text-gray-700 focus:outline-none"
                                                    id="phone" type="tel">
                                            </div>
                                            <div>
                                                <label class="block text-gray-800 text-xs   mb-2" for="country">
                                                    Country
                                                </label>
                                                <input
                                                    class="appearance-none p-3 bg-gray-100  w-full rounded text-gray-700 focus:outline-none"
                                                    id="country" type="text">
                                            </div>
                                            <div>
                                                <label class="block text-gray-800 text-xs   mb-2" for="city">
                                                    City
                                                </label>
                                                <input
                                                    class="appearance-none p-3 bg-gray-100  w-full rounded text-gray-700 focus:outline-none"
                                                    id="city" type="text">
                                            </div>
                                            <div>
                                                <div class="flex items-center space-x-6">
                                                    <div class="shrink-0 pt-8">
                                                        <img class="h-10 w-10 object-cover rounded-lg"
                                                            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt="Current profile photo" />
                                                    </div>
                                                    <label class="block pt-6">
                                                        <span class="sr-only">Choose profile photo</span>
                                                        <input type="file"
                                                            class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="hardSkill">
                                            <div class="flex flex-nowrap" v-for="(hardSkill, id) in hardSkills" :key="id">
                                                <div style="width: 99%;">
                                                    <HardSkillCardVue :hardSkill=hardSkill.name :level=hardSkill.level />
                                                </div>
                                                <div class="pt-3 text-center" style="width: 1%;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2"
                                                        width="20" class="fill-gray-400 cursor-pointer pt-8 relative "
                                                        viewBox="0 0 24 24" style="left: 20px;"
                                                        @click="deleteHardSkill(id)">
                                                        <path
                                                            d="M19,7a1,1,0,0,0-1,1V19.191A1.92,1.92,0,0,1,15.99,21H8.01A1.92,1.92,0,0,1,6,19.191V8A1,1,0,0,0,4,8V19.191A3.918,3.918,0,0,0,8.01,23h7.98A3.918,3.918,0,0,0,20,19.191V8A1,1,0,0,0,19,7Z" />
                                                        <path
                                                            d="M20,4H16V2a1,1,0,0,0-1-1H9A1,1,0,0,0,8,2V4H4A1,1,0,0,0,4,6H20a1,1,0,0,0,0-2ZM10,4V3h4V4Z" />
                                                        <path d="M11,17V10a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Z" />
                                                        <path d="M15,17V10a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                            <rect x="2" y="2" width="71" height="71" rx="8" stroke="white"
                                                                stroke-width="4" />
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
                                                    <button type="button"
                                                        class="relative inline-flex items-center rounded-l-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white   focus:z-10">
                                                        Download PDF</button>
                                                    <Menu as="div" class="relative -ml-px block">
                                                        <MenuButton
                                                            class="relative inline-flex items-center rounded-r-md border-l border-blue-700 bg-blue-600 px-2 py-2 text-white">
                                                            <span class="sr-only">Open options</span>
                                                            <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
                                                        </MenuButton>
                                                        <transition enter-active-class="transition ease-out duration-100"
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
                                        <TransitionRoot appear :show="isOpen" as="template">
                                            <Dialog as="div" @close="closeModal" class="relative z-10  ">
                                                <TransitionChild as="template" enter="duration-300 ease-out"
                                                    enter-from="opacity-0" enter-to="opacity-100"
                                                    leave="duration-200 ease-in" leave-from="opacity-100"
                                                    leave-to="opacity-0">
                                                    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                                                </TransitionChild>

                                                <div class="fixed inset-0 overflow-y-auto">
                                                    <div class="flex min-h-80 items-center justify-center  my-8 text-center">
                                                        <TransitionChild as="template" enter="duration-300 ease-out"
                                                            enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                                                            leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
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
                                                                            <div class="mt-4 p-2">
                                                                                <p class="text-sm text-gray-600">
                                                                                    your payment has been successfully
                                                                                    submitted. We’ve
                                                                                    sent
                                                                                    you
                                                                                    an email with all of the details of your
                                                                                    order.
                                                                                </p>
                                                                            </div>

                                                                            <div class="mt-4">

                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="w-full lg:w-2/3 border-l overflow-auto h-screen p-6">

                                                                            <div
                                                                                class="a4 pt-8 pr-4 pl-4 rounded-lg text-gray-900 bg-gray-100">
                                                                                <b>Ada Sheik</b>
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
                                <div class="bg-white p-10 text-gray-900 rounded-lg w-full h-svh h-fit" id="resumePreview">
                                    <b>Ada Sheik</b>
                                    <p class="text-xs pt-2">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo molestias voluptatibus
                                        deserunt error, dolorem ipsum sit repellat blanditiis!
                                    </p>

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
import LsjobInput from "../../components/forms/res/form/LsJobInput.vue"
import HardSkillCardVue from '../../components/forms/res/HardSkillCard.vue';

import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/vue'
import updateLoadingBarVue from '../../components/forms/res/updateLoadingBar.vue';
import SemiCircleProgressBar from "@/components/forms/res/SemiCircleProgressBar.vue";
import LsColorPallete from "@/components/forms/res/form/LsColorPallete.vue";
import LsFontsizeVue from '../../components/forms/res/form/LsFontsize.vue';
export default {
    data() {
        return {
            job: "Software Entwickler",
            isOpen: false,
            items: [
                { name: 'Save and schedule', href: '#' },
                { name: 'Save and publish', href: '#' },
                { name: 'Export Docx', href: '#' },
            ],
            hardSkills: [
                { name: "Ms office", level: 2 },
                { name: "Python", level: 4 },
                { name: "Sql", level: 3 }
            ]
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
        LsjobInput,
        SemiCircleProgressBar,
        LsColorPallete,
        LsFontsizeVue


    },
    methods: {
        closeModal() {
            this.isOpen = false
        },
        openModal() {
            this.isOpen = true
        }
        ,
        deleteHardSkill(id) {
            this.hardSkills.splice(id, 1);
        }
    }
}
</script>

<style scoped>
::-webkit-scrollbar {
    width: 0px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #60a5fa;
}

::-webkit-scrollbar-thumb:hover {
    background: #67e8f9;
}

.a4 {
    width: 206mm;
    height: 293mm;
    margin: auto;
    padding: 20mm;
}
</style>