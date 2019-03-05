<template>

    <div class="recipe">
        <div class="recipe-img"><img v-bind:src="recipe.image_url" alt="logo"></div>
        <div class="recipe-info">
            <h1>{{recipe.title || 'Recipe title'}}</h1>
            <h4>By <a v-bind:href="recipe.publisher_url" target="_blank" >{{ recipe.publisher }}</a></h4>
            <div class="recipe-rating">
                <i class="fas fa-star"></i>
                {{ Math.round(recipe.social_rank) / 10 }}
            </div>
            <i v-on:click="fullRecipe" class="far fa-eye see-recipe-btn"></i>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Recipe',
    props: {
        recipe: Object
    },
    methods: {

        fullRecipe(){
            this.$router.push(`/recipe/${this.recipe.recipe_id}`)
        }

    }
}
</script>

<style scoped>

.recipe{
    height: 400px;
    max-width: 100%;
    min-width: 100%;
    background: white;
    border-radius: 0px;
    margin: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.recipe-img {
    flex: 3;
    display: flex;
    align-items: center;
    background: green;
    justify-content: center;
}
.recipe-img img{
    min-width: 100%;
    min-height: 100%;
}

.recipe-info{
    max-height: 30%;
    flex: 2;
    background: white;
    padding: 12px;
    text-align: left;
    position: relative;
}

.recipe-info p{
    max-height: 70%;
    overflow: hidden;
}

.recipe-info h4{
    font-weight: 500;
}
.recipe-info h4 a{
    text-decoration: none;
    font-weight: 600;
    color: inherit;
}
.recipe-info h1{
    line-height: 1.2em;
    max-height: 2.4em;
    padding-right: 30%;
    overflow: hidden;
}

.recipe-rating{
    position: absolute;
    top: 60%;
    right: 30px;
}
.recipe-rating i{
    color: #f78ca0;
}

.see-recipe-btn{
    position: absolute;
    top: -30px;
    right: 30px;
    height: 60px;
    width: 60px;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    cursor: pointer;
}

</style>
