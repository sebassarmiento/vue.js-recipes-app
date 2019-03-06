<template>

    <div>

    <div v-if="recipe" class="individual-recipe">
        <div class="recipe-title">
            <h2>{{ recipe.title }}</h2>
            <h5>By {{ recipe.publisher }}</h5>
        </div>
        <div class="recipe-img">
            <img v-bind:src="recipe.image_url" alt="">
        </div>
        <div class="recipe-ingredients">
            <h3>Ingredients</h3>
            <ul>
                <li v-for="i in recipe.ingredients" v-bind:key="i" >{{ i }}</li>
            </ul>
        </div>
    </div>
    <Loader v-else />

    </div>
    
</template>

<script>
import Loader from '../components/Loader.vue'

export default {
    name: 'IndividualRecipe',
    components: {
        Loader
    },
    data(){
        return {
            recipe: null
        }
    },
    mounted(){
        let recipeId = this.$route.params.recipeId
        fetch(`https://www.food2fork.com/api/get?key=fe8c22adb6442e2470b0b3061e94109a&rId=${recipeId}`)
        .then(d => d.json())
        .then(res => {
            this.recipe = res.recipe
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>

<style scoped>

.recipe-title{
    position: absolute;
    top: 40px;
    width: 100%;
    left: 0px;
}

.individual-recipe{
    display: flex;
    height: calc(100vh - 70px);
    overflow: hidden;
    align-items: center;
    position: relative;
}

.recipe-img{
    flex: 1;
    min-height: calc(100vh - 70px);
    max-height: calc(100vh - 70px);
    max-width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.recipe-img img{
    max-height: 60vh;
    max-width: 50vw;
}

.recipe-ingredients{
    flex: 1;
    text-align: left;
}
.recipe-ingredients h3{
    text-align: center;
    padding: 12px 24px;
}
.recipe-ingredients ul{
    max-height: 50vh;
    overflow: scroll;
}

</style>
