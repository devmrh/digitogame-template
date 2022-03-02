<template>
  <section class="">
    <div class="container">
      <div class="roow">
        <div class="cool-toolbar"><toolbar></toolbar></div>
        <div class="cool-content">
          <my-header></my-header>
          <div class="roow-sidebar roow-sidebar--mt60">
            <div class="cool-sidebar-list">
              <single-product-sidebar></single-product-sidebar>
            </div>
            <div class="cool-context">
              <single-product-gallery :gallery="gallery"></single-product-gallery>
              <single-product-properties
                :items="properties"
                class="inview"
              ></single-product-properties>
              <single-product-caption
                :items="descriptions"
                class="inview"
              ></single-product-caption>
              <single-product-installation
                :items="installation"
                class="inview"
              ></single-product-installation>
              <single-product-required-system
                :items="requires"
                class="inview"
              ></single-product-required-system>
              <single-product-comments
                :items="comments"
              ></single-product-comments>
            </div>
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
import MyHeader from "../components/Header/MyHeader.vue";
import MyFooter from "../components/Footer/MyFooter.vue";
import toolbar from "../components/Toolbar/toolbar.vue";
import InnerContact from "../components/ContactUs/innerContact.vue";
import SingleProductSidebar from "../components/SingleProduct/SingleProductSidebar.vue";
import SingleProductGallery from "../components/SingleProduct/SingleProductGallery.vue";
import image1 from "../assets/img/gallery1.png";
import image2 from "../assets/img/gallery2.png";
import image3 from "../assets/img/gallery3.png";
import image4 from "../assets/img/gallery4.png";
import image5 from "../assets/img/gallery5.png";
import avatar from "../assets/img/avatar6.png";
import imageshow from "../assets/img/show-gallery1.png";
import SingleProductProperties from "../components/SingleProduct/SingleProductProperties.vue";
import SingleProductCaption from "../components/SingleProduct/SingleProductCaption.vue";
import SingleProductInstallation from "../components/SingleProduct/SingleProductInstallation.vue";
import SingleProductRequiredSystem from "../components/SingleProduct/SingleProductRequiredSystem.vue";
import SingleProductComments from "../components/SingleProduct/SingleProductComments.vue";

export default {
  name: "SingleProduct",
  components: {
    toolbar,
    MyHeader,
    MyFooter,
    Application,
    InnerContact,
    SingleProductSidebar,
    SingleProductGallery,
    SingleProductProperties,
    SingleProductCaption,
    SingleProductInstallation,
    SingleProductRequiredSystem,
    SingleProductComments,
  },
  data() {
    return {
      gallery: [
        { image: imageshow, thumb: image1, alt: "" },
        { image: imageshow, thumb: image2, alt: "" },
        { image: imageshow, thumb: image3, alt: "" },
        { image: imageshow, thumb: image4, alt: "" },
        { image: imageshow, thumb: image5, alt: "" },
        { image: imageshow, thumb: image1, alt: "" },
        { image: imageshow, thumb: image2, alt: "" },
        { image: imageshow, thumb: image3, alt: "" },
        { image: imageshow, thumb: image4, alt: "" },
        { image: imageshow, thumb: image5, alt: "" },
      ],
      properties: [
        {
          name: "ویژگی شماره ۱ محصول",
          color: "#00FFD1",
          shadowColor: "#00ff8526",
        },
        {
          name: "ویژگی شماره 2 محصول",
          color: "#FD6B63",
          shadowColor: "#fb214933",
        },
        {
          name: "ویژگی شماره 3 محصول",
          color: "#2E6FD7",
          shadowColor: "#1a1aff26",
        },
        {
          name: "ویژگی شماره 4 محصول",
          color: "#A16AEF",
          shadowColor: "#a16aef26",
        },
        {
          name: "ویژگی شماره 5 محصول",
          color: "#FFC42C",
          shadowColor: "#ff862e26",
        },
        {
          name: "ویژگی شماره 2 محصول",
          color: "#FFFFFF",
          shadowColor: "#ffffff33",
        },
      ],
      descriptions: [
        {
          title: "سی دی کی بازی BATTLEFIELD 2042 Origin CD Key",
          text: [
            "با خرید این محصول، سی دی کی BATTLEFIELD 2042 Origin CD Key برای شما به صورت ایمیل ارسال می شود. ضمنا شما می توانید از پروفایل خود بخش سفارش ها، سی دی کی (کد فعالسازی) خریداری شده را مشاهده کنید.",
          ],
        },
        {
          title: "درباره بازی BATTLEFIELD 2042 Origin CD Key بیشتر بدانیم",
          text: [
            "Battlefield 2042، یک بازی شوتر اول شخص بوده که بازگشت جنگ‌های بزرگ این فرنچایز محبوب را رقم می‌زند. در آینده‌ای نه چندان دور، دنیا به دلیل بی‌قانونی مطلق تغییر کرده است. با کمک تیم و استفاده از انبار اسلحه‌ی خود، با میدان‌های جنگی متغیر آشنا شوید و به آنها غلبه کنید.",
            "با حمایت از 128 بازیکن به صورت همزمان، Battlefield 2042 مقیاس جنگی بی‌نظیری را به میدان‌های جنگی وسیع می‌آورد. بازیکنان بخش‌های مختلفی همچون؛ نسخه‌ی پیشرفته‌ی بخش Conquest و Breakout را تجربه می‌کنند. بخش Battlefield Portal؛ یک پلتفورم جدید جامعه‌مدار که اجازه‌ی خلق، اشتراک و اکتشاف نبرد‌های غیرمنتظره از گذشته، حال و آینده‌ی Battlefield را به بازیکنان خود می‌دهد. بخش Battlefield Hazard Zone؛ تجربه‌ی بقای گروهی و سخت که در آن هر گلوله، هر مبارزه و هر تصمیم از اهمیت والایی برخوردار است. در یک تجربه‌ی باارزش بقا، پشت خط‌های دشمن اعزام شوید تا اطلاعات مهم را استخراج کنید.",
          ],
        },
        {
          title: "سی دی کی بازی BATTLEFIELD 2042 Origin CD Key",
          text: [
            "قوانین و قواعد جنگ را عوض کرده و نبردهای غیرمنتظره‌ی جهان Battlefield را تجربه کنید. عناوین کلاسیکی همچون؛ Battlefield 1942، Battlefield Bad Company 2 و Battlefield 3 را دوباره بازی کنید.یا اینکه در نقشه‌های خاطره‌ساز آنها، با محتوا و انبار اسلحه‌ی مدرن Battlefield 2042، خاطرات جدیدی برای خود بسازید.",
          ],
        },
        {
          title: "به دنیایی متفاوت خوش آمدید",
          text: [
            "آمریکا و روسیه با جنگ فاصله‌ی چندانی ندارند. جنگ‌های نیابتی ده‌ها سال است که شروع شده‌اند. واقعه‌ای که باعث پدید آمدن سربازان باتجربه اما آواره شده است. این متخصصان از مهارت خود برای تغییر آینده استفاده می‌کنند. آینده‌ای که ارزش مبارزه داشته باشد.",
          ],
        },
      ],
      installation: [
        {
          name: "مرحله ی اول",
          text:
            '<p>از <a href="#">این لینک </a> نرم افزار اوریجین را دانلود کرده و نصب کنید</p>',
          color: "#00FFD1",
        },
        {
          name: "مرحله ی دوم",
          text: "<p>وارد اکانت خود شوید. )اگر اکانت ندارید، بسازید(</p>",
          color: "#20A1FF",
        },
        {
          name: "مرحله ی سوم",
          text: "<p>از منوی Origin دست چپ بالا، روی Redeem Product Code… کلیک کنید.</p>",
          color: "#FD6B63",
        },
        {
          name: "مرحله ی چهارم",
          text:
            " <p>سپس سی دی کی که از ما دریافت کرده اید را وارد کنید.</p>" +
            "<p>حال میتوانید از بخش My Games بازی خود را دانلود و نصب کنید.</p>",
          color: "#9346FF",
        },
      ],
      requires: [
        {
          name: "سی پی یو",
          englishName: "CPU",
          desc: "2.0 GHz Intel Pentium 4",
        },
        {
          name: "رم",
          englishName: "RAM",
          desc: "256 MB",
        },
        {
          name: "جی پی یو",
          englishName: "GPU",
          desc: "3D-graphics adapter with 256 MB of memory",
        },
        {
          name: "حافظه",
          englishName: "STORAGE",
          desc: "3 GB",
        },
      ],
      comments: [
        {
          comment:
            "این یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست است ",
          name: "محمد پادیاب",
          date: "یک ماه پیش",
          avatar: avatar,
          like: 0,
          dislike: 0,
          replies: [
            {
              comment:
                "این یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست است ",
              name: "محمد پادیاب",
              date: "یک ماه پیش",
              avatar: avatar,
              like: 0,
              dislike: 0,
            },
          ],
        },
        {
          comment:
            "این یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست است ",
          name: "محمد پادیاب",
          date: "یک ماه پیش",
          avatar: avatar,
          like: 5,
          dislike: 6,
          replies: [
            {
              comment:
                "این یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست است ",
              name: "محمد پادیاب",
              date: "یک ماه پیش",
              avatar: avatar,
              like: 5,
              dislike: 6,
            },
          ],
        },
        {
          comment:
            "این یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست است ",
          name: "محمد پادیاب",
          date: "یک ماه پیش",
          avatar: avatar,
          like: 2,
          dislike: 3,
          replies: [],
        },
      ],
    };
  },
};
</script>
