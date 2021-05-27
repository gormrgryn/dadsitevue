<template>
  <div :class="'thebox ' + orientation" ref="thebox">
    <div class="bg0">
      <div class="bg" ref="bg">
        <div class="text" :data-aos="aos" data-aos-delay="200">
          <div class="heading" v-text="title"></div>
          <div class="txt" v-text="txt"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default {
  name: "TheBox",
  props: {
    title: String,
    txt: String,
    photo: String,
    orientation: String
  },
  computed: {
    aos() {
      if (this.orientation === "right") {
        return "fade-left";
      } else {
        return "fade-right";
      }
    }
  },
  mounted() {
    let box = this.$refs.thebox
    box.style.height = document.documentElement.clientHeight + "px";
    box.style.backgroundImage = `url(${this.photo})`;
  }
};
</script>

<style scoped>
.thebox {
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden
}
.text > .heading {
  font-size: 70px;
  line-height: 90px;
}
.text > .txt {
  font-size: 20px;
  text-align: inherit;
}
.text {
  width: 60%;
  color: whitesmoke;
  text-align: inherit;
}
.bg {
  height: 100%;
  display: flex;
  align-items: center;
}
.bg0 {
  height: 100%;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0) 45%, rgba(0,0,0,1) 100%);
}

.right .bg {
  padding-right: 5%;
  justify-content: flex-end;
  background: linear-gradient(270deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%);
}
.right .bg > .text {
  text-align: right;
}
.left .bg {
  padding-left: 5%;
  justify-content: flex-start;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%);
}
.left .bg > .text {
  text-align: left;
}

@media screen and (max-width: 768px){
  .bg {
    padding: 0;
  }
}
</style>
