<template>
  <v-layout>
    <NavBar />
    <v-main>
      <v-container fluid class="pa-0">
        <v-card color="light-blue-lighten-4">
          <v-row>
            <v-col cols="12" sm="12">
              <v-item-group mandatory>
                <v-container>
                  <v-row>
                    <v-col
                      v-for="(categorie, i) in categories"
                      :key="i"
                      md="2"
                      sm="6"
                      cols="12"
                    >
                      <v-item v-slot="{ isSelected, toggle }">
                        <v-hover v-slot="{ isHovering, props }">
                          <v-card
                            :color="
                              (isSelected ? 'light-blue-lighten-4' : '',
                              isHovering ? 'light-blue-lighten-4' : undefined)
                            "
                            v-bind="props"
                            class="d-flex align-center justify-center pa-lg-10"
                            dark
                            height="180"
                            @click="toggle"
                          >
                            <v-row>
                              <v-col cols="12" sm="12">
                                <v-img :src="categorie.img"></v-img>
                                <h4 class="text-subtitle-2 mt-2">
                                  {{ categorie.title }}
                                </h4>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-hover>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-container>
              </v-item-group>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
      <ToolBar />
      <ProductSec />
      <FooterView />
    </v-main>
  </v-layout>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import ToolBar from "@/components/ToolBar.vue";
import ProductSec from "@/components/ProductSec.vue";
import FooterView from "@/components/FooterView.vue";
import { ref } from "vue";
const categories = ref([
  { img: "bed.png", title: "SLEEPING BEDS" },
  { img: "lounge.png", title: "LOUNGE CHAIRS" },
  { img: "chair.png", title: "CHAIRS" },
  { img: "office-chair.png", title: "OFFICE CHAIRS" },
  { img: "nightstand.png", title: "TABLES NIGHTSTANDS" },
  { img: "kitchen.png", title: "KITCHEN FURNITURE" },
]);
</script>
