<template>
  <div class="roow__total-content__pagination">
    <section class="pagination">
      <div class="pagination__wrapper">
        <ul>
          <li v-for="i in count" :key="i">
            <a href="#" v-if="active != i" @click.prevent="pageChanged(i)">{{ i }}</a>
            <span v-else>{{ i }}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: ["count", "active"],
  emits: ["pageChanged"],
  methods: {
    pageChanged(id) {
      this.$emit("pageChanged", id);
    },
  },
};
</script>
<style scoped>
span {
  cursor: pointer;
}
</style>
