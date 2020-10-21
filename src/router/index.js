import Vue           from 'vue'
import VueRouter     from 'vue-router'
import Home          from '../views/Home.vue'
import Formulario    from '../views/Formulario.vue'
import Clientes      from '../views/Tablas.vue'
import Checkin       from '../views/Checkin.vue'
import Busqueda      from '../views/Busqueda.vue'
import BusquedaForm  from '../views/BusquedaForm.vue'
import NuevoUsuario  from '../views/NuevoUsuario.vue'
import ListaUsuarios from '../views/ListaUsuarios.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Formulario',
    component: Formulario
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/checkin',
    name: 'Checkin',
    component: Checkin
  },
  {
    path: '/busqueda',
    name: 'Busqueda',
    component: Busqueda
  },
  {
    path: '/busquedaform',
    name: 'Busqueda',
    component: BusquedaForm
  },
  {
    path: '/listausuarios',
    name: 'Lista de usuarios',
    component: ListaUsuarios
  },
  {
    path: '/nuevousuario',
    name: 'Nuevo usuario',
    component: NuevoUsuario
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
