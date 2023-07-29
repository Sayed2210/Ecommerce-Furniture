<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" v-for="(chair, i) in chairs" :key="i">
        <v-card flat>
          <v-img cover height="250" :src="chair.image"></v-img>
          <v-card-item>
            <v-card-title>
              {{ chair.title }}
            </v-card-title>
            <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              half-increments
              readonly
              size="small"
            ></v-rating>
            <v-card-subtitle>
              {{ chair.price }}
            </v-card-subtitle>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-toolbar color="transparent">
      <v-toolbar-title>Show more chairs</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon
        color="grey"
        left
        class="mr-4 mt-n1"
        icon="mdi-chevron-left"
      ></v-icon>
      <span class="text-caption">3</span>
      <v-icon
        color="grey"
        left
        class="ml-4 mt-n1 mr-2"
        icon="mdi-chevron-right"
      ></v-icon>
    </v-toolbar>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const chairs = ref([
  {
    class: "pa-0",
    image: "c1.png",
    title: "Lounge Chair",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c2.png",
    title: "Repos",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c3.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c4.png",
    title: "Loby Chair",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c5.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c6.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c7.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c8.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c9.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c10.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c11.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c12.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c13.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c14.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c15.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c16.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c15.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
  {
    class: "pa-0",
    image: "c16.png",
    title: "Modern Lounge",
    price: "$ 145.00",
  },
]);
</script>
