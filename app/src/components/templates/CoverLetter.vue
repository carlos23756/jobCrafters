<template>
    <div :style="{ fontSize: coverLetterStore.fontSize }">
        <div class="flex flex-nowrap">
            <div class="w-2/3">
                <h2 class="text-blue-500 capitalize font-semibold  text-3xl">
                    <p>{{ coverLetterStore.formData.Fullname }}</p>
                </h2>
                <span class="text-gray-500">{{ coverLetterStore.formData.email }}</span> <br>
                <span class="text-gray-500">{{ coverLetterStore.formData.number }}</span> <br>
                <span class="text-gray-500">{{ coverLetterStore.formData.adress }}</span> <br>
                <p class="text-gray-500">{{ coverLetterStore.formData.position }}</p>
            </div>
            <div>
                <span class="text-gray-500">{{ coverLetterStore.formData.companyName }}</span> <br>
                <span class="text-gray-500">{{ coverLetterStore.formData.hiringManagerName }}</span> <br>

            </div>
        </div>

        <div v-html="coverLetterStore.formData.letterDetails" class="leading-6 pt-4">
        </div>
    </div>
</template>
  
<script setup>
import { useCoverLetterStore } from '../../stores/coverLetterStore';

const coverLetterStore = useCoverLetterStore();

</script>


<style></style>