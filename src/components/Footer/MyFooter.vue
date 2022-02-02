<template>
  <footer class="main-footer">
    <div class="container">
      <div class="main-footer__wrapper">
        <div class="main-footer__wrapper__content">
          <div class="row">
            <my-footer-customer-guide></my-footer-customer-guide>
            <my-footer-customer-services></my-footer-customer-services>
            <my-footer-about></my-footer-about>
            <my-footer-enamad :items="items"></my-footer-enamad>
          </div>
        </div>
      <my-footer-copy-right></my-footer-copy-right>
      </div>
    </div>
  </footer>
</template>

<script>
import MyFooterEnamad from "./MyFooterEnamad.vue";
import image from "../../assets/img/nemad.png";
import MyFooterCustomerServices from "./MyFooterCustomerServices.vue";
import MyFooterAbout from "./MyFooterAbout.vue";
import MyFooterCustomerGuide from "./MyFooterCustomerGuide.vue";
import MyFooterCopyRight from './MyFooterCopyRight.vue';

export default {
  components: {
    MyFooterEnamad,
    MyFooterCustomerServices,
    MyFooterAbout,
    MyFooterCustomerGuide,
    MyFooterCopyRight,
  },

  data() {
    return {
      items: [
        { alt: "", image: image },
        { alt: "", image: image },
        { alt: "", image: image },
      ],
    };
  },
};
</script>
