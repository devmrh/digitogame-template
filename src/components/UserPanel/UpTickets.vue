<template>
  <section :class="{ 'content-user': true, active: active }">
    <div class="content-user__wrapper">
      <div
        v-if="!isTicketShowing && Object.keys(this.items).length > 0"
        class="row"
        data-space="20"
      >
        <up-tickets-single
          v-for="(item, i) in items"
          :key="i"
          :date="item.date"
          :number="item.number"
          :status="item.status"
          :text="item.text"
        ></up-tickets-single>
      </div>
      <up-products-empty
        v-if="Object.keys(this.items).length <= 0"
        btnText="ارسال تیکت"
        text="شما هنوز هیچ تیکتی نزدید"
        url="/user-panel?activeTab=4"
        @click="reload"
      ></up-products-empty>
      <up-ticket-open v-if="isTicketShowing"></up-ticket-open>
    </div>
  </section>
</template>
<script>
import UpProductsEmpty from "./UpProductsEmpty.vue";
import UpTicketOpen from "./UpTicketOpen.vue";
import UpTicketsSingle from "./UpTicketsSingle.vue";
export default {
  components: { UpTicketsSingle, UpProductsEmpty, UpTicketOpen },
  name: "UpTickets",
  props: { active: { default: false }, items: { default: [] } },
  mounted() {
    if (this.$route.query.ticketId != undefined) {
      this.isTicketShowing = true;
    }
  },
  methods: {
    reload() {
      window.location.reload();
    },
  },
  data() {
    return {
      isTicketShowing: false,
    };
  },
};
</script>
