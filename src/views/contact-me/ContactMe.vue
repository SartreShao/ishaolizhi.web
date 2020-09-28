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
          <h2 class="heading-2">联系我</h2>
          <h3 class="heading-3">Contact Me</h3>
        </div>
        <div class="content-container">
          <div class="content-item">
            <h4 class="heading-4">如果您有如下目标，欢迎来联系我</h4>
            <p class="paragraph">
              1. 成熟企业，正在招聘可靠的产品经理<br />2.
              初创企业，正在寻找可靠的技术合伙人（CTO）<br />3.
              传统企业，正在寻找可靠的外包团队（业务合作）<br />4.
              投资人，正在寻找可靠的被投资方
            </p>
          </div>
          <div class="content-item">
            <h4 class="heading-4">我的联系方式</h4>
            <p class="paragraph">
              邮箱：shaolizhi@tipchou.com<br />微信：SartreShao
            </p>
          </div>
          <div class="content-item">
            <h4 class="heading-4">或是？单纯的想聊聊天？</h4>
            <div class="contact-form w-form">
              <form id="email-form" name="email-form" data-name="Email Form">
                <input
                  type="text"
                  class="input w-input"
                  maxlength="256"
                  name="name"
                  data-name="Name"
                  placeholder="姓名"
                  id="name"
                /><input
                  type="email"
                  class="input w-input"
                  maxlength="256"
                  name="email"
                  data-name="Email"
                  placeholder="邮箱"
                  id="email"
                /><textarea
                  placeholder="聊点什么？"
                  maxlength="5000"
                  id="field"
                  name="field"
                  class="input-area w-input"
                ></textarea
                ><input
                  type="submit"
                  value="发送"
                  data-wait="Please wait..."
                  class="submit-button w-button"
                />
              </form>
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
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
