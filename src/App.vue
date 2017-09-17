<template>
	<div id="fujideces">
		<nav>
			<ul>
				<li>
					<router-link to="/">Inicio</router-link>
					<router-link to="/faq">FAQ</router-link>
				</li>
			</ul>
		</nav>
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
export default {
	name: 'app',
};
</script>

<style lang="scss" scoped>
nav {
	padding: 1%;
	text-align: right;
	ul {
		list-style: none;

		li a {
			margin-right: 1%;
		}
	}
}
</style>
