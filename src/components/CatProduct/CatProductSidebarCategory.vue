<template>
  <div class="cat-product-sidebar__wrapper__item">
    <div class="cat-product-sidebar__wrapper__item__title">
      <h3>فیلتر بر اساس سبک بازی</h3>
    </div>
    <div class="cat-product-sidebar__wrapper__item__list">
      <ul>
        <li v-for="(item, i) in items" :key="i" :count="item.count" :name="item.name">
          <a href="#"
            ><span>{{ item.name }}</span
            ><span>{{ item.count }} عنوان</span></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CatProductSidebarCategory",
  props: ["items"],
};
</script>
