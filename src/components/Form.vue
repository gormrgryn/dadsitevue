<template>
  <div :class="'input-icons ' + cl">
    <textarea v-if="type === 'Message'" v-model="value" @change="sendDataToStore" maxlength="1000" class="input-field" :placeholder="type"></textarea>
    <input v-else @change="sendDataToStore" v-model="value" maxlength="1000" class="input-field" type="text" :placeholder="type" />
    <label :for="type" :class="'input_label ' + cl + '-label'">
      <span>{{ type }}</span>
    </label>
    <span class="ind"></span>
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
    // this.$data[this.type] = 
  },
  data() {
    return {
      cl: '',
      value: ''
    };
  },
  methods: {
    sendDataToStore() {
      this.$store.dispatch('addValue', {
        key: this.type,
        value: this.value
      })
      console.log(this.$store.getters.getValues)
    }
  }
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
  /* border-bottom: 1px gray solid; */
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
.input-field:focus ~ .ind {
  background-color: whitesmoke;
  width: 100%;
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
.ind {
  width: 4em;
  height: 1px;
  background-color: gray;
  transition: all 0.5s ease
}
</style>
