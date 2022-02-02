<template>
  <li>
    <span
      :style="{
        '--color': color,
        '--shadow': shadowColor,
        '--rotate': id % 2 == 0 ? 0 : '-70deg',
      }"
    ></span>
    <h3>{{ name }}</h3>
  </li>
</template>
<script>
export default {
  name: "SingeProductSingleProperty",
  props: ["name", "id", "color", "shadowColor"],
};
</script>
<style scoped>
span {
  background-color: var(--color);
  box-shadow: var(--shadow) 0px 10px 45px 10px;
  transform: rotate(var(--rotate)) !important;
}
</style>
