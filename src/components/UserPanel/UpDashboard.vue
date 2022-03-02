<template>
  <section
    :class="{ 'content-user': true, active: active }"
    :style="{ '--height': height }"
  >
    <div class="content-user__dashboard">
      <div class="content-user__dashboard__head">
        <div class="content-user__dashboard__head__left">
          <div class="content-user__dashboard__head__left__icon">
            <img src="@/assets/svg/info-alert.svg" alt="" />
          </div>
          <div class="content-user__dashboard__head__left__text">
            <span>جهت دریافت نهایی محصول نیاز است احراز هویت نمایید</span>
          </div>
        </div>
        <div class="content-user__dashboard__head__right">
          <span>احراز هویت</span>
        </div>
      </div>
      <div class="content-user__dashboard__condition">
        <div class="row" data-space="20">
          <div class="col-lg-3 col-md-6">
            <div class="content-user__dashboard__condition__item">
              <div class="content-user__dashboard__condition__item__top">
                <img src="@/assets/svg/grammerly.svg" alt="" />
                <span>2</span>
              </div>
              <div class="content-user__dashboard__condition__item__bottom">
                <span>در انتظار بررسی</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="content-user__dashboard__condition__item active">
              <div class="content-user__dashboard__condition__item__top">
                <i class="dn-tick-circle"
                  ><span class="path1"></span><span class="path2"></span
                ></i>
                <span class="color3">10</span>
              </div>
              <div class="content-user__dashboard__condition__item__bottom">
                <span class="color2">تکمیل شده</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="content-user__dashboard__condition__item">
              <div class="content-user__dashboard__condition__item__top">
                <img src="@/assets/svg/finger-circle.svg" alt="" />
                <span class="color">انجام شده</span>
              </div>
              <div class="content-user__dashboard__condition__item__bottom">
                <span>احراز هویت</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="content-user__dashboard__condition__item">
              <div class="content-user__dashboard__condition__item__top">
                <img src="@/assets/svg/dollar-circle.svg" alt="" />
                <span>12</span>
              </div>
              <div class="content-user__dashboard__condition__item__bottom">
                <span>تعداد خرید شما</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-user__dashboard__wrapper">
        <up-dashboard-chart></up-dashboard-chart>
        <up-dashboard-notifications :items="notifs"></up-dashboard-notifications>
      </div>
    </div>
  </section>
</template>
<script>
import UpDashboardChart from "./UpDashboardChart.vue";
import UpDashboardNotifications from "./UpDashboardNotifications.vue";

export default {
  components: { UpDashboardChart, UpDashboardNotifications },
  name: "UpDashboard",

  data() {
    return {
      notifs: [
        "این یک متن آزمایشی است",
        "این یک متن آزمایشی است",
        "این یک متن آزمایشی است",
        "این یک متن آزمایشی است",
        "این یک متن آزمایشی است",
        "این یک متن آزمایشی است",
        "این یک متن آزمایشی است",
        "این یک متن آزمایشی است",
      ],
      height: 0,
    };
  },

  props: ["active"],
};
</script>
