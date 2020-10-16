<template>
  <div class="body">
    <!-- 顶部菜单 -->
    <top-bar></top-bar>

    <!-- 导航栏 -->
    <tab></tab>

    <!-- 内容 -->
    <div class="content-section">
      <!-- 我的产品基本认知 -->
      <div class="w-container">
        <div class="title-container">
          <h2 class="heading-2">我的产品基本认知</h2>
          <h3 class="heading-3">My Basic Knowledge Of The Product</h3>
        </div>
        <div class="content-container">
          <div class="content-item">
            <h4 class="heading-4">产品是？</h4>
            <p class="paragraph">
              产品是一个媒介，用以承载有利可图的用户价值。
            </p>
          </div>
          <div class="content-item">
            <h4 class="heading-4">产品经理是？</h4>
            <p class="paragraph">
              产品经理是一个职能，其目的为创造出有利可图的用户价值。
            </p>
          </div>
          <div class="content-item">
            <h4 class="heading-4">产品经理的核心工作？</h4>
            <p class="paragraph">需求、生产、销售、协调。</p>
          </div>
          <div class="content-item">
            <h4 class="heading-4">什么是好的产品？</h4>
            <p class="paragraph">
              为用户提供效用（Utility,
              指欲望被满足的程度），为企业带来收益，可持续做到上述两点。
            </p>
          </div>
        </div>
      </div>

      <!-- 分割线 -->
      <div class="placeholder-112px"></div>

      <!-- 我创造的产品 -->
      <div class="w-container">
        <!-- 标题 -->
        <div class="title-container">
          <h2 class="heading-2">我创造的产品</h2>
          <h3 class="heading-3">The Products I Created</h3>
        </div>

        <!-- 产品列表 -->
        <Suspense>
          <template #default>
            <project-list></project-list>
          </template>

          <template #fallback>
            <a-skeleton active></a-skeleton>
          </template>
        </Suspense>
      </div>

      <!-- 分割线 -->
      <div class="placeholder-140px"></div>
    </div>

    <!-- 底部菜单 -->
    <bottom-bar></bottom-bar>
  </div>
</template>

<script lang="ts">
import TopBar from "@/components/TopBar.vue";
import Tab from "@/components/Tab.vue";
import BottomBar from "@/components/BottomBar.vue";
import ProjectList from "./components/ProjectList.vue";
import ContentLoading from "@/components/ContentLoading.vue";
import { Button } from "ant-design-vue";
export default {
  components: { TopBar, Tab, BottomBar, ProjectList }
};
</script>

<style lang="stylus" scoped>
.content-section {
  animation slide-from-bottom 1s
}

@keyframes slide-from-bottom {
  0% {
    opacity 0
    transform translateY(500px)
  }

  100% {
    opacity 1
    transform translateY(0)
  }
}
</style>
