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

html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: black;
  color: white;
  font-family: "Quicksand", sans-serif;
  height: 100vh;
}
#app {
  height: 100vh
}
::-webkit-scrollbar {
  width: 5px;
  /* background: rgba(#fff, #fff, #fff, 0.5) */
  background: linear-gradient(135deg, rgba(23,23,23,1) 0%, rgba(94,94,94,1) 100%);
}
/* ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: transparent;
} */

::-webkit-scrollbar-thumb {
  background: lightgray;
  border-radius: 1em
}
</style>