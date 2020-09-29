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
          <img src="@/images/avatar.png" loading="lazy" alt="" class="image" />
        </div>
        <div id="w-node-2346d51a4fc5-05bfb67f" class="left-container">
          <div class="title-container">
            <h2 class="heading-2">关于我</h2>
            <h3 class="heading-3">About Me</h3>
          </div>
          <div class="content-container">
            <div class="content-item">
              <h4 class="heading-4">地理位置？</h4>
              <p class="paragraph">长于北京，本科北京工业大学，现居海淀。</p>
            </div>
            <div class="content-item">
              <h4 class="heading-4">现在做什么？</h4>
              <p class="paragraph">
                在自己的公司做产品经理 +
                全栈工程师，平时采需求，设计，编码，现在在孵化「时间壁垒」App。
              </p>
            </div>
            <div class="content-item">
              <h4 class="heading-4">十年后的目标？</h4>
              <p class="paragraph">
                特别希望可以亲手做出一款成功的产品，长期为用户带来价值，同时为企业带来收益。
              </p>
            </div>
            <div class="content-item">
              <h4 class="heading-4">为何创业？</h4>
              <p class="paragraph">
                核心理由是喜欢创造性工作，创业过程中，我的创造性可以得到最大限度的发挥。次要理由是北京房价很贵，而创业是一条上限很高的路，我愿意给自己一个机会。
              </p>
            </div>
          </div>
          <div class="contact-container">
            <div class="contact-line">
              <div class="download-link">简历下载</div>
              <div class="contact-placeholder"></div>
              <div class="download-link">时间壁垒 BP 下载</div>
            </div>
            <div class="contact-line">
              <div class="contact-info">
                微信：SartreShao·Email: shaolizhi@tipchou.com
              </div>
            </div>
            <div class="contact-line">
              <div class="contact-info">知乎：</div>
              <div class="download-link">@邵励治</div>
              <div class="contact-info">·</div>
              <div class="download-link">联系我</div>
            </div>
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
import { defineComponent, watch, computed } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: { TopBar, Tab, BottomBar }
});
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
