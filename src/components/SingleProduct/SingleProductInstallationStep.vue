<template>
  <li>
    <div class="learn-inastallition__wrapper__list__item">
      <div class="learn-inastallition__wrapper__list__item__title">
        <h3 :style="{ color: color }">{{ name }}</h3>
      </div>
      <div class="learn-inastallition__wrapper__list__item__desc" v-html="text"></div>
    </div>
  </li>
</template>
<script>
export default {
  name: "SingleProductInstallationStep",
  props: ["color", "text", "name"],
};
</script>
