<template>
	<section class="author-list">
		<header>
			<h2>Selecciona tu personaje favorito</h2>
		</header>
		<section class="author-list-items">
			<author-item v-for="(author, index) in authors" v-bind:key="index" v-bind:id="index" v-bind:name="author.name" v-bind:images="author.images" v-bind:select="onSelectAuthor">
			</author-item>
		</section>
	</section>
</template>

<script>

import AuthorItem from './AuthorItem';

function data() {
	return {
		authors: {
			1: {
				name: 'Hector Becerrill',
				images: ['//www.fillmurray.com/128/128', '//www.fillmurray.com/128/128'],
			},
			25: {
				name: 'Karina Beteta',
				images: ['//www.fillmurray.com/128/128', '//www.fillmurray.com/128/128'],
			},
		},
	};
}

function onSelectAuthor(author) {
	this.$router.push({ name: 'quiz', params: author });
}

export default {
	name: 'author-list',
	components: {
		AuthorItem,
	},
	data,
	methods: {
		onSelectAuthor,
	},
};
</script>

<style lang="scss" scoped>
.author-list {
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.author-list-items {
	display: flex;
	justify-content: center;
	width: 100%;
}
</style>
