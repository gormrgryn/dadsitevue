<template>
  <div class="input-icons">
    <label for="" class="input_label">
      <span>asasasa</span>
    </label>
    <input class="input-field" type="text" placeholder="Username">
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    type: String
  },
  data() {
    return {};
  },
  methods: {
    focus() {
      this.$refs.inp.focus();
    }
  }
};
</script>

<style scoped>
.input-icons {
  width: 70%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center
}
.input-field {
  width: 100%;
  padding: 10px;
  background: none;
  outline: 0;
  border: none;
  border-bottom: 1px gray solid;
  color: whitesmoke
}
.input-field::placeholder {
  color: transparent
}
.input_label {
	position: absolute;
	padding-left: 15px;
	font-weight: 500;
	transition: 0.2s;
	pointer-events: none;
	margin: 0;
  color: white
}
.input-field:focus ~ .input_label {
  color: red
}
</style>
