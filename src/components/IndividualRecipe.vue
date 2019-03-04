<template>

    <div v-if="recipe" class="individual-recipe">
        <h2>{{ recipe.title }}</h2>
        <img v-bind:src="recipe.image_url" alt="">
    </div>
    
</template>

<script>
export default {
    name: 'IndividualRecipe',
    data(){
        return {
            recipe: null
        }
    },
    mounted(){
        let recipeId = this.$route.params.recipeId
        console.log(this.$route.params.recipeId)
        fetch(`https://www.food2fork.com/api/get?key=fe8c22adb6442e2470b0b3061e94109a&rId=${recipeId}`)
        .then(d => d.json())
        .then(res => {
            console.log(res)
            this.recipe = res.recipe
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>

<style scoped>

</style>
