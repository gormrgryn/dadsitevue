<template>
  <div :class="'input-icons ' + cl" :id="type.toLowerCase()">
    <textarea
      v-if="type === 'Message'"
      v-model="value"
      @change="sendDataToStore"
      maxlength="1000"
      class="input-field"
      :placeholder="type"
    ></textarea>
    <input
      v-else
      @change="sendDataToStore"
      v-model="value"
      maxlength="50"
      class="input-field"
      type="text"
      :placeholder="type"
    >
    <label :for="type" :class="'input_label ' + cl + '-label'">
      <span>{{ type }}</span>
    </label>
    <span class="ind"></span>
    <span style="position: absolute">
      <span :class="'error ' + type.toLowerCase()">{{ errors[type.toLowerCase()] }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    type: String
  },
  mounted() {
    if (this.type === "Message") {
      this.cl = "ta";
    }
    this.$store.dispatch("addValue", {
      key: this.type,
      value: ""
    });
    // let style = document.createElement('style')
    // document.head.appendChild(style)
    // let stylesheet = style.sheet
    // stylesheet.insertRule(`
    //   .error.name {
    //     top: ${}
    //   }
    // `)
  },
  data() {
    return {
      cl: "",
      value: ""
    };
  },
  computed: {
    errors() {
      return this.$store.getters.getErrors
    }
  },
  methods: {
    sendDataToStore() {
      this.$store.dispatch("addValue", {
        key: this.type,
        value: this.value
      });
    }
  }
};
</script>

<style scoped>
.input-icons {
  width: 70%;
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.input-field {
  width: 100%;
  padding: 10px;
  background: none;
  outline: 0;
  border: none;
  color: whitesmoke;
  z-index: 1;
}
.input-field::placeholder {
  color: transparent;
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
textarea,
input {
  font-family: "Quicksand", sans-serif;
  resize: none;
}
.ta {
  justify-content: flex-start;
}
.ta-label {
  margin-top: 0.5em;
}
textarea {
  height: 5em;
}
textarea:focus ~ .ta-label,
textarea:not(:placeholder-shown) ~ .ta-label {
  margin-top: -1em;
}
.ind {
  width: 4em;
  height: 1px;
  background-color: gray;
  transition: all 0.5s ease;
}
.error {
  color: rgb(231, 131, 131);
  position: relative;
  width: 30vw;
  top: 2em;
}
.error.message {
  top: 4.4em;
}
</style>
