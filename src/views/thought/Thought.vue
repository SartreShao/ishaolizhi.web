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
          <div class="form-block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              class="form"
            >
              <input
                type="text"
                class="search w-input"
                maxlength="256"
                name="name"
                data-name="Name"
                placeholder="搜索"
                id="name"
              />
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <div class="archer-container">
            <div class="archer-list">
              <div class="archer-item active">我的价值观</div>
              <div class="archer-item">Web 前端</div>
              <div class="archer-item">服务器</div>
              <div class="archer-item">桌面开发</div>
              <div class="archer-item">Android</div>
              <div class="archer-item">人工智能</div>
              <div class="archer-item">持续集成</div>
              <div class="archer-item">业余创作的搞笑小说</div>
            </div>
            <div class="placeholder"></div>
          </div>
        </div>
        <div id="w-node-fdc7e3a69a10-de2fa91b" class="left-container">
          <div class="title-container">
            <h2 class="heading-2">我的价值观</h2>
            <h3 class="heading-3">My Values</h3>
          </div>
          <div class="content-container">
            <div class="content-item">
              <h4 class="heading-4">如何对抗虚无主义？</h4>
              <p class="content-description">宗教？还是存在主义？</p>
            </div>
            <div class="content-item">
              <h4 class="heading-4">加缪的《局外人》表达了什么思想？</h4>
              <p class="content-description">宗教？还是存在主义？</p>
            </div>
            <div class="content-item">
              <h4 class="heading-4">《存在主义是一种人道主义》不负责分析</h4>
              <p class="content-description">存在先于本质</p>
            </div>
          </div>
          <div class="placeholder-112px"></div>
          <div class="title-container">
            <h2 class="heading-2">我的价值观</h2>
            <h3 class="heading-3">My Values</h3>
          </div>
          <div class="content-container">
            <div class="content-item">
              <h4 class="heading-4">如何对抗虚无主义？</h4>
              <p class="content-description">宗教？还是存在主义？</p>
            </div>
            <div class="content-item">
              <h4 class="heading-4">加缪的《局外人》表达了什么思想？</h4>
              <p class="content-description">宗教？还是存在主义？</p>
            </div>
            <div class="content-item">
              <h4 class="heading-4">《存在主义是一种人道主义》不负责分析</h4>
              <p class="content-description">存在先于本质</p>
            </div>
          </div>
          <div class="placeholder-112px"></div>
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
import { defineComponent } from "vue";
import { Article } from "@/api";
export default defineComponent({
  components: { TopBar, Tab, BottomBar },
  setup() {
    Article.fetchArticleList();
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
