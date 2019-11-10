<template>
  <div>
    <div id="head">
      <div @click="shopBack()" class="backBtn">
        <img src="../../../public/img/backBtn.png" alt />
      </div>
      <p>品牌优选</p>
      <div class="list">
        <p>编辑</p>
      </div>
    </div>
    <div class="middleBox">
      <div class="center" v-for="(item,index) in sortGoodsArr" :key="index">
        <div class="content">
          <div class="sigleChoose">
            <input type="checkbox" :checked="item.flag" @change="handleGoodsChange(index)" />
          </div>
          <div class="imgContainer">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="txt">
            <div class="goodsName">{{item.brandEnName}}/{{item.brandCname}}</div>
            <div class="introduce">{{item.name}}</div>
            <div class="colorName">颜色: 红色系</div>
            <div class="tags">
              <span>仅剩一件</span>
              <span>海外</span>
            </div>
            <div class="num">
              <div class="price">￥{{item.refPrice}}</div>
              <div class="borderline">
                <div class="leftDiv" @click="handleReducer(index)">-</div>
                <input type="text" :value="item.num" class="inputBox" />
                <div class="leftDiv" @click="handleAdd(index)">+</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottomColor"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="selectAll">
        <input type="checkbox" :checked="selectedAll" @click="bottomSeclected()"/>
        <span>全选</span>
      </div>
      <div class="priceArea">￥{{goodsPrice.goodsPriceSum}}</div>
      <div class="buy">去结算</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations,mapActions,mapGetters } from "vuex";
export default {
  name: "Shop",
  data() {
    return {
      pre: "",
      info: "",
      sortGoodsArr: [],
    };
  },
  computed:{
    ...mapState({
      goods: state => state.goods,
      selectedAll:state=>state.selectedAll,
    }),
    ...mapGetters({
       goodsPrice:"more/goodsPrice"
    })
  },
  created() {
    this.pre = this.$route.params.goods;
    if (this.pre ) {
      this.info = this.pre;
      this.info.flag=true;
      // this.info.selectAll=true;
      this.info.num=1;
      if (JSON.parse(sessionStorage.getItem("Arr"))) {
        for (var j = 0;j < JSON.parse(sessionStorage.getItem("Arr")).length;j++) {
          this.sortGoodsArr.push(JSON.parse(sessionStorage.getItem("Arr"))[j]);
        }
      }
      sessionStorage.setItem("msg", JSON.stringify(this.info));
      this.sortGoodsArr.push(JSON.parse(sessionStorage.getItem("msg")));
      sessionStorage.setItem("Arr", JSON.stringify(this.sortGoodsArr));
    } else {
      this.info = JSON.parse(sessionStorage.getItem("msg"));
      for (var j = 0;j < JSON.parse(sessionStorage.getItem("Arr")).length;j++) {
        this.sortGoodsArr.push(JSON.parse(sessionStorage.getItem("Arr"))[j]);
      }
    };
    this.getShopCarGoods(this.sortGoodsArr);
  },
  mounted() {},
  methods: {
    ...mapMutations({
      handleGoodsChange:"more/handleGoodsChange",
      handleReducer:"more/handleReducer",
      handleAdd:"more/handleAdd",
      bottomSeclected:"more/bottomSeclected"
    }),
    ...mapActions({
        getShopCarGoods:"more/getShopCarGoods"
    }),
    shopBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
#head {
  width: 100%;
  height: 0.3667rem;
  position: fixed;
  display: flex;
  top: 0rem;
  padding-bottom: 0.3667rem;
  background: white;
  /* background:rgb(109, 105, 105); */
}
.backBtn {
  width: 0.4583rem;
  height: 0.3667rem;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.backBtn img {
  width: 0.1917rem;
  height: 0.1917rem;
}
#head p {
  width: 2.2083rem;
  height: 0.3667rem;
  text-align: center;
  font-size: 0.1417rem;
  line-height: 0.3667rem;
  color: black;
  font-family: STHeiti, Helvetica Neue;
}
.list {
  width: 0.4583rem;
  height: 0.3667rem;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list img {
  width: 0.1917rem;
  height: 0.1917rem;
}
.middleBox {
  margin-top: 0.3667rem;
  padding-bottom: 0.4067rem;
}
.center {
  width: 100%;

  overflow: hidden;
}
.content {
  width: 3rem;
  height: 1.3333rem;
  color: black;
  display: flex;
  align-items: center;
}
.sigleChoose {
  width: 0.3333rem;
  height: 1.3333rem;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 0.125rem;
}
.imgContainer img {
  width: 0.9167rem;
  height: 0.9167rem;
  background: #ccc;
  margin-left: 0.0833rem;
  margin-right: 0.0533rem;
}
.txt {
  width: 1.7917rem;
  height: 0.9167rem;
}
.goodsName {
  width: 1.7917rem;
  height: 0.1417rem;
}
.introduce {
  width: 1.7917rem;
  height: 0.1417rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.colorName {
  width: 1.7917rem;
  height: 0.1417rem;
}
.tags {
  width: 1.7917rem;
  height: 0.125rem;
  margin-top: 0.0417rem;
  margin-bottom: 0.0917rem;
}
.tags span {
  padding-left: 0.025rem;
  padding-right: 0.025rem;
  margin-right: 0.0417rem;
  background-color: #f8a120;
}
.price {
  font-size: 0.1417rem;
  color: #000b0b;
  margin-right: 0.3333rem;
}
.num {
  display: flex;
  height: 0.2083rem;
  /* justify-content: space-between; */
}
.borderline {
  width: 0.7667rem;
  height: 0.2083rem;
  display: flex;
  border: solid 0.0042rem #ccc;
}
.leftDiv {
  width: 0.1917rem;
  height: 0.1917rem;
  line-height: 0.1917rem;
  background: white;
  text-align: center;
}
.inputBox {
  width: 0.3333rem;
  height: 0.1917rem;
  border: none;
  text-align: center;
  margin: 0;
}
.bottomColor {
  width: 100%;
  height: 0.1267rem;
  background: #ccc;
}
.bottom {
  width: 100%;
  height: 0.4167rem;
  position: fixed;
  bottom: 0;
  background: yellow;
  display: flex;
}
.selectAll {
  width: 0.4167rem;
  height: 0.4167rem;
  padding-left: 0.0958rem;
  padding-right: 0.0958rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.priceArea {
  width: 1.5667rem;
  height: 0.4167rem;
  padding-right: 0.0833rem;
  display: flex;
  justify-content: flex-end;
  font-size: 0.125rem;
  align-items: center;
  font-size: 0.1417rem;
}
.buy {
  width: 1.0833rem;
  height: 0.4167rem;
  background: rgb(209, 16, 16);
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 0.15rem;
}
</style>