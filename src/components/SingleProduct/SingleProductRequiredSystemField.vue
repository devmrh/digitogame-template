<template>
  <li>
    <div class="required-system__wrapper__list__item">
      <div class="required-system__wrapper__list__item__title">
        <h3>{{ name }}</h3>
        <span>{{ englishName }}</span>
      </div>
      <div class="required-system__wrapper__list__item__detail">
        <p>{{ desc }}</p>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: "SingleProductRequiredSystemField",
  props: ["englishName", "name", "desc"],
};
</script>
<style scoped>
.required-system__wrapper__list__item__title{
  min-width: 100px;
}
</style>
