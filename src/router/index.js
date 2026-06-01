import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Listado from '@/views/Listado.vue'
import Genero from '@/views/Genero.vue'
import Libro from '@/views/Libro.vue'

const routes = [
  { path: '/', name: 'inicio', component: Inicio },
  { path: '/listado', name: 'listado', component: Listado },
  { path: '/genero', name: 'genero', component: Genero },
  { path: '/libro/:id', name: 'libro', component: Libro, props: true },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
