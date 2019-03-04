<template>

    <div class="app-menu">
            <i class="fas fa-search"></i>
            <i class="fas fa-heart"></i>
            <i class="fas fa-plus"></i>
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
    top: 0;
    left: 0;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.329);
    z-index: 2;
}

.app-menu i{
    padding: 0px 12px;
    cursor: pointer;
}

</style>
