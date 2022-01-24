<template>
  <li>
    <div
      class="contactus__wrapper__list__item"
      :style="{ 'background-color': bgColor, 'border-color': borderColor }"
    >
      <a href="#"></a>
      <div
        class="contactus__wrapper__list__item__icon"
        :style="{ 'background-color': iconColor }"
      >
        <i :class="icon"><span class="path1"></span><span class="path2"></span></i>
      </div>
      <div class="contactus__wrapper__list__item__text" :style="{ color: textColor }">
        <h3>{{ topic }}:</h3>
        <p>{{ text }}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  mounted() {
    console.log(this.icon);
  },
  props: ["bgColor", "borderColor", "iconColor", "textColor", "topic", "text", "icon"],
};
</script>
