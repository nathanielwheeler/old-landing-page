<template>
	<div class="home">
		<post-card v-for="post in latestPosts" :postProp="post" :key="post.id"></post-card>
	</div>
</template>

<script>
// @ is an alias to /src
import PostCard from "../components/PostCard.vue";
export default {
	name: "home",
	mounted() {
		this.$store.dispatch("getLatestPosts");
	},
	computed: {
		posts() {
			return this.$store.state.latestPosts;
		}
	},
	methods: {},
	components: { PostCard }
};
</script>
