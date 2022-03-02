<template>
  <div :class="{ 'modal-notification': true, active: active }">
    <div class="modal-notification__wrapper">
      <ul>
        <li v-for="i in 4" :key="i">
          <a href="#">
            <p>
              <img src="@/assets/img/msg-notif.svg" alt="" />
              <img src="@/assets/img/msg-notif2.svg" alt="" />
              این یک اعلان آزمایشی است
            </p>
            <img src="@/assets/img/icon-left.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotificationsModal",
  props: ["active"],
};
</script>
