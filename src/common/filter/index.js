import Vue from "vue";

Vue.filter("imgUrl",(value,info)=>{
    if(value){
        return value.replace(/w\.h/,info)
    }
})

// import Vue from "vue";

// Vue.filter("imgUrl",(value,info)=>{
//     if(value){
//         return value.replace(/w\.h/,info)
//     }
// })