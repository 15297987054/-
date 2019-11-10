<template>
  <Bscroll ref="scroll">
    <div class="movie_body">
      <router-link 
        tag="div"
        :to="{name:'detail',params:{id:item.id}}" class="movie_item" v-for="(item,index) in currentMovie" :key="index">
        <div class="movie_item_pic">
           <img :src="item.img | imgUrl('128.180')" />
        </div>
        <div class="movie_item_info">
          <h2>{{item.nm}}</h2>
          <p>
            观众评:
            <span class="grade">{{item.sc}}</span>
          </p>
          <p>
            主演：
            <span>{{item.star}}</span>
          </p>
          <p>
            <span>{{item.showInfo}}</span>
          </p>
        </div>
        <div
          :class="item.globalReleased?'movie_item_btn asale':'movie_item_btn ticket'"
        >{{item.globalReleased?'购票':'预售'}}</div>
      </router-link>
    </div>
  </Bscroll>
</template>

<script>
import {movieNowApi} from "@api"
import {mapActions} from "vuex"
export default {
    name:"CurrentMovie",
    async activated(){
        if(this.cityId != this.$store.state.city.id||!sessionStorage.getItem("currentMovie")){
            let data = await movieNowApi(this.$store.state.city.id);
            console.log(data)
            this.currentMovie=data.data.movieList;
            sessionStorage.setItem("currentMovie",JSON.stringify(data.data.movieList));
            this.cityId=this.$store.state.city.id;
        }else{
            this.currentMovie=JSON.parse(sessionStorage.getItem("currentMovie"))
        }
    },
    data(){
        return{
            currentMovie:[],
            flag:false,
            cityId:1
        };
    },
    mounted(){
        this.$refs.scroll.handlepullingDown(async()=>{
            var arr=[20,40,51,56,70,76];
            var index=parseInt(Math.random()*8);
            let data=await movieNowApi(arr[index]);
            if(data.msg=="ok"){
                this.currentMovie=data.data.movieList;
                this.$refs.scroll.handlefinishPullDown();
            }
        })
    },
    updated(){
        this.$refs.scroll.handlepullingUp();
    }
}
</script>

<style>
        #content .movie_body {
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-top: .9rem;
  overflow-x: hidden;
}
#content .movie_body .movie_item {
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fff;
}
#content .movie_body .movie_item .movie_item_pic {
  width: 1.28rem;
  height: 1.8rem;
}
#content .movie_body .movie_item .movie_item_pic img {
  width: 100%;
  height: 100%;
}
#content .movie_body .movie_item .movie_item_info {
  margin-left: 0.2rem;
  flex: 1;
  height: 100%;
}
#content .movie_body .movie_item .movie_item_info h2 {
  font-size: 0.34rem;
  line-height: 0.5rem;
  width: 3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .movie_body .movie_item .movie_item_info p {
  font-size: 0.26rem;
  line-height: 0.45rem;
  color: #666;
  width: 4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .movie_body .movie_item .movie_item_info p .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 0.3rem;
}

#content .movie_body .movie_item .movie_item_btn {
  width: 1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  font-size: 0.26rem;
  cursor: pointer;
}
#content .movie_body .movie_item .asale {
  background-color: #f03d37;
}
#content .movie_body .movie_item .ticket {
  background-color: #3c9fe6;
}
</style>