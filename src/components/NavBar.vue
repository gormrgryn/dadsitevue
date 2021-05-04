<template>
  <div class="navbar" ref="nav">
    <h2>
      <router-link to="/">sitename</router-link>
    </h2>
    <ul class="navlist">
      <li>
        <a href="https://facebook.com" class="fb">Facebook</a>
      </li>
      <li>
        <a href="https://instagram.com" class="ig">Instagram</a>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  created() {
    window.addEventListener("scroll", this.onscroll);
  },
  methods: {
    onscroll() {
      let y = window.scrollY;
      let height = document.documentElement.offsetHeight;
      if (y > height) {
        this.$refs.nav.classList = "navbar";
        this.$refs.nav.classList.add("str", "bgh");
      } else if (y < height) {
        this.$refs.nav.classList = "navbar";
        this.$refs.nav.classList.add("trans");
      }
    }
  }
};
</script>
<style>
.navbar {
  height: 5em;
  padding: 0 2em;
  line-height: 5em;
  width: calc(100% - 4em);
  color: whitesmoke;
  z-index: 1;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1em;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  /* background-color: rgb(220,220,220, 0.05) */
}
.trans {
  background: none;
}
.str {
  background: black;
}
.bgh {
  height: 4em;
}
.navbar > h2 {
  width: 20%;
  display: inline-block;
  margin: 0;
}
.navbar > ul {
  margin: 0;
  list-style: none;
  display: inline-flex;
  justify-content: space-around;
  position: relative;
  left: 2em;
  align-items: center;
  float: left;
  width: 50%;
}
a {
  text-decoration: none;
  color: whitesmoke;
}
.fb {
  text-align: center;
  background: linear-gradient(to right, #fff 20%, royalblue 40%, royalblue 60%, #fff 80%);
  background-size: 200% auto;
  background-position-x: -50%;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.2s ease
}
.fb:hover {
  background-position-x: 50%
}
.ig {
  text-align: center;
  background: linear-gradient(90deg, #fff 20%, #fdf497 30%, #fd5949 40%,#d6249f 50%,#285AEB 60%, #fff 80%);
  background-size: 200% auto;
  background-position-x: -50%;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.2s ease
}
.ig:hover {
  background-position-x: 50%
}
</style>
