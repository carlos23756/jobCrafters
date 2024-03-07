<template>
    <div>
        <div>
            <div class="text-xs">
                <span class="isolate inline-flex rounded-md">
                    <button type="button" class="relative inline-flex items-center gap-x-1.5 py-2" @click="openModal">
                        <svg fill="none" width="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" id="fi_6142849">
                            <linearGradient id="paint0_linear_364_995" gradientUnits="userSpaceOnUse" x1="27.097" x2="1.308"
                                y1="29.141" y2="9.187">
                                <stop offset="0" stop-color="#3B82F6"></stop>
                                <stop offset="1" stop-color="#6DA2F8"></stop>
                            </linearGradient>
                            <path clip-rule="evenodd"
                                d="m17.5943 4.87146c-.0725-.71631-1.1162-.71631-1.1887 0-.0286.28234-.2519.50561-.5342.5342-.7163.07251-.7163 1.11621 0 1.18872.2823.02858.5056.25185.5342.53419.0725.71631 1.1162.71631 1.1887 0 .0286-.28234.2519-.50561.5342-.53419.7163-.07251.7163-1.11621 0-1.18872-.2823-.02859-.5056-.25186-.5342-.5342zm4.9429 2.55795c.2731-.97294 1.6524-.97294 1.9255 0l.7487 2.66669c.0942.3358.3567.5982.6925.6925l2.6666.7486c.973.2732.973 1.6524 0 1.9256l-2.6666.7486c-.3358.0943-.5983.3567-.6925.6925l-.7487 2.6667c-.2731.973-1.6524.973-1.9255 0l-.7487-2.6667c-.0943-.3358-.3567-.5982-.6925-.6925l-2.6667-.7486c-.9729-.2732-.9729-1.6524 0-1.9256l2.6667-.7486c.3358-.0943.5982-.3567.6925-.6925zm-12.36 4.60629c.7087-1.569 2.9368-1.569 3.6455 0l1.5998 3.5423c.2004.4437.5558.7991.9995.9995l3.5422 1.5998c1.5691.7086 1.5691 2.9368 0 3.6454l-3.5422 1.5999c-.4437.2004-.7991.5558-.9995.9995l-1.5998 3.5422c-.7087 1.569-2.9368 1.569-3.6455 0l-1.59981-3.5422c-.2004-.4437-.55578-.7991-.99949-.9995l-3.54224-1.5999c-1.56903-.7086-1.56903-2.9368 0-3.6454l3.54224-1.5998c.44371-.2004.79909-.5558.99949-.9995z"
                                fill="url(#paint0_linear_364_995)" fill-rule="evenodd">
                            </path>
                        </svg>
                        <span class="uppercase tracking-widest font-bold" style="color: #3B82F6;">
                            Generate
                            With AI</span>
                    </button>
                </span>
            </div>
        </div>

        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="closeModal" class="relative z-10">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                    leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                <div class="mt-2 mb-6">
                                    <div class="flex flex-wrap" v-if="getLinkOrDescription == false">
                                        <div class="w-1/2">
                                            <div class="p-4">
                                            </div>
                                        </div>
                                        <div class="w-1/2 border-l">
                                            <div class="p-6">
                                                <i class="text-amber-400 text-sm"><b>JbC Prime</b></i>
                                                <DialogTitle as="h2" class="text-xl leading-6 font-bold text-amber-400">
                                                    <div class="isolate inline-flex">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                                viewBox="0 0 32 32" fill="none">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M17.5943 4.87122C17.5218 4.15491 16.4781 4.15491 16.4056 4.87122C16.377 5.15356 16.1537 5.37683 15.8714 5.40542C15.1551 5.47793 15.1551 6.52163 15.8714 6.59414C16.1537 6.62272 16.377 6.84599 16.4056 7.12833C16.4781 7.84464 17.5218 7.84464 17.5943 7.12833C17.6229 6.84599 17.8462 6.62272 18.1285 6.59414C18.8448 6.52163 18.8448 5.47793 18.1285 5.40542C17.8462 5.37683 17.6229 5.15356 17.5943 4.87122ZM22.5372 7.42917C22.8103 6.45623 24.1896 6.45623 24.4627 7.42917L25.2114 10.0959C25.3056 10.4317 25.5681 10.6941 25.9039 10.7884L28.5705 11.537C29.5435 11.8102 29.5435 13.1894 28.5705 13.4626L25.9039 14.2112C25.5681 14.3055 25.3056 14.5679 25.2114 14.9037L24.4627 17.5704C24.1896 18.5434 22.8103 18.5434 22.5372 17.5704L21.7885 14.9037C21.6942 14.5679 21.4318 14.3055 21.096 14.2112L18.4293 13.4626C17.4564 13.1894 17.4564 11.8102 18.4293 11.537L21.096 10.7884C21.4318 10.6941 21.6942 10.4317 21.7885 10.0959L22.5372 7.42917ZM10.1772 12.0355C10.8859 10.4665 13.114 10.4665 13.8227 12.0355L15.4225 15.5778C15.6229 16.0215 15.9783 16.3769 16.422 16.5773L19.9642 18.1771C21.5333 18.8857 21.5333 21.1139 19.9642 21.8225L16.422 23.4224C15.9783 23.6228 15.6229 23.9782 15.4225 24.4219L13.8227 27.9641C13.114 29.5331 10.8859 29.5331 10.1772 27.9641L8.57739 24.4219C8.37699 23.9782 8.02161 23.6228 7.5779 23.4224L4.03566 21.8225C2.46663 21.1139 2.46663 18.8857 4.03566 18.1771L7.5779 16.5773C8.02161 16.3769 8.37699 16.0215 8.57739 15.5778L10.1772 12.0355Z"
                                                                    fill="url(#paint0_linear_112_45)" />
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_112_45" x1="27.097"
                                                                        y1="29.1408" x2="1.308" y2="9.18676"
                                                                        gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="white" />
                                                                        <stop offset="1" stop-color="#FFB800" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div class="pt-1">
                                                            &nbsp;Generate With AI .
                                                        </div>
                                                    </div>
                                                </DialogTitle>

                                                <div class="text-sm text-gray-700 pt-2">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga,
                                                    autem assumenda, possimus aliquam .
                                                </div>
                                                <div>
                                                    <div class="pt-4 pb-2">
                                                        <label class="block text-gray-900 text-xs mb-2" for="jobLink">
                                                            Job link
                                                        </label>
                                                        <input
                                                            class="appearance-none p-3 bg-gray-100 text-sm w-full rounded-lg  focus:outline-none"
                                                            id="jobLink" type="text" v-model="jobLink" spellcheck="false">
                                                    </div>
                                                    <div class="relative">
                                                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                                            <div class="w-full border-t border border-gray-200" />
                                                        </div>
                                                        <div class="relative flex justify-center">
                                                            <span
                                                                class="bg-white px-2 text-sm text-gray-400 font-bold">OR</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="pt-2">
                                                            <label for="comment" class="block text-gray-900 text-xs">
                                                                Job Description (Recomanded)</label>
                                                            <div class="mt-2">
                                                                <textarea rows="4" name="comment" id="comment"
                                                                    class="block w-full rounded-md  py-1.5 text-gray-900 focus:border appearance-none p-3 bg-gray-100 text-sm w-full rounded-lg  focus:outline-none  placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-4">
                                                    <button type="button"
                                                        class="inline-flex float-right w-full justify-center rounded-md goldGradient  text-amber-900 p-5 text-sm font-bold  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        @click="getLinkValidate" style="font-size: 15px;">
                                                        Generate With AI
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div class="p-8" v-if="getLinkOrDescription == true">
                                            <span class="isolate inline-flex rounded-md" @click="goBack">
                                                <button type="button"
                                                    class="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-700 hover:bg-gray-50 focus:z-10">
                                                    <span class="sr-only">Previous</span>
                                                    <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                                                </button>
                                                <button type="button"
                                                    class="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-700 hover:bg-gray-50 focus:z-10">
                                                Go Back
                                                </button>
                                            </span>
                                            <div class="pt-2 pb-2 text-2xl font-bold">Webscrapping</div>
                                            <div v-if="!loading" class="text-sm text-gray-500"> {{ pageContent }}</div>
                                            <div v-else>
                                               <div class="text-gray-500 capitalize"> scrape information from the website</div> <br>
                                                <SpinnerVue />
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
</template>

<script >
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import { ChevronLeftIcon } from '@heroicons/vue/20/solid'
import axios from 'axios';
import SpinnerVue from '../../ui/Spinner.vue';

export default {
    data() {
        return {
            url: '',
            jobLink: '',
            pageContent: '',
            isOpen: false,
            loading: false,
            getLinkOrDescription: false

        };
    },
    components: {
        TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle,
        SpinnerVue,ChevronLeftIcon

    },
    methods: {
        async fetchPageContent() {
            try {
                const response = await axios.get(`https://agile-wildwood-20343-4da5892799b0.herokuapp.com/scrape?url=${this.jobLink}`);
                this.pageContent = response.data.text;
                this.loading = false
            } catch (error) {
                console.error("Erreur lors de la récupération du contenu de la page.");
            }
        },
        closeModal() {
            this.isOpen = false
        },
        openModal() {
            this.isOpen = true
        },
        getLinkValidate() {
            this.getLinkOrDescription = true
            this.fetchPageContent(),
            this.loading = true
        },
        goBack(){
            this.getLinkOrDescription = false

        }
    }
}

</script>

<style>
.goldGradient {
    background: rgba(255, 184, 0, 1);

    background: linear-gradient(-55deg, rgba(255, 242, 159, 1) 0%, rgba(255, 184, 0, 1) 100%);
}
</style>