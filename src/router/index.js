// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Weather from "../views/Weather.vue";

const openExternalLink = (url) => (to, from, next) => {
  window.open(url);
  next({ name: "Weather" });
};

const routes = [
  {
    path: "/",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/assignment/1",
    name: "Assignment1",
    beforeEnter: openExternalLink("https://rival-project-cv.netlify.app/"),
  },
  {
    path: "/assignment/2",
    name: "Assignment2",
    beforeEnter: openExternalLink("https://muhammad-rivaldani-prk-pbk-tgs2.vercel.app/"),
  },
  {
    path: "/assignment/3",
    name: "Assignment3",
    beforeEnter: openExternalLink("https://tugas3prakpbk-rival.vercel.app/"),
  },
  {
    path: "/assignment/4",
    name: "Assignment4",
    beforeEnter: openExternalLink("https://tugas4-one.vercel.app/"),
  },
  {
    path: "/assignment/5",
    name: "Assignment5",
    beforeEnter: openExternalLink("https://tugas5-aozb2n7df-rivalls-projects.vercel.app/"),
  },
  {
    path: "/assignment/7",
    name: "Assignment7",
    beforeEnter: openExternalLink("https://tugas7-gq1a736zj-rivalls-projects.vercel.app/"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
