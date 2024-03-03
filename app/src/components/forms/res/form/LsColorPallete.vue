<template>
    <div>
        <div>
            <RadioGroup class="mt-2">
                <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                <span class="flex items-center space-x-2">
                    <div v-for="(color, index) in colors" :key="index">
                        <div class="cursor-pointer"
                            :class="[index === selectedColor ? 'ring ring-offset-2 rounded-full' : '', index === selectedColor ? color.ringColor : '']">
                            <div aria-hidden="true" :class="[color.bgColor, 'h-8 w-8 rounded-full']"
                                @click="updateSelectedColor(index)">
                                <div v-if="index === selectedColor ">
                                    <svg viewBox="0 -65 512 512" width="12" fill="#fff" class="mx-auto" style="padding-top: 10px;"
                                        xmlns="http://www.w3.org/2000/svg" id="fi_1633830">
                                        <path
                                            d="m444.175781 0-260.871093 242.011719-110.324219-117.734375-72.980469 68.386718 178.234375 190.207032 333.765625-309.351563zm0 0">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </RadioGroup>
        </div>
    </div>
</template>
  
<script>

import { useCoverLetterStyleDoc } from '@/stores/coverLetterStyleDoc';
import { RadioGroup, RadioGroupLabel } from '@headlessui/vue';

export default {
    components: { RadioGroup, RadioGroupLabel },
    mounted() {
        const store = useCoverLetterStyleDoc();
        this.colors= store.getCurrentColors;
        this.selectedColor = store.getCurrentColorId;
        
    },
 
};
</script>
  
<style scoped></style>
  