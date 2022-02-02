<template>
  <section class="index-content">
    <div class="container">
      <div class="roow">
        <div class="cool-toolbar"><toolbar></toolbar></div>
        <div class="cool-content">
          <my-header class="inview"></my-header>
          <section class="screen">
            <div class="screen__background">
              <img :src="image" alt="" />
            </div>
            <div class="screen__content">
              <purchase-keys :keys="keys" :success="success"></purchase-keys>
              <purchase-details :items="details"></purchase-details>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Toolbar from "../components/Toolbar/toolbar.vue";
import MyFooter from "../components/Footer/MyFooter.vue";
import MyHeader from "../components/Header/my-header.vue";
import Application from "../components/Home/application.vue";
import image from "../assets/img/Pic.png";
import PurchaseKeys from "../components/PurchaseScreen/purchase-keys.vue";
import PurchaseDetails from "../components/PurchaseScreen/purchase-details.vue";

export default {
  name: "Purchase",
  components: {
    Toolbar,
    MyFooter,
    MyHeader,
    Application,
    PurchaseKeys,
    PurchaseDetails,
  },
  mounted() {
    if (this.$route.query.success == "false") {
      this.keys = [];
      this.success = false;
    }
  },
  data() {
    return {
      image: image,
      keys: [
        "93kfd93jf03jsfi0i3ikldg30gidlg30i",
        "93kfd93jf03jsfi0i3ikldg30gidlg30i",
        "93kfd93jf03jsfi0i3ikldg30gidlg30i",
      ],
      success: true,
      details: [
        {
          topic: "عناوین خریدار ی شده",
          text: "سی دی کی گوست رانر سی دی کی بتفیلد 2042 سی دی کی جی تی ای",
          isStressed: false,
        },
        {
          topic: "مبلغ خرید",
          text: "6,000,000 تومان",
          isStressed: false,
        },
        {
          topic: "شماره خرید",
          text: "412483290",
          isStressed: false,
        },
        {
          topic: "زمان تحویل",
          text: "فوری",
          isStressed: false,
        },
        {
          topic: "توجه",
          text: "تمامی کدهای خریداری شده شما در پنل کاربری در دسترس است",
          isStressed: true,
        },
      ],
    };
  },
};
</script>
