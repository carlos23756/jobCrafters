import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Blank from '@/layouts/Blank.vue'

import BlankDark from '@/layouts/BlankDark.vue'


import HomeView from '../views/HomeView.vue'

// Importation des composants de vue
import LandingPage from '@/views/LandingPage.vue';
import NotFound from '@/views/NotFound.vue';

// Auth
import Login from '@/views/auth/Login.vue';
import SignUp from '@/views/auth/SignUp.vue';

// Dashboard
import Dashboard from '@/views/dashboard/Dashboard.vue';

// Profile
import Profile from '@/views/profile/Profile.vue';
import Settings from '@/views/profile/Settings.vue';

// Resume
import ResumeBuilder from '@/views/resume/ResumeBuilder.vue';
import CoverLetterBuilder from '@/views/resume/CoverLetterBuilder.vue';

// Job
import JobSearch from '@/views/job/JobSearch.vue';
import JobDetails from '@/views/job/JobDetails.vue';
import ApplyJob from '@/views/job/ApplyJob.vue';

// Interview
import InterviewPrep from '@/views/interview/InterviewPrep.vue';
import CodingPractice from '@/views/interview/CodingPractice.vue';
import CoachSessionBooking from '@/views/interview/CoachSessionBooking.vue';
import InterviewSimulation from '@/views/interview/InterviewSimulation.vue';
import PricingVue from '@/views/Pricing.vue';
import BlogVue from '@/views/blog/index.vue';
import faqVue from '@/views/FAQ.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
      meta: { layout: DefaultLayout },
    },
    {
      path: '/login', name: 'Login', component: Login,
      meta: { layout: AuthLayout }
    },
    {
      path: '/faq', name: 'Faq', component: faqVue,
      meta: { layout: DefaultLayout }
    },
    {
      path: '/blog', name: 'blog', component: BlogVue,
      meta: { layout: DefaultLayout },
    },
    {
      path: '/pricing', name: 'Pricing', component: PricingVue,
      meta: { layout: DefaultLayout }
    },
    {
      path: '/signup', name: 'SignUp', component: SignUp,
      meta: { layout: AuthLayout }
    },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    {
      path: '/profile', name: 'Profile', component: Profile,
      meta: { layout: DashboardLayout },
    },
    { path: '/settings', name: 'Settings', component: Settings },
    {
      path: '/resume-builder', name: 'ResumeBuilder', component: ResumeBuilder,
      meta: { layout: Blank }
    },
    { path: '/cover-letter-builder', name: 'CoverLetterBuilder', component: CoverLetterBuilder ,   meta: { layout: Blank }},
    { path: '/job-search', name: 'JobSearch', component: JobSearch },
    { path: '/job-details/:id', name: 'JobDetails', component: JobDetails, props: true },
    { path: '/apply-job/:id', name: 'ApplyJob', component: ApplyJob, props: true },
    { path: '/interview-prep', name: 'InterviewPrep', component: InterviewPrep },
    { path: '/coding-practice', name: 'CodingPractice', component: CodingPractice ,meta: { layout: BlankDark }},
    { path: '/coach-session-booking', name: 'CoachSessionBooking', component: CoachSessionBooking },
    { path: '/interview-simulation', name: 'InterviewSimulation', component: InterviewSimulation },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})



export default router
