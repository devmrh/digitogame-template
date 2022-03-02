<template>
  <ul id="product-information">
    <li v-for="(item, i) in items" :class="{ color2: item.isPurple }" :key="i">
      <span>{{ item.title }} : </span>
      <span>{{ item.text }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: "UpProductsInformation",
  props: ["items"],
  methods: {
    isPurple() {
      return false;
    },
  },
};
</script>
