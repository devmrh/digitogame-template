<template>
  <section class="contactus">
    <div class="contactus__wrapper">
      <div class="roow">
        <div class="cool-3">
          <div class="contactus__wrapper__list">
            <ul>
              <contact-cart
                v-for="(item, i) in items"
                :key="i"
                :bgColor="item.bgColor"
                :borderColor="item.borderColor"
                :iconColor="item.iconColor"
                :topic="item.topic"
                :text="item.text"
                :textColor="item.textColor"
                :icon="item.icon"
              ></contact-cart>
            </ul>
          </div>
        </div>
        <div class="cool-9">
          <div class="contactus__wrapper__item">
            <contact-text :contactText="contactText"></contact-text>
            <contact-form :name="name" @inputChanged="onInputChanged"></contact-form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import contactCart from "./contact-cart.vue";
import ContactForm from "./contact-form.vue";
import ContactText from "./contact-text.vue";
export default {
  components: { contactCart, ContactText, ContactForm },
  name: "innerContact",
  methods: {
    onInputChanged: function (data) {
      if (data.name == "name") {
        this.name = data.text;
      } else if (data.name == "email") {
        this.email = data.text;
      } else if (data.name == "ticketText") {
        this.ticketText = data.text;
      }
    },
  },
  data() {
    return {
      name: "",
      email: "",
      ticketText: "",
      contactText:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده" +
        " از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و" +
        "سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای" +
        "متنوع با هدف بهبود",
      items: [
        {
          bgColor: "#00ffd1",
          borderColor: "#00ffd1",
          iconColor: "#131129",
          textColor: "",
          icon: "dn-location",
          topic: "آدرس",
          text: "تهران-خ فاطمه غربی – پلاک ۴۵۲",
        },
        {
          bgColor: "",
          borderColor: "#ffcd6b",
          iconColor: "#ffcd6b",
          icon: "dn-email",
          topic: "ایمیل",
          text: "mpadyabm@gmail.com",
          textColor: "#ffcd6b",
        },
        {
          bgColor: "",
          borderColor: "#d5a0ff",
          iconColor: "#d5a0ff",
          icon: "dn-call",
          topic: "تلفن",
          text: "۰۹۱۲۰۷۴۴۰۹۷ – ۰۹۱۹۴۱۰۹۵۶۶",
          textColor: "#d5a0ff",
        },
        {
          bgColor: "",
          borderColor: "#fd6b63",
          iconColor: "#fd6b63",
          icon: "dn-timer",
          topic: "ساعت کاری",
          text: "از 8 صبح تا 9 شب",
          textColor: "#fd6b63",
        },
      ],
    };
  },
};
</script>
