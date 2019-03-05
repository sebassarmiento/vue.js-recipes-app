<template>

    <div class="app-menu">
            <div class="search">
                <input type="text">
                <i class="fas fa-search"></i>
            </div>
            <i v-on:click="redirect('/')" class="fas fa-home"></i>
            <i v-on:click="redirect('/liked')" class="fas fa-heart"></i>
    </div>
    
</template>

<script>
export default {
    name: 'AppMenu',
    methods: {

        redirect(link){
            this.$router.push(link)
        }

    }
    
}
</script>

<style scoped>

.app-menu{
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);    
    height: 60px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.329);
    z-index: 2;
    padding: 0px 12px;
}

.app-menu i{
    padding: 0px 12px;
    cursor: pointer;
}

.app-menu .search{
    flex: 1;
    display: flex;
    justify-content: flex-start;
}

.app-menu .search input{
    padding: 8px 12px;
    font-size: 1em;
    border-radius: 24px;
    border: none;
    width: 30vw;
}
.app-menu .search i{
    padding: 12px 40px;
    border-radius: 24px;
    margin-left: -40px;
    background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
    color: white;
    transition: all 0.2s ease-in-out;
}

.search i:hover{
    box-shadow: 0px 0px 20px white;
}


</style>
