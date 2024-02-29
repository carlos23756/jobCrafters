<template>
    <div>
        <div class="bg-white ">
            <div class="mx-auto  max-w-7xl md:px-4 lg:px-1 sm:px-8">
                <div class="flex h-16 justify-between">
                    <div class="flex">
                        <div class="flex flex-shrink-0 items-center">
                            <router-link to="/">
                                <img class="h-8 w-auto" src="@/assets/svg/logo.svg" alt="JobCrafters logo" />
                            </router-link>
                        </div>
                    </div>
                    <div class="pt-4">
                      <!--Avatar-->
                      <Avatar/>
                      <!--Avatar-->
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-100 bg-pattern-light">
            <br>
            <div class="mx-auto bg-white rounded-xl max-w-7xl">
                <div>
                    <div class="flex flex-wrap rounded-lg ">
                        <div class="w-full lg:w-3/12 h-screen  rounded-l-xl border-gray-100 border-r overflow-y-auto pb-8">
                            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6">
                                <nav class="flex flex-1 pt-16 flex-col">
                                    <ul role="list" class="flex flex-1 p-3 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" class="-mx-2 space-y-1">
                                                <li v-for="item in navigation" :key="item.name">
                                                    <router-link :to="item.href"
                                                        :class="[item.current ? 'bg-blue-500  text-white font-semibold p-4' : 'p-4 text-gray-700  hover:bg-gray-50', 'group flex gap-x-3 rounded-lg p-2 text-sm leading-6 font-meduim']"> 
                                                        <component :is="item.icon" :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                                                        {{ item.name }}   
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="w-full lg:w-9/12 rounded-r-xl  rounded-r-xl ">
                            <div class="p-8">
                                <slot />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>


    
<script setup>
import Avatar from '@/components/ui/Avatar.vue';
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'

import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'
import Document from '../components/icons/Document.vue';
import Folder from '../components/icons/Folder.vue';
import Message from '../components/icons/Message.vue';
import Settings from '../components/icons/Settings.vue';
import Video from '../components/icons/Video.vue';
import Paper from '../components/icons/Paper.vue';
import Dashboard from "../components/icons/Dashboard.vue"
import Wallet from "@/components/icons/Wallet.vue";




const navigation = [
  { name: 'Dashboard', href: '/profile', icon: Dashboard, count: '5', current: true },
  { name: 'Resume', href: '/resumes', icon: Document, current: false },
  { name: 'Cover Letter', href: '#', icon: Paper, count: '12', current: false },
  { name: 'Job Interview', href: '#', icon: Video, count: '20+', current: false },
  { name: 'Application', href: '#', icon: Folder, current: false },
  { name: 'Plan & Billing', href: '#', icon: Wallet, current: false },
  { name: 'Chat AI', href: '#', icon: Message, current: false },
  { name: 'Settings', href: '/settings', icon: Settings, current: false },

]
const updateCurrentNavigation = () => {
  if (navigation && navigation.value) {
    navigation.value.forEach(item => {
      item.current = route.path === item.href;
    });
  }
};

const route = useRoute()
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import FolderVue from '../components/icons/Folder.vue'
import wallet from "@/components/icons/Wallet.vue";
const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Upgrade Now', href: '#' },
    { name: 'Sign out', href: '#' },
]


// Mise à jour initiale lors du montage du composant
onMounted(() => {
  updateCurrentNavigation()
})

// Réagir aux changements de route pour mettre à jour la navigation
watch(() => route.path, updateCurrentNavigation)
</script>
  