<template>
	<div id="app">
		<my-header />

		<router-view />
	</div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
export default {
	components: { MyHeader }
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #f9d094;
	background: #2e2a24;
}
a,
.link {
	color: #be862c;
}
a:hover,
.link:hover {
	color: #d3a459;
}
.btn {
	color: #be862c;
	border-color: #be862c;
	border-radius: 0;
	background-color: #513d21;
	padding: 5px;
	margin: 5px;
}
.btn:hover {
	color: #d3a459;
	border-color: #d3a459;
	background-color: #513d21;
	text-decoration: underline;
}
.card {
	background-color: #201d19;
	border-radius: 0;
	margin: 10px;
}
.card-img-top {
	border-radius: 0;
}
</style>
