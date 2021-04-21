<template>
  <div class="slidebg" id="sli">
    <div class="slideshow" id="slideshow" ref="slideshow">
      <div class="grads">
        <div class="arrow_left" @click="slideleft">
          <span class="arrow arrowleft"></span>
        </div>
        <div class="arrow_right" @click="slideright">
          <span class="arrow arrowright"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Slider",
  data() {
    return {
      url: [
        "https://ged-project.de/wp-content/uploads/2019/05/ilya-pavlov-87438-unsplash-e1557383667154.jpg",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6726719ee78dabe78033950d9f3f7145&w=1000&q=80",
        "https://www.digi-talks.dk/wp-content/uploads/2019/03/markus-spiske-221494-unsplash-1000x667.jpg"
      ],
      i: 1,
      slpr: false
    };
  },
  mounted() {
    document.getElementById("sli").style.height = document.documentElement.clientHeight + "px";
  },
  methods: {
    slide(e) {
      this.slpr = true
      if(e) {
        if (this.i < this.url.length - 1) {
          this.i++;
        }
      } else {
        if (this.i > 0) {
          this.i--
        }
      }
      setTimeout(() => {
        this.$refs.slideshow.style.backgroundImage = "url(" + this.url[this.i] + ")";
        this.slpr = false
      }, 500)
    },
    slideright() {
      if (!this.slpr) this.slide(true)
    },
    slideleft() {
      if (!this.slpr) this.slide(false)
    }
  }
};
</script>

<style>
.slideshow {
  height: 100%;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
  background-image: url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6726719ee78dabe78033950d9f3f7145&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.arrow_left,
.arrow_right {
  height: 100%;
  display: flex;
  align-items: center;
  color: antiquewhite;
}
.arrow_left {
  float: left;
  width: calc(50% - 1em);
  margin-left: 1em
}
.arrow_right {
  float: left;
  width: calc(50% - 1em);
  justify-content: flex-end;
  margin-right: 1em
}
.arrow {
  display: inline-block;
  height: 20px;
  width: 20px;
  border-right: 4px solid whitesmoke;
  border-bottom: 4px solid whitesmoke;
  margin: 0.3em;
  transition: 0.6s;
}
.arrow:hover {
  border-color: gray;
}
.arrowleft {
  transform: rotate(135deg);
}
.arrowright {
  transform: rotate(-45deg);
}
.grads {
  height: 100%;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(0,0,0,1) 100%);
}
.slidebg {
  background-color: black;
  height: 100%;
  z-index: -1;
}
</style>
