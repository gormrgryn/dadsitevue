<template>
	<div class="main" id="main">
		<div class="info">
			*motivational stuff bout bein lit*
		</div>
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
import Form  from '@/components/Form.vue'
export default {
	name: 'Contact',
	components: {
		Form
	},
	mounted() {}
};
</script>
<style scoped>
.main {
	display: flex;
	align-items: center;
	height: 100vh;
}
.info {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6726719ee78dabe78033950d9f3f7145&w=1000&q=80')
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
	flex-direction: column
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
	/* border-bottom: 1px gray solid; */
	transition: all 0.5s ease-in-out;
	width: 4em;
	height: 3em;
	align-self: center
}
button:hover {
	color: whitesmoke
}
button:hover ~ .ind {
	border-color: whitesmoke;
	width: 7em;
}
.ind {
	width: 2em;
	border-bottom: 1px gray solid;
	align-self: center;
	transition: all 0.5s ease
}
</style>