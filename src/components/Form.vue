<template>
  <div :class="'input-icons ' + cl">
    <textarea v-if="type === 'Message'" maxlength="1000" class="input-field" type="text" :placeholder="type"></textarea>
    <input v-else maxlength="1000" class="input-field" type="text" :placeholder="type" />
    <label :for="type" :class="'input_label ' + cl + '-label'">
      <span>{{ type }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    type: String
  },
  mounted() {
    if (this.type === 'Message') {
      this.cl = 'ta'
    }
  },
  data() {
    return {
      cl: ''
    };
  },
  methods: {}
};
</script>

<style scoped>
.input-icons {
  width: 70%;
  margin-bottom: 20px;
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
	padding-left: 10px;
	font-weight: 500;
	transition: 0.2s;
	pointer-events: none;
	margin: 0;
  color: white;
}
.input-field:focus {
  border-color: whitesmoke
}
.input-field:focus ~ .input_label,
.input-field:not(:placeholder-shown) ~ .input_label {
  margin-bottom: 2.5em;
}
textarea, input {
  font-family: "Quicksand", sans-serif;
  resize: none
}
.ta {
  justify-content: flex-start;
}
.ta-label {
  margin-top: 0.5em
}
textarea {
  height: 5em;
}
textarea:focus ~ .ta-label,
textarea:not(:placeholder-shown) ~ .ta-label {
  margin-top: -1em
}
</style>
