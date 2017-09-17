<template>
	<section class="final-cotainer">
		<div class="score">
			<h2>Resultado</h2>
			<div>
				<h3>{{percentage | round}} %</h3>
				<h5>Adivinaste {{$route.params.totalCorrect}} de {{$route.params.total}}</h5>
				<router-link to="/">Ver más fujideces</router-link>
			</div>
		</div>
	</section>
</template>

<script>

function created() {
	const { total, totalCorrect } = this.$route.params;
	if (total && totalCorrect) {
		this.percentage = (totalCorrect * 100) / total;
	} else {
		this.$router.push({ name: 'home' });
	}
}

function data() {
	return {
		percentage: 0,
	};
}

function round(value) {
	return value.toFixed(2);
}

export default {
	name: 'final',
	filters: {
		round,
	},
	created,
	data,
};
</script>

<style lang="scss" scoped>
.score {
	align-items: center;
	box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 5px 8px rgba(0, 0, 0, .14), 0 1px 14px rgba(0, 0, 0, .12)!important;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	text-align: center;
}
</style>


