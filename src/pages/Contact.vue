<template>
  <div class="main" id="main">
    <div class="info" ref="info"></div>
    <span class="span">*motivational stuff bout bein lit*</span>
    <div class="contact">
      <p>Send us your message!</p>
      <div>
        <div v-for="type in inputs" :key="type" class="input-icons" :id="type.toLowerCase()">
          <textarea
            v-if="type === 'Message'"
            v-model="values[type.toLowerCase()]"
            maxlength="1000"
            class="input-field"
            :placeholder="type"
          ></textarea>
          <input
            v-else
            v-model="values[type.toLowerCase()]"
            maxlength="50"
            class="input-field"
            type="text"
            :placeholder="type"
          >
          <label :for="type" :class="'input_label ' + cl + '-label'">
            <span>{{ type }}</span>
          </label>
          <span class="indi"></span>
          <span style="position: absolute">
            <span :class="'error ' + type.toLowerCase()">{{ errors[type.toLowerCase()] }}</span>
          </span>
        </div>
      </div>
      <button @click="validate">Submit</button>
      <div class="ind"></div>
      <span class="res" v-text="result"></span>
    </div>
  </div>
</template>
<script>
const axios = require("axios").default;
axios.defaults.headers.post["Content-Type"] = "application/json";
import { LinkedList } from "../assets/list.js";

export default {
  name: "Contact",
  data() {
    return {
      urls: [
        "https://ged-project.de/wp-content/uploads/2019/05/ilya-pavlov-87438-unsplash-e1557383667154.jpg",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6726719ee78dabe78033950d9f3f7145&w=1000&q=80",
        "https://www.digi-talks.dk/wp-content/uploads/2019/03/markus-spiske-221494-unsplash-1000x667.jpg"
      ],
      list: new LinkedList(),
      i: null,
      inputs: ["Name", "Email", "Message"],
      cl: "ta",
      values: {
        name: "",
        email: "",
        message: ""
      },
      errors: {},
      result: ""
    };
  },
  // computed: {
  //   errors() {
  //     return this.$store.getters.getErrors
  //   }
  // },
  mounted() {
    if (document.querySelector(".info").offsetHeight) {
      this.$data.urls.forEach(j => {
        this.$data.list.add(j);
      });
      this.$data.i = this.$data.list.head;
      this.slide();
    }
    if (this.type === "Message") {
      this.cl = "ta";
    }
    document.querySelectorAll(".input-icons").forEach(i => {
      if (i.childNodes[0].tagName === "TEXTAREA") {
        i.classList.add(this.cl);
      }
    });
  },
  methods: {
    slide() {
      if (this.$route.name === "Contact" && this.$refs.info) {
        if (this.$data.i.next) {
          this.$data.i = this.$data.i.next;
        } else {
          this.$data.i = this.$data.list.head;
        }
        this.$refs.info.style.backgroundImage = `url('${
          this.$data.i.element
        }')`;
        setTimeout(this.slide, 5000);
      }
    },
    validate() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const res = re.test(String(this.values.email).toLowerCase());
      let name;
      let email;
      let msg;
      if (this.values.name.length === 0) {
        this.errors.name = "Name must be non-empty";
        name = false;
      } else {
        this.errors.name = "";
        name = true;
      }
      if (!res) {
        this.errors.email = "Invalid e-mail";
        email = false;
      } else {
        this.errors.email = "";
        email = true;
      }
      if (this.values.message.length === 0) {
        this.errors.message = "Message must be non-empty";
        msg = false;
      } else {
        this.errors.message = "";
        msg = true;
      }
      if (name && email && msg) {
        this.submit();
      }
    },
    submit() {
      axios.post("http://localhost:3000/", this.values)
        .then(res => {
          console.log(res);
          this.result = "Your message was successfully sent";
        })
        .catch(err => {
          console.log(err);
          this.result = "Please, try again later";
        })
        .then(() => {
          Object.keys(this.values).forEach(i => {
            this.values[i] = "";
          });
        });
    }
  }
};
</script>
<style scoped>
.info {
  height: 100vh;
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.4s;
  background-size: cover;
  opacity: 0.5;
}
.span {
  position: absolute;
  top: 50vh;
  width: 50%;
  text-align: center;
}
.main {
  display: flex;
  align-items: center;
  height: 100vh;
}
.contact {
  width: 50%;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
.contact > p {
  align-self: center;
}
.contact > div {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.info {
  width: 50%;
  float: left;
}
button {
  font-family: "Quicksand", sans-serif;
  font-size: 1.5em;
  background: transparent;
  color: gray;
  border: 0;
  transition: all 0.5s ease-in-out;
  width: 4em;
  height: 3em;
  align-self: center;
}
button:hover {
  color: whitesmoke;
}
button:hover ~ .ind {
  border-color: whitesmoke;
  width: 7em;
}
.ind {
  width: 1.5em;
  border-bottom: 1px gray solid;
  align-self: center;
  transition: all 0.5s ease;
}
.res {
  text-align: center;
  font-size: 0.9em;
  position: relative;
  top: 2em;
}

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
.input-field:focus ~ .indi {
  background-color: whitesmoke;
  width: 100%;
}
.input-field:focus ~ .input_label,
.input-field:not(:placeholder-shown) ~ .input_label {
  margin-bottom: 3em;
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
.indi {
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

@media screen and (max-width: 768px) {
  .info,
  span {
    display: none;
  }
  .contact {
    width: 100%;
  }
}
</style>
