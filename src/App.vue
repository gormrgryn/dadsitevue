<template>
  <NavBar></NavBar>
  <router-view/>
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
}
</style>