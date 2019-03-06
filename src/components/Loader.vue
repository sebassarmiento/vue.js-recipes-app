<template>

    <div class="loader">
        
    </div>
    
</template>

<script>
export default {
    name: 'Loader'
}
</script>

<style scoped>

.loader{
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    height: 100px;
    width: 100px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid transparent;
    border-top: 2px solid black;
    animation: spinner 1s ease-in-out;
}

@keyframes spinner {
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
}


</style>
