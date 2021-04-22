<template>
	<div class="social">
		<p class="soctext">folo areq mez mer instagramnerum</p>
		<div class="socialbox">
			<div class="socbox">
				<p class="boxtext">Lorem ipsum dolor sit amet</p>
			</div>
			<div class="socbox">
				<p class="boxtext">Lorem ipsum dolor sit amet</p>
			</div>
			<div class="socbox">
				<p class="boxtext">Lorem ipsum dolor sit amet</p>
			</div>
		</div>
	</div>
</template>
<style>
.soctext {
	text-align: center;
	font-size: 2em;
	margin: 0;
}
.social {
	height: calc(100% - 5em);
	position: relative;
	top: 5em;
	width: 100%;
}
.socialbox {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: calc(100% - 5em);
}
.socbox {
	width: 25%;
	height: 50%;
	border: 1px solid whitesmoke;
	box-shadow: 0 0 4px;
}
.boxtext {
	font-size: 1em;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>