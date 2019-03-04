<template>

    <div class="recipe">
        <div class="recipe-img"><img src="../assets/logo.png" alt="logo"></div>
        <div class="recipe-info">
            <h1>Recipe title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatum. Fugiat reiciendis, voluptatibus earum harum provident nihil. Saepe aliquid quam, repellendus iure hic velit perferendis harum. Hic quidem consectetur numquam!</p>
            <i class="far fa-eye see-recipe-btn"></i>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Recipe',
    props: ['title']
}
</script>

<style scoped>

.recipe{
    height: 400px;
    width: 400px;
    background: white;
    border-radius: 12px;
    margin: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.recipe-img {
    flex: 3;
    display: flex;
    align-items: center;
    background: green;
    justify-content: center;
}

.recipe-info{
    max-height: 50%;
    flex: 2;
    background: rgb(228, 225, 225);
    padding: 12px;
    text-align: left;
    position: relative;
}

.recipe-info p{
    max-height: 70%;
    overflow: hidden;
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
}

</style>
