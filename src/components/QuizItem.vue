<template>
	<button class="quiz-item" v-bind:class="quizClass" v-on:click="onSelectQuiz" v-bind:disabled="quizClass.length > 0">
		{{text}}
	</button>
</template>

<script>

function onSelectQuiz() {
	const { id, text } = this;
	this.$emit('selected-option', { id, text });
}

function quizClass() {
	if (this.correct.link) {
		return this.correct.optionId === Number(this.id) ? 'correct' : 'incorrect';
	}
	return '';
}

export default {
	name: 'quiz-item',
	computed: {
		quizClass,
	},
	props: {
		id: {
			type: [String, Number],
			required: true,
		},
		correct: {
			type: Object,
			default: () => { },
		},
		text: {
			type: String,
			required: true,
		},
	},
	methods: {
		onSelectQuiz,
	},
};
</script>

<style lang="scss" scoped>
.quiz-item {
	cursor: pointer;
	display: flex;
	background-color: #fff;
	border: none;
	box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 5px 8px rgba(0, 0, 0, .14), 0 1px 14px rgba(0, 0, 0, .12)!important;
	padding: 2%;
	margin-bottom: 2%;
	max-width: 350px;
	text-align: justify;

	&.correct {
		border: 2px solid deepskyblue;
	}

	&.incorrect {
		border: 2px solid orangered;
	}
}
</style>


