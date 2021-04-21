<template>
  <div style="height: 100%" class="home">
    <Slider></Slider>
    <TheBox
      title="Lorem ipsum"
      txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugit? Cumque, eius officiis laboriosam blanditiis dolor ipsa, nam similique 
      quos doloribus possimus deleniti, hic 
      ducimus a est sunt quibusdam animi!"
      photo="https://apf.mail.ru/cgi-bin/readmsg?id=16062166910873326761;0;44&exif=1&full=1&x-email=gor-margaryan-05%40mail.ru"
      orientation="left"
    ></TheBox>
    <TheBox
      title="Lorem ipsum"
      txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugit? Cumque, eius officiis laboriosam blanditiis dolor ipsa, nam similique 
      quos doloribus possimus deleniti, hic 
      ducimus a est sunt quibusdam animi!"
      photo="https://apf.mail.ru/cgi-bin/readmsg?id=16062166910873326761;0;4&exif=1&full=1&x-email=gor-margaryan-05%40mail.ru"
      orientation="right"
    ></TheBox>
    <TheBox
      title="Lorem ipsum"
      txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugit? Cumque, eius officiis laboriosam blanditiis dolor ipsa, nam similique 
      quos doloribus possimus deleniti, hic 
      ducimus a est sunt quibusdam animi!"
      photo="https://apf.mail.ru/cgi-bin/readmsg?id=16062166910873326761;0;40&exif=1&full=1&x-email=gor-margaryan-05%40mail.ru"
      orientation="left"
    ></TheBox>
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
  }
};
</script>

<style>
.home {
	
}
</style>
