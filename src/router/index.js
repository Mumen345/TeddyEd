import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaqPage from "../views/FaqPage.vue"
import ContactView from "../views/ContactView.vue"
import ModulesView from "../views/ModulesView.vue"
import OnboardingRequirement from "../views/OnboardingRequirement.vue"
import PageNotFound from "../views/PageNotFound.vue"
import AttendanceManagement from "../views/AttendanceManagement.vue"
import CommunicationsView from "../views/CommunicationsView.vue"
import SchoolEvent from "../views/SchoolEvent.vue"
import AssetManagement from "../views/AssetManagement.vue"
import AdmissionsManagement from "../views/AdmissionsManagement.vue"
import AdministrationPortal from "../views/AdministrationPortal.vue"
import TransportationManagement from "../views/TransportationManagement.vue"
import NewsletterManagement from "../views/NewsletterManagement.vue"
import AssessmentManagement from "../views/AssessmentManagement.vue"
import FinancialManagement from "../views/FinancialManagement.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqPage,
  },
  {
    path: '/requestinfo',
    name: 'requestinfo',
    component: ContactView
  },
  {
    path: '/modules',
    name: 'modules',
    component: ModulesView,
  },
  {
    path: '/modules/attendancemanagement',
    name: 'attendance',
    component: AttendanceManagement,
  },
  {
    path: '/modules/communicationsmanagement',
    name: 'communicationsmanagement',
    component: CommunicationsView,
  },
  {
    path: '/modules/admissionmanagement',
    name: 'admissionmanagement',
    component: AdmissionsManagement,
  },
  {
    path: '/modules/schooleventmanagement',
    name: 'schooleventmanagement',
    component: SchoolEvent,
  },
  {
    path: '/modules/transportmanagement',
    name: 'transportmanagement',
    component: TransportationManagement,
  },
  {
    path: '/modules/newslettermanagement',
    name: 'newslettermanagement',
    component: NewsletterManagement,
  },
  {
    path: '/modules/assetmanagement',
    name: 'assetmanagement',
    component: AssetManagement,
  },
  {
    path: '/modules/transportmanagement',
    name: 'transportmanagement',
    component: TransportationManagement,
  },
  {
    path: '/modules/financialmanagement',
    name: 'financialmanagement',
    component: FinancialManagement,
  },
  {
    path: '/modules/administrationportalmanagement',
    name: 'administrationportalmanagement',
    component: AdministrationPortal,
  },
  {
    path: '/modules/assessmentmanagement',
    name: 'assessmentmanagement',
    component: AssessmentManagement,
  },
  {
    path: '/onboarding',
    name: 'onboarding',
    component: OnboardingRequirement
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: PageNotFound,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
