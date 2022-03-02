<template>
  <section class="content-user active">
    <div class="content-user__conversation">
      <div class="content-user__conversation__head">
        <div class="content-user__conversation__head__right">
          <div class="content-user__conversation__head__right__icon">
            <i class="dn-message-circle"
              ><span class="path1"></span><span class="path2"></span
            ></i>
          </div>
          <div class="content-user__conversation__head__right__text">
            <span>این یک متن آزمایشی برای عنوان یک تیکت است</span>
          </div>
        </div>
        <div class="content-user__conversation__head__left">
          <div class="content-user__conversation__head__left__date">
            <span>1 آذر 1400</span>
          </div>
          <div class="content-user__conversation__head__left__btn">
            <span>پاسخ داده شده</span>
          </div>
        </div>
      </div>
      <up-ticket-open-single
        v-for="(item, i) in items"
        :key="i"
        :isAdmin="item.isAdmin"
        :name="item.name"
        :profile="item.profile"
        :text="item.text"
        :time="item.time"
      ></up-ticket-open-single>
    </div>
    <div class="content-user__conversation__item__ask">
      <input type="text" placeholder="متن خود را وارد کنید" v-model="text" />
      <img src="@/assets/svg/send.svg" @click="onSend" height="24" width="24" />
    </div>
  </section>
</template>
<script>
import UpTicketOpenSingle from "./UpTicketOpenSingle.vue";
import image1 from "../../assets/img/Ellipse2.png";
import image2 from "../../assets/img/Ellipse1.png";
export default {
  components: { UpTicketOpenSingle },
  name: "UpTicketOpen",
  data() {
    return {
      text: "",
      items: [
        {
          profile: image2,
          name: "شما",
          time: "01 : 10 بعد از ظهر ",
          text: "این یک متن آزمایشی برای عنوان یک تیکت است",
          isAdmin: false,
        },
        {
          profile: image2,

          name: "شما",
          time: "01 : 10 بعد از ظهر ",
          text: "این یک متن آزمایشی برای عنوان یک تیکت است",
          isAdmin: false,
        },
        {
          profile: image1,
          name: "اپراتور شماره 1",
          time: "01 : 10 بعد از ظهر ",
          text: "این یک متن آزمایشی برای عنوان یک تیکت است",
          isAdmin: true,
        },
        {
          profile: image1,
          name: "اپراتور شماره 1",
          time: "01 : 10 بعد از ظهر ",
          text: "این یک متن آزمایشی برای عنوان یک تیکت است",
          isAdmin: true,
        },
      ],
    };
  },
  mounted() {
    document.getElementsByClassName("content-user__conversation")[0].scroll({
      bottom: 0,
      behavior: "smooth",
    });
  },
  methods: {
    onSend() {
      console.log(this.text);
    },
  },
};
</script>

<style scoped>
.content-user__conversation__item__ask {
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  line-height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 34px;
  padding-right: 20px;
}
.content-user__conversation__item__ask img {
  cursor: pointer;
}
.content-user__conversation__item__ask input {
  border: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.5);
  flex: 0 0 calc(100% - 18px);
  max-width: calc(100% - 18px);
  border-radius: 0 12px 12px 0;
  font-weight: 300;
  font-size: 17px;
}
</style>
