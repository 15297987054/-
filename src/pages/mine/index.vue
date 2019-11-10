<template>
    <div>
       <Login v-if="flag" />
       <Register v-if="!flag" />
    </div>
</template>
<script>
import Login from "@common/login"
import Register from "@common/register"
import {mapState} from "vuex"
export default {
    name:"Mine",
   
   computed:{
       ...mapState({
           flag:state=>state.flag,
       })
   },  
    components:{
        Login,
        Register

    }
}
</script>

