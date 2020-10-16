<script lang="ts">
import ContentLoading from "./ContentLoading.vue";

export default {
  components: {
    ContentLoading
  }
};
</script>

<template>
  <content-loading :width="300" :height="100">
    <circle cx="30" cy="30" r="30" />
    <rect x="75" y="13" rx="4" ry="4" width="100" height="15" />
    <rect x="75" y="37" rx="4" ry="4" width="50" height="10" />
  </content-loading>
</template>
