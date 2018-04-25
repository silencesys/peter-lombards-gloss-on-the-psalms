import Vue from 'vue'
import VueRouter from 'vue-router'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-pro-solid'
import regular from '@fortawesome/fontawesome-pro-regular'
import brands from '@fortawesome/fontawesome-free-brands'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import routes from './routes.js'
import { EventBus } from './EventBus'
import SiteHeader from './components/SiteHeader'
import SiteGuide  from './components/GuideOverlay'

/**
 * Initialize Vue-Router component.
 */
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

/**
 * Add font awesome component.
 */
fontawesome.library.add(solid, regular, brands);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    el: '#app',
    components: {
        SiteHeader,
        SiteGuide
    },
    data: {
        guide: false
    },
    methods: {
        hideGuideOverlay() {
            document.body.className = document.body.className.replace("lom--guide-visible", "");
            this.guide = false;
        }
    },
    mounted() {
        if (this.$route.name === 'home') {
            document.body.className += "lom--guide-visible";
            this.guide = true;
        }
    },
    router
});