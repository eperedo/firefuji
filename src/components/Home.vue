<template>
	<div class="hello">
		<author-list />
	</div>
</template>

<script>

import AuthorList from './AuthorList';

export default {
	name: 'home',
	components: {
		AuthorList,
	},
	data() {
		return {
			msg: 'Welcome to Your Vue.js PWA',
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
	color: map-get($colors, red);
	font-size: em(32);
}
</style>
