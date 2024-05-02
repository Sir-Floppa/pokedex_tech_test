import { createRouter, createWebHashHistory } from "vue-router";
import SearchResult from "./components/SearchResult.vue";
import VisualizePokemon from "./components/VisualizePokemon.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:tipo?', component: SearchResult },
    { path: '/visualizar/:nombre', component: VisualizePokemon}
  ]
})

export default router;