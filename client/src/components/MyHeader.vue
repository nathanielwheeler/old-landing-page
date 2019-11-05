<template>
	<header class="my-header container-fluid">
		<h1 class="row">
			<router-link class="header no-decoration col-12 text-center" to="/">NathanielWheeler.com</router-link>
		</h1>
		<div class="row">
			<p class="col-12">
				I'm
				<router-link to="/about">Nathan</router-link>&nbsp;and I'm a developer, writer, and amateur cartoonist.
			</p>
			<br />
			<div class="col-12">
				<router-link to="/projects">Projects</router-link>&nbsp;—
				<a href="https://github.com/nathanielwheeler">GitHub</a>&nbsp;—
				<a href="https://twitter.com/NathanDoesNada">Twitter</a>&nbsp;—
				<router-link to="/about">About</router-link>
			</div>
		</div>
		<hr />
	</header>
</template>


<script>
export default {
	name: "my-header",
	data() {
		return {};
	},
	computed: {},
	methods: {},
	components: {}
};
</script>


<style scoped>
.header,
.header:hover {
	color: #ffe7c3;
}
.no-decoration {
	text-decoration: none;
}
hr {
	border-top: 1px solid #171512;
	border-bottom: 1px solid #3e3a35;
}
</style>