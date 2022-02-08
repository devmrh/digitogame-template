<template>
  <div class="sec-title__timer">
    <span id="timer" data-countdown="2022-1-30 22:30:15">
      <div class="div">
        <span>{{ tSeconds }}</span
        ><span>ثانیه</span>
      </div>
      <div class="div">
        <span>{{ tMinutes }}</span
        ><span>دقیقه</span>
      </div>
      <div class="div">
        <span>{{ tHours }}</span
        ><span>ساعت</span>
      </div>
      <div class="div">
        <span>{{ tDays }}</span
        ><span>روز</span>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "CountdownTimer",
  props: ["seconds"],
  data() {
    return {
      tSeconds: 0,
      tMinutes: 0,
      tHours: 0,
      tDays: 0,
    };
  },
  methods: {
    countDownTimer: function () {
      if (this.mySec > 0) {
        setTimeout(() => {
          this.mySec--;
          this.tDays = parseInt(this.mySec / 86400);
          this.tSeconds = this.mySec % 60;
          this.tHours = parseInt((this.mySec / 3600) % 24);
          this.tMinutes = parseInt((this.mySec / 60) % 60);
          this.countDownTimer();
        }, 1000);
      }
    },
  },
  mounted() {
    this.mySec = this.seconds;
    this.countDownTimer();
  },
};
</script>
