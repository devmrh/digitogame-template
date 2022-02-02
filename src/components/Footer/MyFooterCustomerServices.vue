<template>
  <div class="col-lg-3 order-lg-3 col-sm-6">
    <div class="main-footer__wrapper__content__item">
      <div class="main-footer__wrapper__content__item__title">
        <h3>خدمات مشتریان</h3>
      </div>
      <div class="main-footer__wrapper__content__item__list">
        <ul>
          <li><router-link to="faq">پرسش های متداول</router-link></li>
          <li><router-link to="#">حریم خصوصی</router-link></li>
          <li><router-link to="contact-us">تماس با ما</router-link></li>

          <li><router-link to="#">شکایات</router-link></li>
          <li><router-link to="terms">قوانین</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyFooterCustomerServices",
};
</script>
