<template>
    <div class="home-updata">
        <ul v-for="(item,index) in updataimglist" :key="index">
           <img :src="item.img" alt=""> 
        </ul>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    data(){
            return{
                
            }
    },
    computed:{
        ...mapState({
            updataimglist:state=>state.home.homeupdatalist,
        })
    }   
}
</script>
<style scoped>
.home-updata{
    margin-top:0.0833rem; 
    background: #f5f5f5;
    padding-bottom:0.001rem;
}
.home-updata ul {
    height:1.6667rem;
    margin-bottom:0.12rem; 
}
.home-updata ul img{
    width: 100%;
}
</style>