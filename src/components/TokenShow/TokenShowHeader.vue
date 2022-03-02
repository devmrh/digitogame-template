<template>
  <section class="token-header">
    <div class="token-header__wrapper">
      <div class="token-header__wrapper__text">
        <i></i>
        <p>برای فروش توکن خود میتوانید با پشتیبانی تماس حاصل فرمایید</p>
      </div>
      <div class="token-header__wrapper__number">
        <span
          ><small>-{{ code }}</small
          >{{ number }}</span
        >
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "TokenShowHeader",
  props: ["code", "number"],
};
</script>
