<template>
  <section class="index-content">
    <div class="container">
      <div class="roow roow--user"><my-header :isUserPanel="true"></my-header></div>
      <div class="row-user">
        <div class="col-sidebar">
          <up-sidebar @change="onChange" :active="activeTab"></up-sidebar>
        </div>
        <div class="col-content">
          <up-dashboard :active="activeTab == 1"></up-dashboard>
          <up-profile
            :active="activeTab == 2"
            :items="profile"
            :inactives="inactives"
          ></up-profile>
          <up-products
            :active="activeTab == 3"
            :items="products"
            :informations="infos"
          ></up-products>
          <up-send-ticket :active="activeTab == 4"></up-send-ticket>
          <up-tickets :active="activeTab == 5" :items="tickets"></up-tickets>
        </div>
      </div>
    </div>
  </section>
  <application></application>
  <my-footer></my-footer>
</template>
<script>
import Application from "../components/Home/application.vue";
import MyHeader from "../components/Header/MyHeader.vue";
import MyFooter from "../components/Footer/MyFooter.vue";
import toolbar from "../components/Toolbar/toolbar.vue";
import UpDashboard from "../components/UserPanel/UpDashboard.vue";
import UpSidebar from "../components/UserPanel/UpSidebar.vue";
import UpProfile from "../components/UserPanel/UpProfile.vue";
import UpProducts from "../components/UserPanel/UpProducts.vue";
import image from "../assets/img/Rectangle1.png";
import image2 from "../assets/img/Rectangle2.png";
import image3 from "../assets/img/Rectangle3.png";
import image4 from "../assets/img/Rectangle4.png";
import UpSendTicket from "../components/UserPanel/UpSendTicket.vue";
import UpTickets from "../components/UserPanel/UpTickets.vue";

export default {
  name: "UserPanel",
  components: {
    toolbar,
    MyHeader,
    MyFooter,
    Application,
    UpDashboard,
    UpSidebar,
    UpProfile,
    UpProducts,
    UpSendTicket,
    UpTickets,
  },
  methods: {
    onChange(i) {
      this.activeTab = i;
    },
  },
  watch: {
    activeTab: function (val) {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    if (this.$route.query.activeTab != undefined) {
      this.activeTab = parseInt(this.$route.query.activeTab);
    }
  },
  data() {
    return {
      activeTab: 1,
      inactives: ["تصویر کارت ملی"],

      profile: [
        {
          title: "نام ونام خانوادگی",
          text: "محمد پادیاب",
        },
        {
          title: "شماره تلفن",
          text: "0990909090",
        },
        {
          title: "ایمیل",
          text: "DigitoGame@gmail.com",
        },
        {
          title: "کد ملی",
          text: "۱۲۳۴۵۶۷۸۹۰",
        },
        {
          title: "وضعیت احراز هویت",
          text: "احراز شده",
          confirmed: false,
        },
      ],
      products: [
        { image: image, alt: "", url: "#", name: "سی دی کی اورجینال بازی گوست رانر" },
        { image: image2, alt: "", url: "#", name: "سی دی کی اورجینال بازی فیفا 22" },
        { image: image3, alt: "", url: "#", name: "سی دی کی اورجینال بازی جی تی ای وی" },
        { image: image4, alt: "", url: "#", name: "سی دی کی اورجینال بازی رد دد 2" },
        { image: image, alt: "", url: "#", name: "سی دی کی اورجینال بازی گوست رانر" },
        { image: image2, alt: "", url: "#", name: "سی دی کی اورجینال بازی فیفا 22" },
        { image: image3, alt: "", url: "#", name: "سی دی کی اورجینال بازی جی تی ای وی" },
        { image: image4, alt: "", url: "#", name: "سی دی کی اورجینال بازی رد دد 2" },
      ],
      infos: [
        [
          {
            title: "عنوان خریداری شده",
            text: "سی دی کی اورجینال بازی گوست رانر",
          },
          {
            title: "مبلغ خرید",
            text: "1,300,000 تومان",
          },
          {
            title: "شماره خرید",
            text: "9877654321",
          },
          {
            title: "نحوه تحویل",
            text: "فوری",
          },
          {
            title: "کد لایسنس",
            text: "93kfd93jf03jsfi0i3ikldg30gidlg30i",
            isPurple: true,
          },
        ],
        [
          {
            title: "عنوان خریداری شده",
            text: "سی دی کی اورجینال بازی فیفا 22",
          },
          {
            title: "مبلغ خرید",
            text: "2,600,000 تومان",
          },
          {
            title: "شماره خرید",
            text: "9877654321",
          },
          {
            title: "نحوه تحویل",
            text: "فوری",
          },
          {
            title: "کد لایسنس",
            text: "93kfd93jf03jsfi0i3ikldg30gidlg30i",
          },
          {
            title: "عنوان خریداری شده",
            text: "سی دی کی اورجینال بازی گوست رانر",
          },
          {
            title: "مبلغ خرید",
            text: "1,300,000 تومان",
          },
          {
            title: "شماره خرید",
            text: "9877654321",
          },
          {
            title: "نحوه تحویل",
            text: "فوری",
          },
          {
            title: "کد لایسنس",
            text: "93kfd93jf03jsfi0i3ikldg30gidlg30i",
            isPurple: true,
          },
        ],
        [
          {
            title: "عنوان خریداری شده",
            text: "سی دی کی اورجینال بازی جی تی ای وی",
          },
          {
            title: "مبلغ خرید",
            text: "1,300,000 تومان",
          },
          {
            title: "شماره خرید",
            text: "9877654321",
          },
          {
            title: "نحوه تحویل",
            text: "فوری",
          },
          {
            title: "کد لایسنس",
            text: "93kfd93jf03jsfi0i3ikldg30gidlg30i",
          },
        ],
        [
          {
            title: "عنوان خریداری شده",
            text: "سی دی کی اورجینال بازی رد دد 2",
          },
          {
            title: "مبلغ خرید",
            text: "2,600,000 تومان",
          },
          {
            title: "شماره خرید",
            text: "9877654321",
          },
          {
            title: "نحوه تحویل",
            text: "فوری",
          },
          {
            title: "کد لایسنس",
            text: "93kfd93jf03jsfi0i3ikldg30gidlg30i",
          },
        ],
        [
          {
            title: "عنوان خریداری شده",
            text: "سی دی کی اورجینال بازی گوست رانر",
          },
          {
            title: "مبلغ خرید",
            text: "1,300,000 تومان",
          },
          {
            title: "شماره خرید",
            text: "9877654321",
          },
          {
            title: "نحوه تحویل",
            text: "فوری",
          },
          {
            title: "کد لایسنس",
            text: "93kfd93jf03jsfi0i3ikldg30gidlg30i",
          },
        ],
        [
          {
            title: "عنوان خریداری شده",
            text: "سی دی کی اورجینال بازی فیفا 22",
          },
          {
            title: "مبلغ خرید",
            text: "2,600,000 تومان",
          },
          {
            title: "شماره خرید",
            text: "9877654321",
          },
          {
            title: "نحوه تحویل",
            text: "فوری",
          },
          {
            title: "کد لایسنس",
            text: "93kfd93jf03jsfi0i3ikldg30gidlg30i",
          },
        ],
        [
          {
            title: "عنوان خریداری شده",
            text: "سی دی کی اورجینال بازی جی تی ای وی",
          },
          {
            title: "مبلغ خرید",
            text: "1,300,000 تومان",
          },
          {
            title: "شماره خرید",
            text: "9877654321",
          },
          {
            title: "نحوه تحویل",
            text: "فوری",
          },
          {
            title: "کد لایسنس",
            text: "93kfd93jf03jsfi0i3ikldg30gidlg30i",
          },
        ],
        [
          {
            title: "عنوان خریداری شده",
            text: "سی دی کی اورجینال بازی رد دد 2",
          },
          {
            title: "مبلغ خرید",
            text: "2,600,000 تومان",
          },
          {
            title: "شماره خرید",
            text: "9877654321",
          },
          {
            title: "نحوه تحویل",
            text: "فوری",
          },
          {
            title: "کد لایسنس",
            text: "93kfd93jf03jsfi0i3ikldg30gidlg30i",
          },
        ],
      ],
      tickets: [
        {
          text: "این یک متن آزمایشی برای عنوان یک تیکت است",
          number: "91238",
          status: 1,
          date: "1 آذر 1400",
        },
        {
          text: "این یک متن آزمایشی برای عنوان یک تیکت است",
          number: "91238",
          status: 2,
          date: "1 آذر 1400",
        },
        {
          text: "این یک متن آزمایشی برای عنوان یک تیکت است",
          number: "91238",
          status: 3,
          date: "1 آذر 1400",
        },
        {
          text: "این یک متن آزمایشی برای عنوان یک تیکت است",
          number: "91238",
          status: 1,
          date: "1 آذر 1400",
        },

        {
          text: "این یک متن آزمایشی برای عنوان یک تیکت است",
          number: "91238",
          status: 1,
          date: "1 آذر 1400",
        },
        {
          text: "این یک متن آزمایشی برای عنوان یک تیکت است",
          number: "91238",
          status: 2,
          date: "1 آذر 1400",
        },
        {
          text: "این یک متن آزمایشی برای عنوان یک تیکت است",
          number: "91238",
          status: 3,
          date: "1 آذر 1400",
        },
        {
          text: "این یک متن آزمایشی برای عنوان یک تیکت است",
          number: "91238",
          status: 1,
          date: "1 آذر 1400",
        },
      ],
    };
  },
};
</script>
,
<style scoped>
.index-content {
  margin-bottom: 70px;
}
</style>
