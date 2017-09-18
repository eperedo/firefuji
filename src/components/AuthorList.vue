<template>
	<section class="author-list">
		<header>
			<h1>Selecciona tu personaje favorito</h1>
		</header>
		<section class="author-list-items">
			<author-item v-for="(author, index) in authors" v-bind:key="author.id" v-bind:id="author.id" v-bind:name="author.name" v-bind:images="author.images" v-bind:select="onSelectAuthor">
			</author-item>
		</section>
	</section>
</template>

<script>

import { db } from '@/shared/firebase';
import AuthorItem from './AuthorItem';

function data() {
	return {
		authors: [],
	};
}

function firebase() {
	return {
		authors: {
			source: db.ref('/authors'),
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
	firebase,
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

@media only screen and (max-device-width: 1024px) {

	.author-list {
		header {
			text-align: center;
		}
	}

	.author-list-items {
		flex-direction: column;
	}
}
</style>
