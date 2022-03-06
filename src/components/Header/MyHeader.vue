<template>
  <div
    class="modal-notification__background"
    :style="{ opacity: notifActive ? '0.95' : '0', 'z-index': notifActive ? 5 : -5 }"
    @click="toggleNotif"
  ></div>

  <header :class="{ 'main-header': true, 'main-header--user': isUserPanel }" id="top">
    <div class="main-header__wrapper">
      <div class="main-header__wrapper__login">
        <router-link to="login">
          <img src="@/assets/img/avator.png" alt="" />
          <p>ورود یا ثبت نام</p>
        </router-link>
      </div>
      <div class="main-header__wrapper__notification">
        <notifications-modal :active="notifActive"></notifications-modal>

        <a href="#" @click.prevent="toggleNotif"
          ><i class="dn-notification"
            ><span class="path1"></span><span class="path2"></span></i
        ></a>
      </div>
      <div class="main-header__wrapper__search">
        <form>
          <input type="text" placeholder="دنبال چیزی هستید؟" v-model="searchPhrase" />
          <button @click.prevent="search">
            <i class="dn-search"
              ><span class="path1"></span><span class="path2"></span
            ></i>
          </button>
        </form>
        <a href="#" @click.prevent="searchMobileActive = true"
          ><i class="dn-search"><span class="path1"></span><span class="path2"></span></i
        ></a>
      </div>
      <div class="main-header__wrapper__cart">
        <router-link to="cart"
          ><i class="dn-cart"><span class="path1"></span><span class="path2"></span></i
        ></router-link>
        <span style="cursor: pointer" @click="cart">5</span>
      </div>
    </div>
  </header>
  <search-mobile
    :active="searchMobileActive"
    @close="searchMobileActive = false"
    @change="onChange"
    @search="search"
  ></search-mobile>
</template>

<script>
import NotificationsModal from "./NotificationsModal.vue";
import SearchMobile from "./SearchMobile.vue";
export default {
  components: { NotificationsModal, SearchMobile },
  name: "MyHeader",
  props: { isUserPanel: { default: false } },
  data() {
    return {
      searchPhrase: "",
      notifActive: false,
      searchMobileActive: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onChange(i) {
      this.searchPhrase = i;
    },
    toggleNotif() {
      this.notifActive = !this.notifActive;
    },
    onScroll() {
      this.notifActive = false;
    },
    search() {
      this.searchMobileActive = false;
      this.$router.push({
        path: "search-result?phrase",
        query: { phrase: this.searchPhrase },
      });
      this.searchPhrase = "";
    },
    cart() {
      this.$router.push({
        path: "cart",
      });
    },
  },
};
</script>
