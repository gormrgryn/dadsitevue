<template>
  <div class="slideshow" ref="slide">
    <div class="grad">
      <span class="arrow arrowleft" @click="slideleft"></span>
      <span class="titletxt">More money more problems, idgaf i keep a revolver</span>
      <span class="arrow arrowright" @click="slideright"></span>
    </div>
  </div>
</template>

<script>
import { LinkedList } from "../assets/list.js";
export default {
  name: "Slider",
  data() {
    return {
      urls: [
        "https://ged-project.de/wp-content/uploads/2019/05/ilya-pavlov-87438-unsplash-e1557383667154.jpg",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6726719ee78dabe78033950d9f3f7145&w=1000&q=80",
        "https://www.digi-talks.dk/wp-content/uploads/2019/03/markus-spiske-221494-unsplash-1000x667.jpg"
      ],
      proc: false,
      list: new LinkedList(),
      i: null
    };
  },
  mounted() {
    this.$data.urls.forEach(j => {
      this.$data.list.add(j);
    });
    this.$data.i = this.$data.list.head;
    this.slide();
  },
  methods: {
    slide() {
      if (this.$route.name === "Home" && this.$refs.slide) {
        if (!this.$data.proc) {
          if (this.$data.i.next) {
            this.$data.i = this.$data.i.next;
          } else {
            this.$data.i = this.$data.list.head;
          }
          this.$refs.slide.style.backgroundImage = `url('${
            this.$data.i.element
          }')`;
        }
        setTimeout(this.slide, 5000);
      }
    },
    swipe(j) {
      if (!this.$data.proc) {
        this.$data.proc = true;
        if (j === "left") {
          this.$data.i = this.$data.i.prev
            ? this.$data.i.prev
            : this.$data.list.tail;
        } else if (j === "right") {
          this.$data.i = this.$data.i.next
            ? this.$data.i.next
            : this.$data.list.head;
        }
        this.$refs.slide.style.backgroundImage = `url('${
          this.$data.i.element
        }')`;
        setTimeout(() => (this.$data.proc = false), 700);
      }
    },
    slideleft() {
      this.swipe("left");
    },
    slideright() {
      this.swipe("right");
    }
  }
};
</script>

<style>
.slideshow {
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.4s;
}
.grad {
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 0.5em;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(94,94,94,0.2) 50%, rgba(255,255,255,0) 100%)
}
.titletxt {
  font-size: 1.5em;
  text-align: center;
}
.arrow {
  display: inline-block;
  height: 20px;
  width: 20px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
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

@media screen and (max-width: 576px) {
  .titletxt {
    font-size: 1em;
  }
}
</style>
