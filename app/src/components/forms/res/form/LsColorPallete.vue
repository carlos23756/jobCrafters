<template>
    <div>
        <div>
            <RadioGroup v-model="selectedColor" class="mt-2">
                <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                <span class="flex items-center space-x-2">
                    <RadioGroupOption as="template" v-for="(color,id) in colors" :key="id" :value="color"
                        v-slot="{ active, checked }">
                        <div
                            :class="[color.selectedColor, active && checked ? 'ring ring-offse' : '', !active && checked ? 'ring-1' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                            <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                            <span aria-hidden="true"
                                :class="[color.bgColor, 'h-7 w-7 rounded-full']" />
                        </div>
                    </RadioGroupOption>
                </span>
            </RadioGroup>
        </div>
    </div>
</template>

<script>
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
} from '@headlessui/vue'
export default {
    data() {
        return {
            colors: [
                { name: 'Washed Black', bgColor: 'bg-red-500', selectedColor: 'ring-red-500' },
                { name: 'Washed Black', bgColor: 'bg-orange-500', selectedColor: 'ring-orange-500' },
                { name: 'Washed Black', bgColor: 'bg-amber-500', selectedColor: 'ring-amber-500' },
                { name: 'Washed Black', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
                { name: 'Washed Black', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' },



            ],
            selectedColor:0,
            
        }
    },
    components: { RadioGroup, RadioGroupLabel, RadioGroupOption }
}
</script>

<style></style>