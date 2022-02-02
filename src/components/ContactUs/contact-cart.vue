<template>
  <li>
    <div
      class="contactus__wrapper__list__item"
      :style="{ 'background-color': isActive ? color : '', 'border-color': color }"
    >
      <a href="#"></a>
      <div
        class="contactus__wrapper__list__item__icon"
        :style="{
          'background-color': isActive ? '#131129' : color,
        }"
      >
        <i :class="icon"
          ><span
            class="path1"
            :style="{
              '--color': !isActive ? '#131129' : color,
            }"
          ></span
          ><span
            class="path2"
            :style="{
              '--color': !isActive ? '#131129' : color,
            }"
          ></span
        ></i>
      </div>
      <div
        class="contactus__wrapper__list__item__text"
        :style="{ color: isActive ? '#131129' : color }"
      >
        <h3>{{ topic }}:</h3>
        <p>{{ text }}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["isActive", "color", "topic", "text", "icon"],
};
</script>
<style scoped>
li {
  cursor: pointer;
}
li div {
  transition: all 0.3s;
}
.path1::before,
.path2::before {
  transition: all 0.3s;

  color: var(--color) !important;
}
</style>
