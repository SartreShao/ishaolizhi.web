<template>
  <div class="tab-section">
    <div class="w-container">
      <div
        data-collapse="small"
        data-animation="default"
        data-duration="400"
        role="banner"
        class="nav-bar w-nav"
      >
        <div class="nav-container w-container">
          <nav role="navigation" class="nav-menu w-nav-menu">
            <a
              href="#"
              class="nav-link w-nav-link"
              :class="{ active: currentRoutePath === '/' }"
              >产品</a
            ><a
              href="#"
              class="nav-link w-nav-link"
              :class="{ active: currentRoutePath === '/thought' }"
              >思想</a
            ><a
              href="#"
              class="nav-link w-nav-link"
              :class="{ active: currentRoutePath === '/about-me' }"
              >关于我</a
            ><a
              href="#"
              class="nav-link w-nav-link"
              :class="{ active: currentRoutePath === '/contact-me' }"
              >联系我</a
            >
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
export default defineComponent({
  setup() {
    const router = useRouter();

    // "/"、"/thought"、"/about-me"、"/contact-me"
    const currentRoutePath = computed(() => {
      return router.currentRoute.value.fullPath;
    });

    return {
      currentRoutePath
    };
  }
});
</script>
