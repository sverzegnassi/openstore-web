import Vue from 'vue';
import Router from 'vue-router';
import Browse from '@/components/Browse';
import Package from '@/components/Package';
import Docs from '@/components/Docs';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'browse',
            component: Browse,
        }, {
            path: '/snaps',
            name: 'browse_snaps',
            component: Browse,
        }, {
            path: '/app/:id',
            name: 'app',
            component: Package,
        }, {
            path: '/snap/:id',
            name: 'snap',
            component: Package,
        }, {
            path: '/docs',
            name: 'docs',
            component: Docs,
        },
    ],
});