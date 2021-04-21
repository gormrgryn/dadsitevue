<template>
  <div class="form">
    <div class="datainput">
      <input type="text" placeholder="input" class="input" ref="inp" />
      <label class="form__label" @click="focus">{{ type }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    type: String
  },
  data () {
    return {}
  },
  methods: {
    focus() {
      this.$refs.inp.focus()
    }
  }
}
</script>

<style scoped>
.form {
  color: whitesmoke;
  display: flex;
  justify-content: center;
}
.datainput {
  position: relative;
  padding: 0 1em;
  padding-top: 1em;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 2.5em;
  /*border-radius: .1em;*/
  margin: 1em 5em;
}
.form__label {
  position: relative;
  display: block;
  width: auto;
}
.input {
	border: 0;
	border-bottom: 2px solid #9b9b9b;
	outline: 0;
	font-size: 1.3rem;
	color: #fff;
	padding: 7px 0;
	background: transparent;
  transition: border-color 0.2s;
  display: block;
	transition: 0.2s;
	font-size: 1rem;
  color: #9b9b9b;
  width: 100%;
  height: 2em;
}
.input::placeholder {
	color: transparent;
}
.input:focus {
	padding-bottom: 6px;
	font-weight: 700;
}
.input:placeholder-shown ~ .form__label {
	font-size: 1.3rem;
	cursor: text;
  position: relative;
  bottom: 1.5em;
  transition: 0.2s
}
.input:focus ~ .form__label {
  position: relative;
  bottom: 4.5em;
  display: block;
	transition: 0.2s;
	font-size: 1rem;
	color: whitesmoke;
	font-weight: 350;
}
</style>
