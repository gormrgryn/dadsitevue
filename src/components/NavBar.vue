<template>
  <div>
    <div class="navbar">
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
      check: false,
      style: document.createElement("style"),
      sheet: null
    };
  },
  watch: {
    check() {
      if (this.check) {
        document.body.style.overflowY = "hidden";
        let stylesheet = this.sheet;
        stylesheet.removeRule(0)
        stylesheet.insertRule(`
          .visible {
            top: ${window.scrollY}px !important;
          }
        `)
        this.$refs.menu.classList = "menu visible";
      } else {
        document.body.style.overflowY = "";
        this.$refs.menu.classList = "menu";
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.onscroll);
  },
  mounted() {
    let navH = document.querySelector(".navbar").offsetHeight;
    let burg = document.querySelector(".burger");
    document.body.appendChild(this.style);
    this.sheet = this.style.sheet
    let stylesheet = this.sheet;
    stylesheet.insertRule(`
      .burger {
        top: ${(navH - burg.offsetHeight) / 2}px;
      }
    `);
    stylesheet.insertRule(`
      .burger input {
        width: ${burg.offsetWidth}px;
        height: ${burg.offsetHeight}px;
      }
    `);
    stylesheet.insertRule(`
      .btrans {
        top: ${(navH  - burg.offsetHeight - 16) / 2}px !important;
      }
    `);
    stylesheet.insertRule(`
      .visible {
        top: 0;
      }
    `);
  },
  methods: {
    onscroll() {
      let y = window.scrollY;
      let height = document.documentElement.offsetHeight;
      if (y > height) {
        let nav = document.querySelector(".navbar")
        nav.classList = "navbar str";
        document.querySelector(".burger").classList = "burger btrans";
      } else if (y < height) {
        document.querySelector(".burger").classList = "burger";
        document.querySelector(".navbar").classList = "navbar trans";
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
  position: fixed;
  right: 20px;
  transition: all 0.4s ease;
  z-index: 2;
}
.burger input {
  display: inherit;
  opacity: 0;
  z-index: 3;
  margin: 0;
  position: absolute;
}
.burger div {
  display: inherit;
  height: 3px;
  width: 40px;
  background-color: whitesmoke;
  margin-bottom: 12px;
  border-radius: 1000px;
  transform-origin: center left;
  transition: 0.5s all ease;
}
.burger div:nth-last-child(1) {
  margin-bottom: 0;
}
.burger input:checked ~ div:nth-last-child(3) {
  background: whitesmoke;
  transform: rotate(49deg);
}
.burger input:checked ~ div:nth-last-child(1) {
  background: whitesmoke;
  transform: rotate(-49deg);
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
@media screen and (min-width: 768px) {
  .burger {
    display: none;
  }
}
</style>
