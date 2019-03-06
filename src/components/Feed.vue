<template>

    <div>

    <div v-if="recipes" class="feed">
        <h1 class="results-text" v-if="searched && recipes.length > 0" >Showing results for '{{ searched }}'</h1>
        <h1 class="results-text" v-else-if="searched" >No results for '{{ searched }}'</h1>
        <Recipe v-for="(recipe, index) in recipes" v-bind:key="index" v-bind:recipe="recipe" />
        <button v-if="recipes.length > 0" v-on:click="loadMore" >{{ loadingBtn ? 'Loading...' : 'Load more' }}</button>
    </div>
    <Loader v-else />
    
    </div>

</template>

<script>
import Recipe from '../components/Recipe.vue'
import Loader from '../components/Loader.vue'

export default {
    name: 'Feed',
    components: {
        Recipe,
        Loader
    },
    data(){

        return {
            recipes: null,
            loadingBtn: false,
            page: 1,
            searched: false
        }

    },
    methods: {

        loadMore(){
            this.loadingBtn = true
            this.page++
            this.getData(`https://www.food2fork.com/api/search?key=fe8c22adb6442e2470b0b3061e94109a${this.searched ? `&q=${this.searched}` : ''}&page=${this.page}`)
        },

        searchData(url){
            fetch(url)
            .then(d => d.json())
            .then(res => {
                this.recipes = res.recipes
            })
            .catch(err => {
                console.log(err)
            })
        },

        getData(url){
            fetch(url)
            .then(d => d.json())
            .then(res => {
                this.loadingBtn = false
                this.recipes = [...this.recipes, ...res.recipes]
            })
            .catch(err => {
                this.loadingBtn = false
                console.log(err)
            })
        }

    },
    mounted(){
        console.log('Mounted')
        console.log(this.searched, this.$route.query)
        if(this.$route.query.q)this.searched = this.$route.query.q
        fetch(`https://www.food2fork.com/api/search?key=fe8c22adb6442e2470b0b3061e94109a${this.searched ? `&q=${this.searched}` : ''}`)
        .then(d => d.json())
        .then(res => {
            console.log(res.recipes)
            this.recipes = res.recipes
        })
        .catch(err => {
            console.log(err)
        })

    },
    watch: {
        $route(to, from){
            console.log(to)
            console.log(from)
            if(to.query.q){
                this.recipes = null
                this.searched = to.query.q
                this.searchData(`https://www.food2fork.com/api/search?key=fe8c22adb6442e2470b0b3061e94109a&q=${to.query.q}`)
            } else {
                this.recipes = null
                this.searched = false
                this.searchData(`https://www.food2fork.com/api/search?key=fe8c22adb6442e2470b0b3061e94109a`)
            }
        }
    }
}
</script>

<style scoped>

.feed{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: repeat( auto-fit, minmax(400px, 1fr) );
    grid-gap: 12px;
    padding: 12px;
}

.results-text{
    grid-column: 1 / -1;
    padding: 18px;
    text-align: center;
    animation: showResultsText 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-size: 1em;
    transform-origin: top;
}
@keyframes showResultsText {
    0%{
        transform: translateY(-150px);
    }
    100%{
        transform: translateY(0px);
    }
}


.feed button{
    grid-column: 1 / -1;
    padding: 18px;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    background: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
    color: white;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.feed button:hover{
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.363);
    transform: translateY(-4px);
}

</style>
