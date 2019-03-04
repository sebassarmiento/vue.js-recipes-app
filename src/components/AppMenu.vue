<template>

    <div class="app-menu">
        <ul>
            <i class="fas fa-search"></i>
            <i class="fas fa-heart"></i>
            <i class="fas fa-plus"></i>
        </ul>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

.app-menu{
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);    
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
}

.app-menu i{
    padding: 0px 12px;
    cursor: pointer;
}

</style>
