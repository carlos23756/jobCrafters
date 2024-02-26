<template>
    <div class="flex items-center justify-center gap-2 bg-gray-100 rounded-lg text-customBlue" :title="fontSize">
      <!-- Minus Button -->
      <button
        class="p-2 rounded"
        @click="decreaseFontSize"
        :disabled="fontSize <= minFontSize"
      >
        -
      </button>
      <!-- Label -->
      <div class="text-base font-bold">
        Aa
      </div>
      <!-- Plus Button -->
      <button
        class=" p-2 rounded"
        @click="increaseFontSize"
        :disabled="fontSize >= maxFontSize"
      >
        +
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fontSize: 16, // Starting font size
        minFontSize: 12, // Minimum font size
        maxFontSize: 24, // Maximum font size
      };
    },
    methods: {
      decreaseFontSize() {
        if (this.fontSize > this.minFontSize) {
          this.fontSize -= 1;
        }
      },
      increaseFontSize() {
        if (this.fontSize < this.maxFontSize) {
          this.fontSize += 1;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  button[disabled="disabled"]{
    background: red;
  }
  </style>
  