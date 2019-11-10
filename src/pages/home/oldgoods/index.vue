<template>
    <div>
        <div class="search">
            <input type="text" placeholder="搜索lv典范经典款式">
        </div>
        <div class="banner">
            <div class="banner1"></div>
            <img src="https://pic12.secooimg.com/res/topic/c3c9e7b02e104eab91636494f9b28571.jpg_!!0x0.webp" alt="">
        </div>
        <div class="new">
            <img src="https://pic12.secooimg.com/res/topic/6e71c771d40a426c88b0b8968d7bfa5c.jpg_!!0x0.webp" alt="">
        </div>
        <Daygoods/>
        <div >
            <img style="width:100%" src="https://pic12.secooimg.com/res/topic/93403deb4cfd4a778df327e2da7f7557.jpg_!!0x0.webp" alt="">
            <img style="width:100%" src="https://pic12.secooimg.com/res/topic/532162ff7c4a4bf0b7ea424d375844fa.jpg_!!0x0.webp" alt="">
            <img style="width:100%" src="https://pic12.secooimg.com/res/topic/b8eb1787ba314663bb6752307c8debe1.jpg_!!0x0.webp" alt="">
            <img style="width:100%" src="https://pic12.secooimg.com/res/topic/062373a986bf4902b5fb1ca4f3d508e3.jpg_!!0x0.webp" alt="">
        </div>
        <Oldgoods/>
    </div>
</template>
<script>
import {oldgoodsApi} from "@api/oldgoods"
import Daygoods from "@components/oldgoods/daygoods"
import Oldgoods from "@components/oldgoods/oldgoods"

export default {
    data(){
        return{
            
        }
    },
    components:{
        Daygoods,
        Oldgoods
    },
    async created(){
        let data=await oldgoodsApi();
       // console.log(data);
    }
}
</script>
<style scoped>
.search{
    padding-top: 10px;
    background: url(https://pic12.secooimg.com/res/common/20190826imgs/0826_bg.jpg) repeat-y;
}
input{
    
    display: block;
    width: 2.775rem;
    height:0.275rem;
    margin: 0 auto;
    border: 1px solid #ffd7a1;
    background: url(https://pic12.secooimg.com/res/common/20190826imgs/0826_bg.jpg) repeat-y;
    background: url(https://pic12.secooimg.com/res/common/20190826imgs/search.png) no-repeat 2px 2px /8%;
}
input::-webkit-input-placeholder{
    color:#ffd7a1;
    font-size: 15px;
    padding-left: 0.25rem;
}
.banner{
    width:100%;
    height:2.766rem;
    background: url(https://pic12.secooimg.com/res/common/20190826imgs/0826_bg.jpg) repeat-y;
    overflow: hidden;
}
.banner1{
    width: 1.75rem;
    height: 0.625rem;
    position: relative;
    top:40px;
    margin: 10px 0 0 10px;
    background: url(https://pic12.secooimg.com/res/common/20190826imgs/Bitmap.png) no-repeat 0px 0px/100%;
}
.banner img{
    width: 2.875rem;
    height: 2.083rem;
    margin: 0 auto;
}
.new{
    background: url(https://pic12.secooimg.com/res/common/20190826imgs/0826_bg.jpg) repeat-y;
}
.new img{
    width: 100%;
}
</style>