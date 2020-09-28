<template>
  <div class="bottom-section">
    <div class="bottom-container w-container">
      <h5 class="heading-5">我，邵励治</h5>
      <div class="copyright">© 2020 我，邵励治版权所有</div>
      <div class="link-container">
        <a class="bottom-link" @click="click_aboutMe">关于我</a>
        <div class="bottom-link">｜</div>
        <a class="bottom-link" @click="click_contactMe">联系方式</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Router } from "@/utils";
export default defineComponent({
  setup() {
    const router = useRouter();

    const click_aboutMe = () => {
      Router.replace(router, "/about-me");
    };

    const click_contactMe = () => {
      Router.replace(router, "/contact-me");
    };

    return {
      click_aboutMe,
      click_contactMe
    };
  }
});
</script>
