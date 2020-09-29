<template>
  <div class="body">
    <!-- 顶部菜单 -->
    <top-bar></top-bar>

    <!-- 导航栏 -->
    <tab></tab>

    <!-- 内容 -->
    <div class="content-section">
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
      <div class="placeholder-112px"></div>
      <div class="w-container">
        <div class="title-container">
          <h2 class="heading-2">我创造的产品</h2>
          <h3 class="heading-3">The Products I Created</h3>
        </div>
        <div class="product-container">
          <div class="product-item-container">
            <div class="logo-container">
              <img
                src="@/images/schoolIns_logo.png"
                loading="lazy"
                width="80"
                height="80"
                alt=""
              />
            </div>
            <h4 class="product-name">SchoolIns</h4>
            <p class="product-description">校园模特约拍</p>
            <p class="product-type">微信小程序</p>
          </div>
          <div class="product-item-container">
            <div class="logo-container">
              <img
                src="@/images/hearfresh_wechat_logo.png"
                loading="lazy"
                width="80"
                height="80"
                alt=""
              />
            </div>
            <h4 class="product-name">听鲜</h4>
            <p class="product-description">耳机电商</p>
            <p class="product-type">微信小程序</p>
            <div class="tag-container">
              <div class="tag-item green">
                <div class="tag-name">创业项目</div>
              </div>
            </div>
          </div>
          <div class="product-item-container">
            <div class="logo-container">
              <img
                src="@/images/hearfresh_logo.png"
                loading="lazy"
                width="80"
                height="80"
                alt=""
              />
            </div>
            <h4 class="product-name">听鲜测评室</h4>
            <p class="product-description">耳机自媒体</p>
            <p class="product-type">Bilibili</p>
            <div class="tag-container">
              <div class="tag-item green">
                <div class="tag-name">创业项目</div>
              </div>
            </div>
          </div>
          <div class="product-item-container">
            <div class="logo-container">
              <img
                src="@/images/wish_logo.png"
                loading="lazy"
                width="80"
                height="80"
                alt=""
              />
            </div>
            <h4 class="product-name">心愿部 Club Suprise</h4>
            <p class="product-description">种草电商</p>
            <p class="product-type">微信小程序</p>
          </div>
          <div class="product-item-container">
            <div class="logo-container">
              <img
                src="@/images/ceco_logo.png"
                loading="lazy"
                width="80"
                height="80"
                alt=""
              />
            </div>
            <h4 class="product-name">COEO</h4>
            <p class="product-description">电子名片管理</p>
            <p class="product-type">IOS</p>
          </div>
          <div class="product-item-container">
            <div class="logo-container">
              <img
                src="@/images/timebarrier_logo.png"
                loading="lazy"
                width="80"
                height="80"
                alt=""
              />
            </div>
            <h4 class="product-name">时间壁垒</h4>
            <p class="product-description">时间管理工具</p>
            <p class="product-type">Electron / IOS / Android</p>
            <div class="tag-container">
              <div class="tag-item purple">
                <div class="tag-name">正在进行</div>
              </div>
              <div class="tag-item green">
                <div class="tag-name">创业项目</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
