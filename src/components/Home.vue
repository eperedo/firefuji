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
