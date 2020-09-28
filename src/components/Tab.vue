<template>
  <div class="tab-section">
    <div class="w-container">
      <div
        data-collapse="none"
        data-animation="default"
        data-duration="400"
        role="banner"
        class="nav-bar w-nav"
      >
        <div class="nav-container w-container">
          <nav role="navigation" class="nav-menu w-nav-menu">
            <div
              class="nav-link w-nav-link"
              :class="{ active: currentRoutePath === '/' }"
              @click="click_product"
            >
              产品
            </div>
            <div
              class="nav-link w-nav-link"
              :class="{ active: currentRoutePath === '/thought' }"
              @click="click_thought"
            >
              思想
            </div>
            <div
              class="nav-link w-nav-link"
              :class="{ active: currentRoutePath === '/about-me' }"
              @click="click_aboutMe"
            >
              关于我
            </div>
            <div
              class="nav-link w-nav-link"
              :class="{ active: currentRoutePath === '/contact-me' }"
              @click="click_contactMe"
            >
              联系我
            </div>
          </nav>
          <div class="w-nav-button">
            <div class="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="segmentation"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { Router } from "@/utils";
export default defineComponent({
  setup() {
    const router = useRouter();

    // "/"、"/thought"、"/about-me"、"/contact-me"
    const currentRoutePath = computed(() => {
      return router.currentRoute.value.fullPath;
    });

    const click_product = () => {
      Router.replace(router, "/");
    };

    const click_thought = () => {
      Router.replace(router, "/thought");
    };

    const click_aboutMe = () => {
      Router.replace(router, "/about-me");
    };

    const click_contactMe = () => {
      Router.replace(router, "/contact-me");
    };

    return {
      currentRoutePath,
      click_product,
      click_thought,
      click_aboutMe,
      click_contactMe
    };
  }
});
</script>
