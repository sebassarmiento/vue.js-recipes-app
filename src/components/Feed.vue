<template>

    <div class="feed">
        <Recipe v-for="(recipe, index) in recipes" v-bind:key="index" v-bind:recipe="recipe" />
    </div>
    
</template>

<script>
import Recipe from '../components/Recipe.vue'

export default {
    name: 'Feed',
    components: {
        Recipe
    },
    data(){

        return {
            recipes: null
        }

    },
    mounted(){
        fetch('https://www.food2fork.com/api/search?key=fe8c22adb6442e2470b0b3061e94109a&q=vegan')
        .then(d => d.json())
        .then(res => {
            console.log(res.recipes[0])
            this.recipes = res.recipes
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>

<style scoped>

.feed{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;
    align-items: center;
    grid-gap: 12px;
    padding: 12px;

}

</style>
