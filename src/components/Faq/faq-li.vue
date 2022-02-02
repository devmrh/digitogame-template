<template>
  <li>
    <div :class="{ 'faq-content__wrapper__item': true, active: isActive }">
      <div class="faq-content__wrapper__item__title">
        <h3>{{ topic }}</h3>
        <i class="dn-arrow-down"
          ><span class="path1"></span><span class="path2"></span
        ></i>
      </div>
      <div class="faq-content__wrapper__item__desc">
        <p>
          {{ text }}
        </p>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: "FaqLi",
  props: ["topic", "text", "isActive"],
};
</script>
