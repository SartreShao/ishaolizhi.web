<template>
  <div class="body">
    <!-- 顶部菜单 -->
    <top-bar></top-bar>

    <!-- 导航栏 -->
    <tab></tab>

    <!-- 内容 -->
    <div class="content-section">
      <div class="horizontal-container w-container">
        <div class="right-container">
          <!-- 目录 -->
          <div class="archer-container" style="position:sticky;top:85.5px;">
            <div class="archer-list">
              <div
                class="archer-item"
                v-for="(articleDirectory, index) in articleDirectoryList"
                :class="{ active: currentIndex === index }"
                :key="articleDirectory.id"
                @click="click_articleDirectory(articleDirectory, index)"
              >
                {{ articleDirectory.attributes.chineseName }}
              </div>
            </div>
            <div class="placeholder"></div>
          </div>
        </div>

        <!-- 文章列表 -->
        <div id="w-node-fdc7e3a69a10-de2fa91b" class="left-container">
          <div
            v-for="articleDirectory in articleDirectoryList"
            :key="articleDirectory.id"
          >
            <div class="title-container">
              <h2 class="heading-2">
                {{ articleDirectory.attributes.chineseName }}
              </h2>
              <h3 class="heading-3">
                {{ articleDirectory.attributes.englishName }}
              </h3>
            </div>

            <div class="content-container" :id="`a` + articleDirectory.id">
              <div
                style="cursor: pointer;"
                class="content-item"
                v-for="article in articleDirectory.attributes
                  .articleListOfArticleDirectory"
                :key="article.id"
                @click="click_article(article)"
              >
                <h4 class="heading-4">{{ article.attributes.title }}</h4>
                <p class="content-description">
                  {{ article.attributes.subTitle }}
                </p>
              </div>
            </div>

            <div class="placeholder-112px"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部菜单 -->
    <bottom-bar></bottom-bar>
  </div>
</template>

<script lang="ts">
import TopBar from "@/components/TopBar.vue";
import Tab from "@/components/Tab.vue";
import BottomBar from "@/components/BottomBar.vue";
import { defineComponent, Ref, ref } from "vue";
import { ThoughtPage } from "@/viewmodel";
import AV from "leancloud-storage";

export default defineComponent({
  components: { TopBar, Tab, BottomBar },
  setup() {
    const articleDirectoryList: Ref<AV.Object[]> = ref([]);

    const click_article = (article: AV.Object) => {
      window.open(article.attributes.href, "_blank");
    };

    const currentIndex = ref(0);

    const click_articleDirectory = (
      articleDirectory: AV.Object,
      index: number
    ) => {
      const element = document.querySelector("#a" + articleDirectory.id);
      currentIndex.value = index;
      if (element !== null) {
        console.log("element", element);
        element.scrollIntoView(true);
        window.scrollBy({ top: -148, behavior: "smooth" });
      }
    };

    ThoughtPage.init(articleDirectoryList);

    return {
      articleDirectoryList,
      click_article,
      click_articleDirectory,
      currentIndex
    };
  }
});
</script>

<style lang="stylus" scoped>
.right-container {
  animation slide-from-right 1s
}

.left-container {
  animation slide-from-left 1s
}

@keyframes slide-from-right {
  0% {
    opacity 0
    transform translateY(500px)
  }

  100% {
    opacity 1
    transform translateY(0)
  }
}

@keyframes slide-from-left {
  0% {
    opacity 0
    transform translateX(-500px)
  }

  100% {
    opacity 1
    transform translateX(0)
  }
}
</style>
