<template>
  <div
    :class="{
      'content-user__conversation__item': true,
      'content-user__conversation__item--left': isAdmin,
    }"
  >
    <div class="content-user__conversation__item__question">
      <div class="content-user__conversation__item__question__head">
        <img :src="profile" alt="" />
        <div class="content-user__conversation__item__question__head__text">
          <span>{{ name }}</span>
          <span>{{ time }}</span>
        </div>
      </div>
      <div class="content-user__conversation__item__question__text">
        <span>{{ text }}</span>
      </div>
    </div>
    <div class="content-user__conversation__item__ask"></div>
  </div>
</template>
<script>
export default {
  name: "UpTicketOpenSingle",
  props: ["text", "time", "name", "profile", "isAdmin"],
};
</script>
