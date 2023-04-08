<template>
  <div >
    <h1>asok</h1>
    <ClientOnly>
      <Survey :survey="survey" />
    </ClientOnly>
  </div>

</template>

<script setup lang="ts">
import { Model, StylesManager } from "survey-core";
import "survey-core/defaultV2.min.css";
import { Survey } from "survey-vue-ui";


StylesManager.applyTheme("defaultV2");

const surveyJson = {
  elements: [
    {
      name: "FirstName",
      title: "Enter your first name:",
      type: "text",
    },
    {
      name: "LastName",
      title: "Enter your last name:",
      type: "text",
    },
  ],
};
const survey = new Model(surveyJson);
survey.focusFirstQuestionAutomatic = false;

</script>
