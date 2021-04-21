import { createWebHistory, createRouter } from "vue-router"
import Home from "@/pages/Home.vue"
import Contact from '@/pages/Contact.vue'
import Socials from '@/pages/Socials.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/socials',
    name: 'Socials',
    component: Socials
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;