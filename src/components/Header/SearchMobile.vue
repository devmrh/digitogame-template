<template>
  <div
    class="search-mobile"
    data-toggle="showbox"
    data-target="search"
    :data-status="active"
  >
    <div data-toggle="closebox" @click="this.$emit('close')" data-target="search"></div>
    <div class="search-mobile__search">
      <form>
        <input type="text" name="" v-model="text" @keyup="this.$emit('change', text)" />
        <button @click.prevent="this.$emit('search')">
          <i class="dn-search"><span class="path1"></span><span class="path2"></span></i>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchMobile",
  props: ["active"],
  data() {
    return {
      text: "",
    };
  },
  emits: ["close", "change", "search"],
};
</script>
