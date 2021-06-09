<template>
  <div class="home">
    <Slider></Slider>
    <TheBox v-for="i in arr" :key="i.title" :title="i.title" :txt="i.txt" :orientation="i.orientation" :photo="i.photo"></TheBox>
    <Footer></Footer>
  </div>
</template>

<script>
import Slider from "@/components/Slider";
import TheBox from "@/components/TheBox";
import Footer from '@/components/Footer'

export default {
  name: "App",
  components: {
    Slider,
    TheBox,
    Footer
  },
  data() {
    return {
      arr: [
        {
          title: 'Lorem ipsum',
          txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugit? Cumque, eius officiis laboriosam blanditiis dolor ipsa, nam similique quos doloribus possimus deleniti, hic ducimus a est sunt quibusdam animi!',
          photo: "https://ged-project.de/wp-content/uploads/2019/05/ilya-pavlov-87438-unsplash-e1557383667154.jpg",
          orientation: 'left'
        },
        {
          title: 'Lorem ipsum',
          txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugit? Cumque, eius officiis laboriosam blanditiis dolor ipsa, nam similique quos doloribus possimus deleniti, hic ducimus a est sunt quibusdam animi!',
          photo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6726719ee78dabe78033950d9f3f7145&w=1000&q=80",
          orientation: 'right'
        }
      ]
    }
  }
};
</script>

<style>
.home {
	height: 100vh;
}
</style>
