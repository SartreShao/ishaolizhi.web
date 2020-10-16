<template>
  <div class="body">
    <!-- 顶部菜单 -->
    <top-bar></top-bar>

    <!-- 导航栏 -->
    <tab></tab>

    <!-- 内容 -->
    <div class="content-section">
      <Suspense>
        <template #default>
          <ArticleList></ArticleList>
        </template>

        <template #fallback>
          <a-skeleton active></a-skeleton>
        </template>
      </Suspense>

      <div class="placeholder-112px"></div>
    </div>

    <!-- 底部菜单 -->
    <bottom-bar></bottom-bar>
  </div>
</template>

<script lang="ts">
import TopBar from "@/components/TopBar.vue";
import Tab from "@/components/Tab.vue";
import BottomBar from "@/components/BottomBar.vue";
import ArticleList from "./components/ArticleList.vue";

export default {
  components: { TopBar, Tab, BottomBar, ArticleList }
};
</script>
