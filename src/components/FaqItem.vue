<template>
	<section class="faq-item">
		<p class="question">{{question}}</p>
		<p class="answer">
			- {{answer}}
			<span class="link" v-if="link">
				-
				<a v-bind:href="link" target="_blank" rel="noopener">Fuente</a>
			</span>
		</p>
	</section>
</template>

<script>
export default {
	name: 'faq-item',
	props: {
		answer: {
			type: String,
			required: true,
		},
		link: {
			type: String,
		},
		question: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.faq-item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 50%;
	width: 100%;

	.question {
		color: grey;
	}
}
</style>


