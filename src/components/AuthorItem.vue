<template>
	<section class="author-item">
		<picture>
			<source v-bind:srcset="images[0]" type="webp">
			<img v-bind:src="images[1]" v-bind:alt="name" />
		</picture>
		<p>{{name}}</p>
		<button v-on:click="selectedItem()">
			Ver Fujideces
		</button>
	</section>
</template>

<script>

function selectedItem() {
	const { name, images, id } = this;
	this.select({ name, images, id });
}

export default {
	name: 'author-item',
	props: {
		images: {
			type: Array,
			default: ['', ''],
		},
		name: {
			type: String,
			required: true,
		},
		id: {
			type: String,
		},
		select: {
			type: Function,
			required: true,
		},
	},
	methods: {
		selectedItem,
	},
};
</script>

<style lang="scss" scoped>
.author-item {
	align-items: center;
	box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 5px 8px rgba(0, 0, 0, .14), 0 1px 14px rgba(0, 0, 0, .12)!important;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 2%;
	padding: 2%;
}

img {
	border-radius: 50%;
	height: 128px;
	width: 128px;
}
</style>

