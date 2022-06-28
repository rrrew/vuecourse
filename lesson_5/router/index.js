import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardPageVue from '../src/views/DashboardPage';
import AboutPageVue from '../src/views/AboutPage.vue';
import NotFoundVue from '../src/views/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter ({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardPageVue,
        },
        {
            path: '/dashboard/:page',
            name: 'dashboard',
            component: DashboardPageVue,
        },
        {
            path: '/dashboard/add/payment*',
            name: 'dashboard',
            component: DashboardPageVue,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPageVue,
        },
        {
            path: '/notfound',
            name: 'notfound',
            component: NotFoundVue,
        },
        {
            path: '*',
            redirect: '/notfound',
        },
    ]
});


// const userAuth = true;
// router.beforeEach((to, from, next) => {
//     if (!userAuth && to.name !== 'notfound') next ({name: 'notfound'});
//     next()
// })
const titles = {
    dashboard: 'Dashboard',
    about: 'About',
    notfound: '404 Not found',
};
router.afterEach ((to) => {
    document.title = titles[to.name]
})

export default router;