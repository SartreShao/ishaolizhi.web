<template>
  <!-- 产品列表 -->
  <div class="product-container">
    <project-item
      v-for="project in projectList"
      :key="project.id"
      :project="project"
    ></project-item>
  </div>
</template>

<script lang="ts">
import ProjectItem from "./ProjectItem.vue";
import { Ref, ref } from "vue";
import AV from "leancloud-storage";
import { ProductPage } from "@/viewmodel";
import { Time } from "@/utils";
export default {
  components: { ProjectItem },
  async setup() {
    const projectList: Ref<AV.Object[]> = ref([]);

    await ProductPage.fetchProjectList(projectList);

    return {
      projectList
    };
  }
};
</script>
