import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '@/components/Home'
import MeetupsList from '@/components/Meetup/MeetupsList'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import UserProfile from '@/components/User/UserProfile'
import UserSignin from '@/components/User/UserSignin'
import UserSignup from '@/components/User/UserSignup'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/meetup',
    name: 'meetup',
    component: MeetupsList
  },
  {
    path: '/meetup/new',
    name: 'create-meetup',
    component: CreateMeetup
  },
  {
    path: '/profile',
    name: 'user-',
    component: UserProfile
  },
  {
    path: '/signin',
    name: 'user-signin',
    component: UserSignin
  },
  {
    path: '/signup',
    name: 'user-signup',
    component: UserSignup
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
