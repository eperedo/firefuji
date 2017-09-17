<template>
	<section class="quiz-container">
		<header>
			<h3>{{author.name}} - Elige el tweet real</h3>
		</header>
		<section class="quiz-answer-container" v-if="correct.link">
			<header>
				<h4 v-bind:style="{ 'color': isCorrect ? 'blue' : 'red' }">
					{{ isCorrect ? 'Bien! Agarra tu taper.' : 'Equivocado. Típico de caviar.' }}
				</h4>
			</header>
			<div>
				<a rel="noopener" target="_blank" v-bind:href="correct.link">Tweet Original</a>
			</div>
			<p>
				No encontraste el tweet?
				<a rel="noopener" target="_blank" v-bind:href="correct.image">Internet nunca olvida</a>
			</p>
			<button v-on:click="nextOption">
				Siguiente
			</button>
		</section>
		<quiz-item v-for="option in options" v-bind:correct="correct" v-bind:key="option['.key']" v-bind:id="option['.key']" v-bind:text="option.text" v-on:selected-option="selectedOption"></quiz-item>
	</section>
</template>

<script>

import { db } from '@/shared/firebase';
import QuizItem from './QuizItem';

function created() {
	if (this.$route.params.name) {
		this.author = this.$route.params;
	} else {
		this.$bindAsObject('author', db.ref(`/authors/${this.$route.params.id}`));
	}
}

function data() {
	return {
		author: {
			id: 0,
			name: '',
			images: [],
		},
		correct: {},
		currentQuizNumber: 1,
		isCorrect: null,
		total: 0,
	};
}

function firebase() {
	const id = this.$route.params.id;
	return {
		options: {
			source: db.ref(`/quiz/author_id/${id}/options/${this.currentQuizNumber}/options`),
		},
	};
}

function nextOption() {
	this.correct = {};
	this.isCorrect = null;
	const url = `/quiz/author_id/${this.$route.params.id}/options/${this.currentQuizNumber}/options`;
	this.$bindAsArray('options', db.ref(url), null, (snapshot) => {
		const values = snapshot.val();
		if (values === null) {
			this.$router.push({ name: 'final', params: { total: this.currentQuizNumber - 1, totalCorrect: this.total } });
		}
	});
}

function selectedOption(quiz) {
	const url = `/quiz/author_id/${this.$route.params.id}/options/${this.currentQuizNumber}/correct`;
	this.$bindAsObject('correct', db.ref(url), null, () => {
		this.isCorrect = this.correct.optionId === Number(quiz.id);
		if (this.isCorrect) {
			this.total += 1;
		}
		this.currentQuizNumber += 1;
	});
}

export default {
	name: 'quiz',
	components: {
		QuizItem,
	},
	created,
	data,
	firebase,
	methods: {
		nextOption,
		selectedOption,
	},
};
</script>

<style lang="scss" scoped>
.quiz-container {
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;

	header {
		padding: 2%;
		text-align: center;
		width: 100%;
	}
}

.quiz-answer-container {
	align-items: center;
	box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 5px 8px rgba(0, 0, 0, .14), 0 1px 14px rgba(0, 0, 0, .12)!important;
	border: 2px solid lightcoral;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 2% 0;
	max-width: 350px;
	padding: 1%;

	header {
		text-align: center;
		width: 100%;
	}

	button {
		cursor: pointer;
		border: none;
		padding: 2%;
		min-width: 150px;
	}
}
</style>


