<template>
	<section class="faq-container">
		<header>
			<h1>FAQ</h1>
		</header>
		<faq-item v-for="faq in faqs" v-bind:link="faq.link" v-bind:question="faq.question" v-bind:answer="faq.answer" v-bind:key="faq.id" />
	</section>
</template>

<script>

import FaqItem from './FaqItem';

function data() {
	return {
		faqs: [
			{
				id: 1,
				question: '¿De qué se trata esta web?',
				answer: 'Eliges un político, yo te muestro 3 tweets y tu tienes que adivinar cual es el tweet real.',
			},
			{
				id: 2,
				question: '¿Cuántas veces debo adivinar?',
				answer: 'Depende del político, lo mínimo es 3.',
			},
			{
				id: 3,
				question: '¿Qué gano si adivino todos los tweets?',
				answer: '500 dólares.',
			},
			{
				id: 4,
				question: '¿Wow! En serio?',
				answer: 'No...',
			},
			{
				id: 5,
				question: '¿Por qué creaste esta web?',
				answer: 'Aburrimiento y ganas de aprender',
			},
			{
				id: 6,
				question: '¿Combinar cojudez con fujimorismo, muy original no?',
				answer: 'No, en realidad me copie completamente la palabra de Pedro Salinas',
				link: 'https://carlosmsotomayor.lamula.pe/2011/07/26/entrevista-a-pedro-salinas/carlossotomayor/',
			},
			{
				id: 7,
				question: '¿Qué otra cosa te copiaste?',
				answer: 'Todo esta web está inspirada en trumptweetsquiz.firebaseapp.com',
				link: 'http://trumptweetsquiz.firebaseapp.com',
			},
			{
				id: 8,
				question: '¿Creo que eres un rojo resentido y caviarón que odia a Fujimori',
				answer: 'Esa no es una pregunta.',
			},
		],
	};
}

export default {
	name: 'faq-list',
	components: {
		FaqItem,
	},
	data,
};
</script>

<style lang="scss" scoped>
.faq-container {
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>


