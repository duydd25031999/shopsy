import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from '../views/ViewHome.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/hello-world',
		name: 'hello-world',
		component: () => import('@/views/ViewHelloWorld.vue')
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
});

export default router;