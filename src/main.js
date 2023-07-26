import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
createApp(App).use(store).use(vuetify).use(router).mount("#app");
