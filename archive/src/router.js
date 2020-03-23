import Vue from 'vue'
import Router from 'vue-router'
// IMPORT COMPONENTS
const   Home      = () => import('@/components/Home')
const   About     = () => import('@/components/About')
const   Builds    = () => import('@/components/Builds')
const   Heroes    = () => import('@/components/Heroes')
const   heroInfo  = () => import('@/components/heroComponents/heroInfo')
const   Items     = () => import('@/components/Items')
const   itemInfo  = () => import('@/components/itemComponents/itemInfo')
const   Updates   = () => import('@/components/Updates')
const   Utilities = () => import('@/components/Utilities')
const   Roadmap   = () => import('@/components/Roadmap')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/builds',
      name: 'builds',
      component: Builds
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: Heroes
    },
    {
      path: '/hero/:heroName',
      name: 'hero',
      component: heroInfo,
      props: true
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/items',
      name: 'items',
      component: Items,
      props: true
    },
    {
      path: '/item/:itemName',
      name: 'itemInfo',
      component: itemInfo,
      props: true
    },
    {
      path: '/updates',
      name: 'updates',
      component: Updates
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: Roadmap
    },
    {
      path: '/utilities',
      name: 'utilities',
      component: Utilities
    },
  ]
})
