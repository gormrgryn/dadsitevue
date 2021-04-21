<template>
	<div class="navbar" ref="nav">
		<h2><router-link to="/">sitename</router-link></h2>
		<ul class="navlist">
			<li><router-link to="/socials">Socials</router-link></li>
			<li><router-link to="/contact">Contact</router-link></li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'NavBar',
		created() {
			window.addEventListener('scroll', this.onscroll)
		},
		methods: {
			onscroll() {
				let y = window.scrollY
				if(y > 600) {
					this.$refs.nav.classList = 'navbar'
					this.$refs.nav.classList.add('str', 'bgh')
				} else if (y < 600) {
					this.$refs.nav.classList = 'navbar'
					this.$refs.nav.classList.add('trans')
				}
			}
		}
	}
</script>
<style>
.navbar {
	height: 5em;
	padding: 0 2em;
	line-height: 5em;
	width: calc(100% - 4em);
	color: whitesmoke;
	z-index: 1;
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.1em;
	-webkit-transition: all 0.4s ease;
	transition: all 0.4s ease;
}
.trans {
	background: none;
}
.str {
	background: black;
}
.bgh {
	height: 4em
}
.navbar > h2 {
	float: left;
	width: 70%;
	display: inline-block;
	margin: 0;
}
.navbar > ul {
	margin: 0;
	list-style: none;
	display: inline-flex;
	justify-content: space-around;
	position: relative;
	left: 2em;
	align-items: center;
	float: left;
	width: 20%
}
a {
	text-decoration: none;
	color: whitesmoke
}
</style>
