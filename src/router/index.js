import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/pages/LandingPage.vue'
import Roadmap from '../views/pages/RoadmapPage.vue'
import MainLayout from "../views/layouts/MainLayout.vue"
import PagesLayout from "../views/layouts/PagesLayout.vue"
import Contact from '../views/pages/ContactPage.vue'

Vue.use(VueRouter)

// const pageTitle = (to, from, next) => {
//   document.title = to.meta.title
//   next()
// }

const routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      {
          path: "",
          component: LandingPage,
      },
    ]
  },
  {
    path: "/pages",
    component: PagesLayout,
    children: [
      {
        path: "project-roadmap",
        component: Roadmap,
      },
      {
        path: "contact",
        component: Contact,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
