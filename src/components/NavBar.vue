<template>
  <div>
    <div class="navbar" ref="nav">
      <h2>
        <router-link to="/">sitename</router-link>
      </h2>
      <ul class="navlist" ref="list">
        <li class="icon">
          <a href="https://facebook.com" class="fb">Facebook</a>
        </li>
        <li class="icon">
          <a href="https://instagram.com" class="ig">Instagram</a>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
    <div class="burger" ref="burger">
      <input type="checkbox" v-model="check">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="menu" ref="menu">
      <ul>
        <li>
          <a href="https://facebook.com" class="fb">Facebook</a>
        </li>
        <li>
          <a href="https://instagram.com" class="ig">Instagram</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      check: false
    };
  },
  watch: {
    check() {
      if (this.check) {
        document.body.style.overflowY = 'hidden'
        this.$refs.menu.classList = "menu visible"
        window.scrollTo(0, 0)
      }
      else {
        document.body.style.overflowY = ''
        this.$refs.menu.classList = "menu"
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.onscroll);
  },
  methods: {
    onscroll() {
      let y = window.scrollY;
      let height = document.documentElement.offsetHeight;
      if (y > height) {
        this.$refs.nav.classList = "navbar str";
        this.$refs.burger.style.display = "none";
      } else if (y < height) {
        this.$refs.nav.classList = "navbar trans";
        this.$refs.burger.style.display = "block";
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
  width: 100%;
  color: whitesmoke;
  z-index: 2;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1em;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.trans {
  background: none;
}
.str {
  background: rgba(0, 0, 0, 0.97);
  height: 4em;
}
.navbar > h1 {
  width: 20%;
  display: inline-block;
  margin: 0;
  font-size: 1.5em;
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
  background: linear-gradient(
    to right,
    #fff 20%,
    royalblue 40%,
    royalblue 60%,
    #fff 80%
  );
  background-size: 200% auto;
  background-position-x: -50%;
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.2s ease;
}
.fb:hover {
  background-position-x: 50%;
}
.ig {
  text-align: center;
  background: linear-gradient(
    90deg,
    #fff 20%,
    #fdf497 30%,
    #fd5949 40%,
    #d6249f 50%,
    #285aeb 60%,
    #fff 80%
  );
  background-size: 200% auto;
  background-position-x: -50%;
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.2s ease;
}
.ig:hover {
  background-position-x: 50%;
}
.fb,
.ig {
  font-weight: bold;
}

.burger {
  display: none;
  position: fixed;
  right: 20px;
  top: 17.75px;
  height: 50px;
  width: 50px;
  z-index: 2;
}
.burger input {
  opacity: 0;
  z-index: 2;
  margin: 0;
  width: 50px;
  height: 50px;
  position: absolute;
}
.burger div {
  height: 5px;
  width: 50px;
  background-color: black;
  margin-bottom: 12.5px;
  border-radius: 1000px;
  transform-origin: center left;
  transition: 0.5s all ease;
}

.burger input:checked ~ div:nth-last-child(3) {
  background: whitesmoke;
  transform: rotate(45deg);
}
.burger input:checked ~ div:nth-last-child(1) {
  background: whitesmoke;
  transform: rotate(-45deg);
}
.burger input:checked ~ div:nth-last-child(2) {
  opacity: 0;
}

.menu {
  display: none;
  position: absolute;
  top: -100%;
  width: 100%;
  height: 100%;
  transition: 0.4s all ease;
  justify-content: center;
  align-items: center;
  background: black;
  z-index: 1;
}
.visible {
  top: 0
}
@media screen and (max-width: 768px) {
  .icon {
    display: none;
  }
  .burger {
    display: block;
  }
  .menu {
    display: flex;
  }
}
</style>
