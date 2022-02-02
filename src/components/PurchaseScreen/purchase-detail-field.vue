<template>
  <li>
    <span>{{ topic }} :</span>
    <span :style="{ color: isStressed ? '#309cff' : '' }">{{ text }}</span>
  </li>
</template>
<script>
export default {
  name: "PurchaseDetailField",
  props: ["topic", "text", "isStressed"],
};
</script>
