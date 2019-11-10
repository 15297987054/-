<template>
  <div id="more_body">
    <div class="head">
      <div class="content">
        <router-link :to="path" class="backBtnMore" tag="div">
          <img src="../../../public/img/backBtn.png" alt />
        </router-link>
        <div class="search">
          <input type="text" :value="goodsType" />
        </div>
        <p @click="chooseOneTypeGoods(goodsType)">筛选</p>
      </div>
      <div id="afterContent">
        <div id="swiper-container">
          <div
            class="swiper-slide"
            v-for="(item,index) in nav"
            :key="index"
            :class="activeIndex == index?'active':''"
            @click="handleActive(index)"
          >{{item}}</div>
        </div>
      </div>
    </div>
    <div class="mod-list">
      <ul class="mod-list-goods">
        <router-link
          :to="{name:'details',params:{info:item}}"
          v-for="(item,index) in chooseGoods"
          :key="index"
          tag="li"
        >
          <div class="imgContainer">
            <img :src="item.imgUrl" alt :id="(index+1)%2==0 ? 'bor':''" />
          </div>
          <div class="txtContent">
            <div class="text-first">{{item.brandCnName}}</div>
            <p class="text-second">{{item.name}}</p>
            <p class="text-price">￥{{item.refPrice}}</p>
            <p class="text-vipprice" :id="item.tipTag ? '':'vipprice'">
              ￥{{item.tipPrice}}
              <span>{{item.tipTag}}</span>
            </p>
            <p class="text-selfsell">{{item.tags[1]}}</p>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "More",

  created() {
    this.handleGetgoods();
    this.choosegoods();
    // this.chooseOneTypeGoods();
    // this.chooseGoods();
    let { name } = this.$route.query;
    this.goodsType = name;
    console.log(this.goodsType);
  },
  data() {
    return {
      activeIndex: "",
      goodsType: "",
      path: "/brand",
      val: "goodsName",
      nav: ["综合", "销量", "价格", "折扣", "潮奢节", "优惠", "材质", "开合"]
    };
  },
  computed: {
    ...mapState({
      // goodslist: state => state.more.goodslist,

      chooseGoods: state => state.more.chooseGoods
    })
  },
  methods: {
    ...mapActions({
      handleGetgoods: "more/handleGetgoods",
      chooseOneTypeGoods:"more/chooseOneTypeGoods",
      // chooseGoods: "more/chooseGoods",

      choosegoods:"more/choosegoods",

      sortArr: "more/sortArr"
    }),
    handleActive(index) {
      this.activeIndex = index;
      this.sortArr();
    }
  }
};
</script>

<style scoped>
.head {
  top: 0;
  width: 3.125rem;
  height: 0.7917rem;
  position: fixed;
  background: white;
  z-index: 2;
}
.content {
  width: 100%;
  height: 0.4167rem;
  display: flex;
  align-items: center;
}
.backBtnMore {
  width: 0.4183rem;
  padding-top: 0.0853rem;
  padding-bottom: 0.0833rem;
  height: 0.4167rem;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.backBtnMore img {
  width: 0.3167rem;
  height: 0.3167rem;
}

.search {
  width: 2.2rem;
  height: 0.2667rem;
  background: thistle;
  padding-right: 0rem;
}
.content p {
  text-decoration: none;
  font-size: 0.125rem;
  color: #f8a120;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  margin-left: 0.1142rem;
}
.search input {
  width: 2.2rem;
  height: 0.2667rem;
  outline: none;
  background: #ccc;
  border: none;
  text-indent: 0.0833rem;
  font-size: 0.1267rem;
}
#swiper-container {
  width: 100%;
  height: 0.3583rem;
  padding-bottom: 0.0833rem;
  overflow-x: scroll;
  position: relative;
  display: flex;
  /* box-sizing: border-box; */
}
#swiper-container::-webkit-scrollbar {
  display: none;
}
.swiper-slide {
  width: 0.6167rem !important;
  text-align: center;
  /* display: flex; */
  float: left;
  height: 0.2667rem;
  border: 0.0083rem solid #e1e1e1;
  font-size: 0.125rem;
  line-height: 0.2667rem;
  text-align: center;
  padding-left: 0.0417rem;
  padding-right: 0.0417rem;
  margin-right: 0.0417rem;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
}
.active {
  border: 0.0083rem solid #f8a120;
  color: #f8a120;
}
.mod-list {
  margin-top: 0.7917rem;
  width: 100%;
  overflow: hidden;
  padding-bottom: 0.8333rem;
}
.mod-list-goods {
  width: 100%;
  list-style: none;
}
.mod-list-goods li {
  width: 1.5625rem;
  height: 2.725rem;
  padding-bottom: 0.25rem;
  float: left;
}
#bor {
  border-right: none;
}
.imgContainer {
  width: 1.5583rem;
  height: 1.5583rem;
}
.imgContainer img {
  width: 1.5625rem;
  height: 1.5583rem;
  border-bottom: 0.0167rem solid black;
  border-right: 0.0167rem solid black;
}
.txtContent {
  width: 1.3083rem;
  padding-left: 0.125rem;
  padding-right: 0.125rem;
  height: 0.9583rem;
}
.text-first {
  width: 1.3083rem;
  height: 0.1292rem;
  margin-top: 0.2083rem;
  font-size: 100%;
}
.text-second {
  width: 1.3083rem;
  height: 0.1375rem;
  font-size: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.0333rem;
}
.text-price {
  width: 1.3083rem;
  height: 0.2rem;
  margin-top: 0.0833rem;
  font-size: 0.1375rem;
  color: #1c1717;
}
#vipprice {
  color: #ccc;
}
.text-vipprice {
  width: 1.3083rem;
  height: 0.1667rem;
  margin-top: 0.0083rem;
  color: #1c1717;
}
.text-vipprice span {
  color: #8b572a;
}
.text-selfsell {
  width: 1.3083rem;
  height: 0.1417rem;

  font-size: 0.1rem;
  color: #8b572a;
}
</style>