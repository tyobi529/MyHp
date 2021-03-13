import Vue from 'vue';
import Router from 'vue-router';
import Home from "./views/Home.vue";
import CalBattle from "./views/CalBattle.vue";
import WebGame from "./views/WebGame.vue";
import Works from "./views/Works.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: '/', component: Home },
    { path: "/calbattle", component: CalBattle },
    { path: "/webgame", component: WebGame },
    { path: "/works", component: Works }
  ],
  scrollBehavior(to, from, savedPosition) {
     if (savedPosition) {
     return savedPosition
  } else {
     return { x: 0, y: 0 }
  }    
  }
});