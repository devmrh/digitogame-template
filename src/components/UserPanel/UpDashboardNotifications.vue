<template>
  <div class="row">
    <div class="col-12 col-xl-3">
      <div
        class="content-user__dashboard__wrapper__sidebar__item content-user__dashboard__wrapper__sidebar__item--padding"
      >
        <div class="content-user__dashboard__wrapper__sidebar__item__background2"></div>
        <div class="content-user__dashboard__wrapper__sidebar__item__notification">
          <div
            class="content-user__dashboard__wrapper__sidebar__item__notification__icon"
          >
            <i class="dn-notification-circle"
              ><span class="path1"></span><span class="path2"></span>
            </i>
          </div>
          <div
            class="content-user__dashboard__wrapper__sidebar__item__notification__text"
          >
            <span>آخرین نوتیفکیشن ها</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-9 col-12">
      <div class="content-user__dashboard__wrapper__content__item">
        <ul>
          <li v-for="(item, i) in items" :key="i">
            <span>{{ item }}</span>
            <i class="dn-icon-top"></i>
            <img src="@/assets/svg/left-arrow.svg" alt="left-arrow" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpDashboardNotifications",
  props: ["items"],
};
</script>
