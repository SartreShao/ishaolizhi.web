<template>
  <!-- 时间壁垒 -->
  <div class="product-item-container">
    <div class="logo-container">
      <img
        :src="project.attributes.logo.attributes.url"
        loading="lazy"
        width="80"
        height="80"
        alt=""
      />
    </div>
    <h4 class="product-name">{{ project.attributes.name }}</h4>
    <p class="product-description">{{ project.attributes.description }}</p>
    <p class="product-type">{{ project.attributes.type }}</p>
    <div class="tag-container">
      <TagItem
        v-for="tag in project.attributes.tagListOfProject"
        :key="tag.id"
        :tag="tag"
      ></TagItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AV from "leancloud-storage";
import TagItem from "./TagItem.vue";

export default defineComponent({
  props: {
    project: AV.Object
  },
  components: {
    TagItem
  }
});
</script>
