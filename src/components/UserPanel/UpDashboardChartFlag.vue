<template>
  <div
    :class="{
      'content-user__dashboard__wrapper__sidebar__item__changes-chart__banner__item': true,
      active: active,
    }"
  >
    <img :src="image" :alt="alt" />
  </div>
</template>
<script>
export default {
  name: "UpDashboardChartFlag",
  props: ["active", "image", "alt"],
};
</script>
