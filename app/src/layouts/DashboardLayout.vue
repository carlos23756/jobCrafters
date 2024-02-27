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

                        <Menu as="div" class="relative">
                            <MenuButton class="-m-1.5 flex items-center p-2">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full ring-offset-2 ring-2 ring-gray-200 bg-gray-50"
                                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" />
                                <span class="hidden lg:flex lg:items-center">
                                    <span class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">Ada
                                        sheik</span>
                                    <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </MenuButton>
                            <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                                <MenuItems
                                    class="absolute right-0 z-50 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                    <a :href="item.href"
                                        :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">{{
                                            item.name }}</a>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-100">
            <br>
            <div class="mx-auto bg-white rounded-xl max-w-7xl">
                <div>
                    <div class="flex flex-wrap rounded-lg ">
                        <div class="w-full lg:w-3/12 h-screen rounded-l-xl border-gray-100 border-r overflow-y-auto pb-8">
                            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6">
                               
                                <nav class="flex flex-1 pt-14 flex-col">
                                    <ul role="list" class="flex flex-1 p-3 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" class="-mx-2 space-y-1">
                                                <li v-for="item in navigation" :key="item.name">
                                                    <a :href="item.href"
                                                        :class="[item.current ? 'bg-blue-50 text-indigo-500 font-semibold p-4' : 'p-4 text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-lg p-2 text-sm leading-6 font-meduim']">
                                                       
                                                        {{ item.name }}
                                                       
                                                    </a>
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
import { ref } from 'vue'
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

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
  { name: 'Resume', href: '#', icon: UsersIcon, current: false },
  { name: 'Cover Letter', href: '#', icon: FolderIcon, count: '12', current: false },
  { name: 'Job Interview', href: '#', icon: CalendarIcon, count: '20+', current: false },
  { name: 'Application', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Coaching', href: '#', icon: ChartPieIcon, current: false },
  { name: 'Messages', href: '#', icon: ChartPieIcon, current: false },
  { name: 'Settings', href: '#', icon: ChartPieIcon, current: false },

]

import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import FolderVue from '../components/icons/Folder.vue'
const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Upgrade Now', href: '#' },
    { name: 'Sign out', href: '#' },
]
</script>
  