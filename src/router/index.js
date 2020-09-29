import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/pages/LandingPage.vue'
import Roadmap from '../views/pages/RoadmapPage.vue'
import MainLayout from "../views/layouts/MainLayout.vue"
import PagesLayout from "../views/layouts/PagesLayout.vue"
import Contact from '../views/pages/ContactPage.vue'

Vue.use(VueRouter)

const pageTitle = (to, from, next) => {
  document.title = to.meta.title
  next()
}

const routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      {
          path: "",
          meta: {
              title: 'Home - ozzaqdev',
          },
          component: LandingPage,
          beforeEnter: pageTitle
      },
    ]
  },
  {
    path: "",
    component: PagesLayout,
    children: [
      {
        path: "project-roadmap",
        meta: {
            title: 'Roadmap - ozzaqdev',
        },
        component: Roadmap,
        beforeEnter: pageTitle
      },
      {
        path: "contact",
        meta: {
            title: 'Contact Me - ozzaqdev',
        },
        component: Contact,
        beforeEnter: pageTitle
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
