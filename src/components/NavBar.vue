<template>
  <v-app-bar color="light-blue" app flat>
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Title</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup></script>

<style lang="scss">
header {
  .v-toolbar__content {
    .v-toolbar-title {
      .v-toolbar-title__placeholder {
        width: fit-content;
      }
    }
  }
}
</style>
