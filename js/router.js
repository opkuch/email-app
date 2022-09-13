import emailApp from "./views/email-app.cmp.js"
import emailDetails from "./views/email-details.cmp.js"

const routes = [
    {
        path: '/',
        component: emailApp
    },
 
    {
        path: '/:emailId',
        component: emailDetails
    },
    {
        path: '/inbox',
        component: emailApp
    },
    {
        path: '/sent',
        component: emailApp
    },
    {
        path: '/trash',
        component: emailApp
    },
    {
        path: '/star',
        component: emailApp
    },
    {
        path: '/draft',
        component: emailApp
    }
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})