<template>
  <div class="col-lg-3 col-md-4 col-12">
    <div
      :class="{
        'content-user__wrapper__answer': true,
        'content-user__wrapper__answer--closed': status == 3,
      }"
      @click="openTicket"
    >
      <div class="content-user__wrapper__answer__top">
        <div class="content-user__wrapper__answer__top__icon">
          <i class="dn-msg"><span class="path1"></span><span class="path2"></span></i>
        </div>
        <div class="content-user__wrapper__answer__top__btn">
          <span>{{ number }}</span>
          <span v-if="status == 1" class="content-user__wrapper__answer__top__btn__status"
            >در انتظار پاسخ</span
          >
          <span
            v-else-if="status == 2"
            class="content-user__wrapper__answer__top__btn__status content-user__wrapper__answer__top__btn__status--answered"
          >
            پاسخ داده شده
          </span>
          <span
            v-else
            class="content-user__wrapper__answer__top__btn__status content-user__wrapper__answer__top__btn__status--closed"
          >
            بسته شده
          </span>
        </div>
      </div>
      <div class="content-user__wrapper__answer__text">
        <p>{{ text }}</p>
      </div>
      <div class="content-user__wrapper__answer__date">
        <span>{{ date }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpTicketsSingle",
  props: ["date", "text", "status", "number"],
  methods: {
    openTicket() {
      let routeData = this.$router.resolve({
        name: "UserPanel",
        query: { activeTab: "5", ticketId: "4" },
      });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>
<style scoped></style>
