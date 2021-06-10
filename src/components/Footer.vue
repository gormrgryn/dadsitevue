<template>
  <div class="footer">
    <span>
      Made by
      <a href="http://github.com/gormrgryn" target="_blank">Gor Margaryan</a>
    </span>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  height: 7%;
  display: flex;
  align-items: center;
  margin-left: 2%;
  font-size: 0.8em;
}
a {
  color: rgb(105, 141, 117);
  transition: color 0.2s ease;
}
a:hover {
  color: white;
}
</style>
