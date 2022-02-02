<template>
  <h3>{{ title }}</h3>
  <p v-for="(item, i) in text" :key="i">
    {{ item }}
  </p>
</template>

<script>
export default {
  name: "SingleProductSingleCaption",
  props: ["title", "text"],
};
</script>
