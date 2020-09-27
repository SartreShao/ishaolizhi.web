<template>
  <div class="body">
    <header>
      <div class="container w-container">
        <img src="@/images/logo.svg" loading="lazy" alt="" class="logo" />
        <h1 class="heading-1">我，邵励治</h1>
      </div>
    </header>
    <div class="tab-section">
      <div class="w-container">
        <div
          data-collapse="small"
          data-animation="default"
          data-duration="400"
          role="banner"
          class="nav-bar w-nav"
        >
          <div class="nav-container w-container">
            <nav role="navigation" class="nav-menu w-nav-menu">
              <a href="#" class="nav-link w-nav-link">产品</a
              ><a href="#" class="nav-link w-nav-link">思想</a
              ><a href="#" class="nav-link w-nav-link">关于我</a
              ><a href="#" class="nav-link active w-nav-link">联系我</a>
            </nav>
            <div class="w-nav-button">
              <div class="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="segmentation"></div>
    </div>
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
    <div class="bottom-section">
      <div class="bottom-container w-container">
        <h5 class="heading-5">我，邵励治</h5>
        <div class="copyright">© 2020 我，邵励治版权所有</div>
        <div class="link-container">
          <a href="#" class="bottom-link">关于我</a>
          <div class="bottom-link">｜</div>
          <a href="#" class="bottom-link">联系方式</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
