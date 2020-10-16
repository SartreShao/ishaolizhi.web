<template>
  <div class="tag-item" :style="{ background: tag.attributes.backgroundColor }">
    <div class="tag-name">{{ tag.attributes.name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AV from "leancloud-storage";

export default defineComponent({
  props: {
    tag: AV.Object
  }
});
</script>
