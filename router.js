import VueRouter from 'vue-router'
import Blog from './pages/Blog.vue'
import Main from './pages/Main.vue'
import NotFoundCmp from './pages/NotFound.vue'
import Post from './pages/Post.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/blog',
            component: Blog
        },
        {
            path: '/post/:id',
            component: Post,
            name: 'post',
            beforeEnter: (to, from, next) => {
                if (to.params.id > 36) {
                    next({path: '*'});
                } else if (to.params.id < 1) {
                    next({path: '*'});
                } else next();
            }
        },
        {path: '/404', component: NotFoundCmp},
        {path: '*', redirect: '/404'}
    ]
});