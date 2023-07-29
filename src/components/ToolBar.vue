<template>
  <v-toolbar prominent color="transparent" class="mt-4">
    <v-checkbox
      v-model="chair"
      label="Chair"
      class="check mt-4"
      color="light-blue"
    ></v-checkbox>
    <v-checkbox
      v-model="other"
      label="Others"
      class="check mt-4"
      color="light-blue"
    ></v-checkbox>
    <v-btn variant="text">
      Leather Colors
      <v-icon icon="mdi-sofa-single"></v-icon>
    </v-btn>
    <v-divider vertical></v-divider>
    <v-btn variant="text">
      Choose Design
      <v-icon icon="mdi-sofa-single"></v-icon>
    </v-btn>
    <v-divider vertical></v-divider>
    <v-slider
      color="light-blue"
      label="Price till"
      class="mt-4"
      :ticks="prices"
      tick-size="4"
    ></v-slider>
    <span class="text-caption mx-2">9,000$</span>
  </v-toolbar>
  <v-divider class="mt-2"></v-divider>
  <v-toolbar color="transparent">
    <v-toolbar-title>LOUNGE CHAIRS</v-toolbar-title>
    <v-btn variant="text" color="grey" disabled>Sort by :</v-btn>
    <v-btn variant="text">Name</v-btn>
    <v-btn variant="text" color="grey">Popularity</v-btn>
    <v-btn variant="text" color="grey">Price</v-btn>
  </v-toolbar>
  <v-divider class="mt-2"></v-divider>
</template>

<script setup>
import { ref } from "vue";
const chair = ref(true);
const other = ref(false);
const prices = ref({ 0: "500", 1: "1000", 2: "1500", 3: "2000" });
</script>
