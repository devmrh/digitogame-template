<template>
  <section class="">
    <div class="container">
      <div class="roow">
        <div class="cool-toolbar"><toolbar></toolbar></div>
        <div class="cool-content">
          <my-header class="inview"></my-header>
          <div class="roow-sidebar roow-sidebar">
            <div class="cool-context-cart">
              <cart-products :items="products"></cart-products>
            </div>
            <div class="cool-sidebar-cart"><cart-sidebar></cart-sidebar></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <application></application>
  <my-footer></my-footer>
</template>
<script>
import Application from "../components/Home/application.vue";
import MyHeader from "../components/Header/my-header.vue";
import MyFooter from "../components/Footer/MyFooter.vue";
import toolbar from "../components/Toolbar/toolbar.vue";
import CartProducts from "../components/Cart/CartProducts.vue";
import CartSidebar from "../components/Cart/CartSidebar.vue";
export default {
  name: "Cart",

  components: { toolbar, MyHeader, MyFooter, Application, CartProducts, CartSidebar },
  data() {
    return {
      products: [
        {
          name: "سی دی کی بتلفید 2042 نسخه آلتیمیت ادیتیشن",
          console: "کامپیوتر",
          count: 2,
          price: 2000000,
          productCount: 2,
        },
        {
          name: "سی دی کی بتلفید 2042 نسخه آلتیمیت ادیتیشن",
          console: "کامپیوتر",
          count: 2,
          price: 2000000,
          off: 50,
          productCount: 1,
        },
      ],
    };
  },
};
</script>
