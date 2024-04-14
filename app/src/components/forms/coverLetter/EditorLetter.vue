<template>
  <div>
    <Editor v-model="editorContent" editorStyle="height: 320px" />
  </div>
</template>

<script>
import Editor from 'primevue/editor';
import { useCoverLetterStore } from '../../../stores/coverLetterStore';
import { computed, ref } from 'vue';

export default {
  components: {
    Editor
  },
  setup() {

    const coverLetterStore = useCoverLetterStore();
    const editorContent = computed({
      get: () => coverLetterStore.formData.letterDetails,
      set: (value) => {
        coverLetterStore.formData.letterDetails = value;
      }
    });

    return {
      editorContent
    };
  }
}
</script>

<style></style>