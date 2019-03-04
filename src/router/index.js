import Vue from 'vue'
import Router from 'vue-router'
import Feed from '../components/Feed.vue'
import IndividualRecipe from '../components/IndividualRecipe.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Feed',
            component: Feed
        },
        {
            path: '/recipe/:recipeId',
            name: 'Recipe',
            component: IndividualRecipe
        }
    ]
})