<template>
  <div class="main" id="main">
    <div class="info" ref="info"></div>
	<span>*motivational stuff bout bein lit*</span>
    <div class="contact">
      <p>Send us your message!</p>
      <div>
        <Form type="Name"></Form>
        <Form type="Email"></Form>
        <Form type="Number"></Form>
        <Form type="Message"></Form>
      </div>
      <button>Submit</button>
      <div class="ind"></div>
    </div>
  </div>
</template>
<script>
import Form from "@/components/Form.vue";
export default {
  name: "Contact",
  data() {
    return {
      imgs: [
        "https://ged-project.de/wp-content/uploads/2019/05/ilya-pavlov-87438-unsplash-e1557383667154.jpg",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6726719ee78dabe78033950d9f3f7145&w=1000&q=80",
        "https://www.digi-talks.dk/wp-content/uploads/2019/03/markus-spiske-221494-unsplash-1000x667.jpg"
      ]
    };
  },
  components: {
    Form
  },
  mounted() {
    // let length = 6
    // let index = 7
    // let output = 'Monday' = arr[0]
    // outpud = arr[(index / length) - 1]

    var i = 0
	// this.$refs.info.style.background = `url('${this.imgs[i]}')`;
	setInterval(() => {
		console.log(++i)
		this.$refs.info.style.background = `url('${i <= this.imgs.length - 1 ? this.imgs[i] :  this.imgs[i % (this.imgs.length - 1) - 1]}')`
		console.log(this.$refs.info.style.background)		
	}, 8000)
  }
};
</script>
<style scoped>
.info {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  transition: all 0.4s;
}
span {
	position: absolute;
	top: 50vh;
	left: 15%
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
  width: 2em;
  border-bottom: 1px gray solid;
  align-self: center;
  transition: all 0.5s ease;
}
</style>