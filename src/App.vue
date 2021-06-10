<template>
  <div>
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: black;
  color: white;
  font-family: "Quicksand", sans-serif;
  height: 100vh;
  scroll-behavior: smooth;
}
#app {
  height: 100vh
}
::-webkit-scrollbar {
  transition: all 0.4s ease;
  width: 2px;
  background: black
}
::-webkit-scrollbar-thumb {
  background: lightgray;
  border-radius: .5em
}

@media screen and (max-width: 768px) {
  ::-webkit-scrollbar {
    display: none
  }
}
</style>
