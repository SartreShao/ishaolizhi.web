import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_Y23nF7awV1rSW4ASUVTP55d1_S10eN4",
  authDomain: "ishaolizhi-46df5.firebaseapp.com",
  databaseURL: "https://ishaolizhi-46df5.firebaseio.com",
  projectId: "ishaolizhi-46df5",
  storageBucket: "ishaolizhi-46df5.appspot.com",
  messagingSenderId: "34578154077",
  appId: "1:34578154077:web:8663eb18c28780c55a83b4",
  measurementId: "G-PD61DD0YB8"
};

firebase.initializeApp(firebaseConfig);

router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

createApp(App)
  .use(router)
  .mount("#app");
