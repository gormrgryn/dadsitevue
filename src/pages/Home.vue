<template>
  <div class="home">
    <Slider></Slider>
    <TheBox v-for="i in arr" :key="i.title" :title="i.title" :txt="i.txt" :orientation="i.orientation" :photo="i.photo"></TheBox>
  </div>
</template>

<script>
import Slider from "@/components/Slider";
import TheBox from "@/components/TheBox";

export default {
  name: "App",
  components: {
    Slider,
    TheBox
  },
  data() {
    return {
      arr: [
        {
          title: 'Lorem ipsum',
          txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugit? Cumque, eius officiis laboriosam blanditiis dolor ipsa, nam similique quos doloribus possimus deleniti, hic ducimus a est sunt quibusdam animi!',
          photo: 'https://apf.mail.ru/cgi-bin/readmsg?id=16062166910873326761;0;40&exif=1&full=1&x-email=gor-margaryan-05%40mail.ru',
          orientation: 'left'
        }
      ]
    }
  }
};
// 
</script>

<style>
.home {
	height: 100vh;
}
</style>
