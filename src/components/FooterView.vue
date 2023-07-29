<template>
  <v-footer class="pa-0">
    <v-toolbar color="light-blue">
      <v-toolbar-title>Get In Touch With Us</v-toolbar-title>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
        color="wihte"
      ></v-btn>
    </v-toolbar>
  </v-footer>
</template>

<script setup>
import { ref } from "vue";
const icons = ref([
  "mdi-facebook",
  "mdi-twitter",
  "mdi-linkedin",
  "mdi-instagram",
]);
</script>
