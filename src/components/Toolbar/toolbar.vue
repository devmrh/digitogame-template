<template>
  <section class="toolbar">
    <div class="toolbar__wrapper">
      <div class="toolbar__wrapper__logo">
        <router-link to="/"
          ><i class="dn-tv"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span><span class="path4"></span
            ><span class="path5"></span><span class="path6"></span
            ><span class="path7"></span></i
        ></router-link>
      </div>
      <ul>
        <li :class="{ content: true, active: isActive }">
          <a href="#" @click.prevent="clickOnContent"
            ><i class="dn-category"
              ><span class="path1"></span><span class="path2"></span
              ><span class="path3"></span><span class="path4"></span> </i
          ></a>
        </li>
        <li>
          <router-link to="token-show"
            ><i class="dn-favorite-chart"
              ><span class="path1"></span><span class="path2"></span
              ><span class="path3"></span><span class="path4"></span></i
          ></router-link>
        </li>
        <li>
          <router-link to="blogs"
            ><i class="dn-book"
              ><span class="path1"></span><span class="path2"></span
              ><span class="path3"></span><span class="path4"></span></i
          ></router-link>
        </li>
        <li>
          <router-link to="#"
            ><i class="dn-headphone"
              ><span class="path1"></span><span class="path2"></span
              ><span class="path3"></span></i
          ></router-link>
        </li>
        <li>
          <router-link to="#"
            ><i class="dn-strongbox"
              ><span class="path1"></span><span class="path2"></span
              ><span class="path3"></span></i
          ></router-link>
        </li>
      </ul>
    </div>
  </section>
  <toolbar-content v-on:swiper="setSwiper"></toolbar-content>
</template>

<script>
import toolbarContent from "./toolbar-content.vue";

export default {
  components: { toolbarContent },

  name: "Toolbar",
  data() {
    return {
      swiper: undefined,
      isActive: false,
      isClosing: false,
      inviewElement: undefined,
      toolbarHtml: "",
      lastScroll: 0,
      scrolling: false,
      scrollTimeout: undefined,
    };
  },
  mounted() {
    setInterval(() => {
      this.isClosing = false;
      document.getElementsByTagName("body")[0].style.overflow = "visible";
    }, 1000);
    this.lastScroll = document.documentElement.scrollTop;
    this.toolbarHtml = document.getElementById("toolbar-content");
    document.getElementById("toolbar-content").remove();
    this.isOnScreen();
  },
  created() {
    this.isOnScreen();
    window.addEventListener("scroll", this.isOnScreen);
    window.addEventListener("scroll", () => {
      let mVue = this;

      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(function () {
        mVue.scrolling = false;
      }, 310);
    });
  },
  methods: {
    setSwiper: function (swiper) {
      this.swiper = swiper;
    },
    clickOnContent: function (e) {
      if (this.isClosing) {
        return;
      }
      this.isClosing = true;
      this.isActive = !this.isActive;

      if (!this.isActive) {
        let toolbar = document.getElementById("toolbar-content");
        toolbar.style.height = 0;
        toolbar.style.paddingBottom = 0;
        setTimeout(() => {
          toolbar.remove();
          this.isClosing = false;
        }, 300);
      } else {
        this.inviewElement.before(this.toolbarHtml);
        let toolbar = document.getElementById("toolbar-content");
        toolbar.style.height = `${toolbar.scrollHeight + 50}px`;
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        setTimeout(() => {
          toolbar.style.paddingBottom = "50px";
          document.getElementsByTagName("body")[0].style.overflow = "visible";
          this.isClosing = false;
          this.swiper.update();
          this.swiper.slideTo(0, 200, () => {});
          toolbar.scrollIntoView({ behavior: "smooth" });
        }, 300);

        this.scrolling = true;
      }
    },

    isOnScreen: function () {
      let mVue = this;
      let winHeight = document.documentElement.scrollTop;
      let scrollDown = this.lastScroll < winHeight;
      let elements = document.getElementsByClassName("inview");
      let currentToolbar = document.getElementsByClassName("toolbar-content");
      if (currentToolbar.length > 0) {
        currentToolbar = currentToolbar[0];
        let curtop = currentToolbar.offsetTop + currentToolbar.offsetHeight;
        if (
          document.documentElement.scrollTop > curtop + 300 ||
          document.documentElement.scrollTop < currentToolbar.offsetTop - 300
        ) {
          console.log(this.scrolling);
          if (!mVue.scrolling) {
            console.log(curtop);
            this.isClosing = true;
            this.isActive = false;
            currentToolbar.style.height = 0;
            currentToolbar.style.paddingBottom = 0;
            setTimeout(() => {
              currentToolbar.remove();
              mVue.isClosing = false;
            }, 300);
          }
        }
      }
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let curtop = element.offsetTop + element.offsetHeight;
        if (curtop > winHeight) {
          this.inviewElement = element;
          break;
        }
      }
    },
  },
};
</script>
<style scoped>
[class^="dn-"] {
  font-size: 30px;
}
</style>
