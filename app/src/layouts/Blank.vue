<template>
    <div>
        <div class="bg-white ">
            <div class="mx-auto  max-w-7xl">
                <div class="flex h-16 justify-between">
                    <div class="flex">
                        <div class="flex flex-shrink-0 items-center">
                            <router-link to="/">
                                <img class="h-8 w-auto" src="@/assets/svg/logo.svg" alt="JobCrafters logo" />
                            </router-link>
                        </div>
                        <div class="hidden sm:ml-6 sm:flex sm:space-x-8 capitalize">
                        </div>
                    </div>
                    <div class="pt-4">
                        <Avatar/>
                    </div>
                </div>
            </div>
        </div>

        <slot />
    </div>
</template>

<script setup>
import Avatar from '@/components/ui/Avatar.vue';
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
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Upgrade Now', href: '#' },
    { name: 'Sign out', href: '#' },
]
</script>

<style></style>