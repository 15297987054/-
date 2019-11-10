<template>
    <div class="popularbrand">
        <ul>
            <h3>{{popularList.title}}</h3>
            <h4>{{popularList.subTitle}}</h4>
            <div>
                 <li v-for="(item,index) in popularList.list" :key="index"><img :src="item.img" alt="" ><span>{{item.title}}</span></li>
           
            </div>
        </ul>
    </div>
</template>
<script>
 import { mapState} from "vuex";
export default {
    data(){
        return{
           
        }
    },
    computed:{
        ...mapState({
            popularList:state=>state.home.homepopularlist,
        })
    }
}
</script>
<style scoped>
.popularbrand{
        margin-top:0.0833rem; 
        background: #f5f5f5;
    }
     .popularbrand >ul{
     padding: 0.1667rem 0.125rem ;
     background: white;
     margin-bottom:0.0833rem; 
    }
    
    .popularbrand>ul div{
        height: 2.0833rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .popularbrand>ul div li{
        text-align: center;
        width: 0.875rem;
        height: 0.9167rem;

    }
    .popularbrand>ul li img{
        margin-left:0.0633rem; 
        width: 0.75rem;
        height: 0.75rem;
    }

    .popularbrand h3{
        width: 2.1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: bolder;
        font-size: 0.1583rem;
        margin-bottom: 0.0167rem;
    }
    .morpopularbrandelist h4{
        margin-bottom:0.125rem; 
    }
</style>