<template>
    <div>
        <dl class="space-y-6 pt-2 divide-y divide-gray-900/10">
            <Disclosure as="div" v-slot="{ open }" class="rounded-lg">
                <dt>
                    <DisclosureButton
                        class="flex w-full items-start justify-between text-left bg-gray-100 rounded-lg  p-6  text-gray-900">
                        <div class="text-sm text-customBlue  capitalized">
                            <div class="flex flex-wrap">
                                <div class="pt-3">
                                    <svg viewBox="0 0 24 24" width="20" class="fill-gray-400 relative" style="left: -50px;"
                                        xmlns="http://www.w3.org/2000/svg" id="fi_3793594" >
                                        <circle cx="8" cy="4" r="2"></circle>
                                        <circle cx="8" cy="12" r="2"></circle>
                                        <circle cx="8" cy="20" r="2"></circle>
                                        <circle cx="16" cy="4" r="2"></circle>
                                        <circle cx="16" cy="12" r="2"></circle>
                                        <circle cx="16" cy="20" r="2"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <div class="font-semibold text-gray-700 "> {{ HardSkill }}</div>
                                    <span class="text-xs text-gray-500">{{ litteralLevel[currentLevel - 1] }}</span>
                                </div>
                                
                            </div>
                        </div>
                        <span class="ml-6 flex h-7 pt-5 items-center">
                            <ChevronDownIcon v-if="!open" class="h-4 w-4 text-customBlue" aria-hidden="true" />
                            <ChevronUpIcon v-else class="h-4 w-4 text-customBlue" aria-hidden="true" />
                        </span>
                    </DisclosureButton>


                </dt>
                <DisclosurePanel as="dd" class="rounded-b-lg pr-1" style="background:#f9f9f9">
                    <div class="max-w-4xl  mx-auto">
                        <div class="rounded-b-lg p-0">
                            <div class="p-6">
                                <div class="flex flex-wrap">
                                    <div class="w-full lg:w-1/2">
                                        <LevelInputVue :level="currentLevel" />
                                    </div>
                                    <div>
                                        <div>
                                            <label class="block text-gray-800 text-xs  mb-2" for="first-name">
                                                Qualification
                                            </label>
                                            <input
                                                class="text-sm placeholder:text-gray-900 appearance-none p-4 bg-gray-100  w-full rounded-lg text-gray-700 focus:outline-none  "
                                                id="first-name" type="text" v-model="HardSkill">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </dl>
    </div>
</template>

<script>
import ChevronUpIcon from '@heroicons/vue/24/solid/ChevronUpIcon'
import ChevronDownIcon from '@heroicons/vue/24/solid/ChevronDownIcon'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import LevelInputVue from './LevelInput.vue'

export default {
    data() {
        return {
            HardSkill: this.hardSkill,
            currentLevel: this.level,
            litteralLevel: ["Beginner", "Intermediate", "Advanced", "Expert"],
        }
    },
    components: {
        ChevronUpIcon,
        ChevronDownIcon,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        LevelInputVue
    },
    props:["hardSkill","level"]
}
</script>

<style></style>