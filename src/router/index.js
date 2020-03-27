import Vue from 'vue'
import VueRouter from 'vue-router'

//COMPONENTS
import About      from '@/components/about'
import Build      from '@/components/build'
import Home       from '@/components/home'
import Roadmap    from '@/components/roadmap'

//DATA FORMATTING COMPONENTS
import Data       from '@/components/Data/data'
import HeroData   from '@/components/Data/heroData'
import ItemData   from '@/components/Data/itemData'
import Output     from '@/components/Data/output'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //COMPONENT ROUTES
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Build',
    name: 'Build',
    component: Build
  },
  {
    path: '/Roadmap',
    name: 'Roadmap',
    component: Roadmap
  },
  //DATA FORMATTING TOOLS
  {
    path: '/Data',
    name: 'Data',
    component: Data
  },
  {
    path: '/HeroData',
    name: 'HeroData',
    component: HeroData
  },
  {
    path: '/ItemData',
    name: 'ItemData',
    component: ItemData
  },
  {
    path: '/Output',
    name: 'Output',
    component: Output
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
