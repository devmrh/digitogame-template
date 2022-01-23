<template>
  <section class="toolbar">
    <div class="toolbar__wrapper">
      <div class="toolbar__wrapper__logo">
        <router-link to="#"
          ><i class="dn-tv"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span><span class="path4"></span
            ><span class="path5"></span><span class="path6"></span
            ><span class="path7"></span></i
        ></router-link>
      </div>
      <ul>
        <li :class="{ content: true, active: isActive }">
          <router-link to="#" @click="clickOnContent"
            ><i class="dn-category"
              ><span class="path1"></span><span class="path2"></span
              ><span class="path3"></span><span class="path4"></span> </i
          ></router-link>
        </li>
        <li>
          <router-link to="#"
            ><i class="dn-favorite-chart"
              ><span class="path1"></span><span class="path2"></span
              ><span class="path3"></span><span class="path4"></span></i
          ></router-link>
        </li>
        <li>
          <router-link to="#"
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
    };
  },
  mounted() {
    this.lastScroll = document.documentElement.scrollTop;
    this.toolbarHtml = document.getElementById("toolbar-content");
    document.getElementById("toolbar-content").remove();
    this.isOnScreen();
  },
  created() {
    this.isOnScreen();
    window.addEventListener("scroll", this.isOnScreen);
  },
  methods: {
    setSwiper: function (swiper) {
      this.swiper = swiper;
    },
    clickOnContent: function (e) {
      e.preventDefault();
      if (this.isClosing) {
        return;
      }

      this.isClosing = true;

      let toolbar = document.getElementById("toolbar-content");
      this.isActive = !this.isActive;
      if (!this.isActive) {
        toolbar.style.height = 0;
        toolbar.style.paddingBottom = 0;
        setTimeout(() => {
          toolbar.remove();
          this.isClosing = false;
        }, 300);
      } else {
        this.inviewElement.after(this.toolbarHtml);
        toolbar = document.getElementById("toolbar-content");
        toolbar.style.height = `${toolbar.scrollHeight + 50}px`;
        setTimeout(() => {
          toolbar.style.paddingBottom = "50px";
          this.isClosing = false;
          this.swiper.update();
          this.swiper.slideTo(0, 200, ()=>{});
        }, 300);
      }
    },

    isOnScreen: function () {
      let winHeight = document.documentElement.scrollTop;
      let scrollDown = this.lastScroll < winHeight;
      let elements = document.getElementsByClassName("inview");
      let mVue = this;
      let currentToolbar = document.getElementsByClassName("toolbar-content");
      if (currentToolbar.length > 0) {
        currentToolbar = currentToolbar[0];
        let curtop = currentToolbar.offsetTop + currentToolbar.offsetHeight;
        console.log(
          `winHeight is : ${winHeight},curTop is : ${currentToolbar.offsetHeight} , offtop : ${currentToolbar.offsetTop}`
        );
        if (
          (winHeight > 1000 &&
            winHeight < currentToolbar.offsetTop - currentToolbar.offsetHeight - 100 &&
            !scrollDown) ||
          curtop < winHeight
        ) {
          this.isClosing = true;

          mVue.isActive = false;
          currentToolbar.style.height = 0;
          currentToolbar.style.paddingBottom = 0;
          setTimeout(() => {
            currentToolbar.remove();
            this.isClosing = false;
          }, 300);
        }
      }
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let curtop = element.offsetTop + element.offsetHeight;
        if (curtop > winHeight) {
          mVue.inviewElement = element;

          break;
        }
      }
    },
  },
};
</script>
