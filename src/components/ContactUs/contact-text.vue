<template>
  <div class="contactus__wrapper__item__text">
    <div class="contactus__wrapper__item__text__title">
      <h3>{{ contactTopic }}</h3>
    </div>
    <div class="contactus__wrapper__item__text__desc">
      <p>{{ contactText }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactText",
  props: ["contactText", "contactTopic"],
};
</script>
