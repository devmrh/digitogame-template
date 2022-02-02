<template>
  <div class="main-footer__wrapper__copyright">
    <div class="main-footer__wrapper__copyright__text">
      <i class="dn-copyright"></i>
      <p>تمامی حقوق برای وبسایت ووجی شاپ محفوظ است و کپی به هرشکل پیگرد قانونی دارد.</p>
    </div>
    <div class="main-footer__wrapper__copyright__back-up">
      <a href="#" @click.prevent="scrollToTop"
        ><i class="dn-arrow-up"
          ><span class="path1"></span><span class="path2"></span
          ><span class="path3"></span></i
      ></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyFooterCopyRight",
  methods: {
    scrollToTop: function () {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
