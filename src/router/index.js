import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/components/Home'),
		},
		{
			path: '/quiz/:id',
			name: 'quiz',
			component: () => import('@/components/Quiz'),
		},
		{
			path: '/final',
			name: 'final',
			component: () => import('@/components/Final'),
		},
		{
			path: '/faq',
			name: 'faq',
			component: () => import('@/components/Faq'),
		},
	],
});
