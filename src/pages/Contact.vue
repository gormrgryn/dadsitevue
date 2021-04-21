<template>
	<div class="main" id="main">
		<div class="info">
			barev
		</div>
		<div class="contact">
			<p>Send us your message!</p>
			<div>
				<Form type="Name"></Form>
				<Form type="Email"></Form>
				<Form type="Message"></Form>
				<Form type="Number"></Form>
			</div>
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
		mounted() {
			document.getElementById('main').style.height = document.documentElement.clientHeight + "px";
		}
	};
</script>
<style scoped>
	.main {
		display: flex;
		align-items: center;
	}
	.info {
		height: 100%;
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
	}
	.contact > p {
		align-self: center;
	}
	.info {
		width: 50%;
		float: left;
	}
</style>