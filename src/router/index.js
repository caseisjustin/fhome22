import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ContactsPage from '../views/ContactsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/contacts', component: ContactsPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
