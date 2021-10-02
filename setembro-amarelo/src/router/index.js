import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Ajuda from '../views/Ajuda.vue'
import Infos from '../views/Infos.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/ajuda',
    name: 'Ajuda',
    component: Ajuda
  },
  {
    path: '/informacoes',
    name: 'Infos',
    component: Infos
  }
]

const router = new VueRouter({
  routes
})

export default router
