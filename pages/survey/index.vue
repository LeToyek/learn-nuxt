<template>
  <div>
    <!-- Tempatkan konten survey creator di sini -->
    <div id="surveyCreator"></div>
  </div>
</template>

<script setup lang="ts">
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { SurveyCreator } from "survey-creator-knockout";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};


// Membuat ref untuk menyimpan instance SurveyCreator
const surveyCreatorRef = ref();

onMounted(() => {
  // Memastikan kode hanya dijalankan di lingkungan klien (browser)
  if (typeof document !== 'undefined') {
    // Membuat instance SurveyCreator dan menyimpannya di ref
    surveyCreatorRef.value = new SurveyCreator(creatorOptions);
    surveyCreatorRef.value.render("surveyCreator");
  }
});
</script>

<style scoped>
/* Gaya untuk komponen ini */
#surveyCreator {
  height: 100vh;
  width: 100vw;
}
</style>
