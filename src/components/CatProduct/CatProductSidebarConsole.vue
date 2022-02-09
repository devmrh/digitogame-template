<template>
  <div class="cat-product-sidebar__wrapper__item">
    <div class="cat-product-sidebar__wrapper__item__title">
      <h3>دسته بندی</h3>
    </div>
    <div class="cat-product-sidebar__wrapper__item__category">
      <ul>
        <li
          v-for="(item, i) in items"
          :key="i"
          :style="{ '--first-color': item.colors[0], '--sec-color': item.colors[1] }"
        >
          <a href="#">
            <img :src="item.image" alt="" />
            <span> {{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CatProductFilterConsole",
  props: ["items"],
};
</script>
